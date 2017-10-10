(function(){
  function Adventure(){
    this.initialize();
  }

  Adventure.prototype.initialize = function(){
    var self = this;

    // set the names
    window.Ajax({
      url: '/api/adventures.json',
      success: function(res){
        self.names = res;
      },
      error: function(){ console.log("Failed to initialize names") }
    })
  }

  var adventure = new Adventure();
})()
