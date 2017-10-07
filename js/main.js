(function(){
  var $print = document.querySelectorAll('.js-print');

  $print.forEach(function(el){
    el.addEventListener('click', window.print);
  })

  document.querySelector('.menu-toggle').addEventListener('click', function(e) {
    [].map.call(document.querySelectorAll('.menu'), function(el) {

      el.classList.toggle('active');
    });
  });
})();
