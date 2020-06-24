let cenaryImg, gameOverImg, gameSound, jumpSound, cenary, character, score;

const witchSprite = new SpriteModel(220, 270, 4, 4, 0.5);
const enemySprite = new SpriteModel(104, 104, 4, 7, 0.5);
const enemy2Sprite = new SpriteModel(400, 400, 5, 6, 0.5);
const enemy3Sprite = new SpriteModel(200, 150, 3, 6, 0.5);

const EnemysController = {
  Enemys: [],
  run(char) {
    this.Enemys.forEach((enemy) => {
      enemy.move();
      enemy.show();
    });

    return !this.Enemys.some((enemy) => {
      return char.subscribeCollision(enemy);
    });
  },
};

function preload() {
  enemySprite.img = loadImage("./assets/imagens/inimigos/gotinha.png");
  witchSprite.img = loadImage("./assets/imagens/personagem/correndo.png");
  enemy2Sprite.img = loadImage("./assets/imagens/inimigos/troll.png");
  enemy3Sprite.img = loadImage("./assets/imagens/inimigos/gotinha-voadora.png");
  cenaryImg = loadImage("./assets/imagens/cenario/floresta.png");
  gameSound = loadSound("./assets/sons/trilha_jogo.mp3");
  gameOverImg = loadImage("./assets/imagens/assets/game-over.png");
  jumpSound = loadSound("./assets/sons/somPulo.mp3");
}

function keyPressed() {
  console.log(key === "");
  if (["", "ArrowUp"].includes(key)) {
    if (character.jump()) jumpSound.play();
  }
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  // gameSound.loop();
  cenary = new CenaryConstructor(cenaryImg, 5); // img, velocity
  character = new CharacterConstructor(witchSprite, 0, height, 30);
  score = new ScoreConstructor();

  EnemysController.Enemys.push(
    new EnemyConstructor(
      enemySprite,
      width, // x position which the char will be placed
      height, // y position which the char will be placed
      30, // y Variaation
      20 // velocity
    ),
    new EnemyConstructor(enemy2Sprite, width, height, 0, 10),
    new EnemyConstructor(enemy3Sprite, width, height, 200, 15)
  );

  frameRate(30);
}

function draw() {
  cenary.move();

  if (!EnemysController.run(character)) {
    image(gameOverImg, innerWidth / 3, innerHeight / 3);
    noLoop();
  }

  score.show();
  character.show();
  character.setGravityEffect();
}
