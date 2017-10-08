(function(){
  document.getElementById('menu-toggle').addEventListener('click', function(e) {
    [].map.call(document.querySelectorAll('.sidebar'), function(el) {

      el.classList.toggle('active');
    });
  });
})();
