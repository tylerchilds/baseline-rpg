(function(){
  var $print = document.querySelectorAll('.js-print');
  var $menuToggle = document.querySelectorAll('#menu-toggle');

  $print.forEach(function(el){
    el.addEventListener('click', window.print);
  })

  $menuToggle.forEach(function(el){
    el.addEventListener('click', function(e) {
      [].map.call(document.querySelectorAll('.sidebar'), function(el) {

        el.classList.toggle('active');
      });
    });
  })

  window.Ajax = function(options){
    var req = new XMLHttpRequest();

    req.open(options.method || "GET", options.url);

    req.onload = function() {
      if (req.status === 200) {
        var res = JSON.parse(req.responseText);

        options.success(res)
      } else {
        options.error();
      }
    };
    req.send();
  }

  window.DiceBag = {
    rollStat: function(){
      var rolls = [];
      for (var i = 0; i < 4; i++) {
        rolls.push(this.roll(6))
      }
      var lowFound = false;
      var result = Math.floor(rolls
        .filter(function(roll){
          if(lowFound || roll != Math.min.apply(null, rolls)) return true;
          lowFound = true; return false;
        }).reduce(function(a, b){ return a + b }, 0) / 3);

      return result;
    },

    roll: function(die){
      return Math.floor(Math.random() * die) + 1
    }
  }
})();
