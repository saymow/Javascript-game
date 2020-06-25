function preload() {
  gamePreload();
}

function keyPressed() {
  game.keyPressed(key);
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  // gameSound.loop();
  frameRate(30);
  game = new Game();
  initialScreen = new InitialScreen();
  initalButton = new Button("Iniciar", innerWidth / 2, innerHeight / 2);

  currentScene = "initialScreen";

  sceneController = {
    game,
    initialScreen,
  };

  game.setup();
}

function draw() {
  sceneController[currentScene].draw();
}
