class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
    this.NoOfPlayers = createInput("").attribute("placeholder","Enter the number of players 2/3")
    //this.NOPButton2 = createButton("2 Players");
    //this.NOPButton3 = createButton("3 Players");
  }

  setElementsPosition() {
    this.titleImg.position(120, 160);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
    this.NoOfPlayers.position(width / 2 - 300, height / 2 - 150);
    //this.NOPButton3.position(width / 2 - 5, height / 2 + 35);
    //this.NOPButton2.position(width / 2 - 195, height / 2 + 35);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
    this.NoOfPlayers.class("customInput");
    //this.NOPButton2.class("customButton");
    //this.NOPButton3.class("customButton");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
    this.NoOfPlayers.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      this.NoOfPlayers.hide();
     // this.NOPButton2.hide();
     // this.NOPButton3.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      NoOfRockets = this.NoOfPlayers.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
