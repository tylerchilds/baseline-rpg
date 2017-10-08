(function(){
  var $print = document.querySelectorAll('.js-print');

  $print.forEach(function(el){
    el.addEventListener('click', window.print);
  })
})();
