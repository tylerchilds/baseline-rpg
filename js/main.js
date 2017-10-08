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
})();
