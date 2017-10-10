(function(DiceBag){
  function Character(){
    this.ui = {
      layout: document.getElementById('character-layout'),
      name: document.getElementById('character-name'),
      strength: document.getElementById('character-strength'),
      dexterity: document.getElementById('character-dexterity'),
      intelligence: document.getElementById('character-intelligence')
    }

    this.initialize();
  }

  Character.prototype.initialize = function(){
    var self = this;

    this.strength = DiceBag.rollStat();
    this.dexterity = DiceBag.rollStat();
    this.intelligence = DiceBag.rollStat();

    // set the names
    window.Ajax({
      url: '/api/characters.json',
      success: function(res){
        self.name = res.names[DiceBag.roll(res.names.length) - 1];
        self.draw();
      },
      error: function(){ console.log("Failed to initialize names") }
    })
  }

  Character.prototype.draw = function(){
    this.ui.layout.style.display = "block";

    this.ui.name.innerText = this.name;
    this.ui.strength.innerText = this.strength;
    this.ui.dexterity.innerText = this.dexterity;
    this.ui.intelligence.innerText = this.intelligence;
  }

  document.getElementById('create').addEventListener('click', function(){
    var character = new Character();
  });
})(window.DiceBag)
