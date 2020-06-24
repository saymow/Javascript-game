let cenaryImg, spriteImg, enemyImg, gameSound, jumpSound, cenary, character, enemy;
const { innerWidth: width, innerHeight: height } = window;
const witchSprite = new SpriteModel(220, 270);
const enemySprite = new SpriteModel(104, 104);

function preload() {
  cenaryImg = loadImage("./imagens/cenario/floresta.png");
  enemySprite.img = loadImage("./imagens/inimigos/gotinha.png");
  witchSprite.img = loadImage("./imagens/personagem/correndo.png");
  gameSound = loadSound("./sons/trilha_jogo.mp3");
  jumpSound = loadSound("./sons/somPulo.mp3")
}

function keyPressed() {
  if (["", "ArrowUp"].includes(key)) {
    if (character.jump())
      jumpSound.play();
  }
}

function setup() {
  createCanvas(width, height);
  // gameSound.loop();
  cenary = new CenaryConstructor(cenaryImg, 5); // img, velocity
  character = new CharacterConstructor(
    witchSprite.img,
    witchSprite.width,
    witchSprite.height,
    4,
    4,
    0.5,
    0,
    height
  );
  enemy = new EnemyConstructor(
    enemySprite.img, //  sprite img
    enemySprite.width, // sprite Width
    enemySprite.height, // sprite Height
    4, //img columns
    7, // img, rows
    0.5, // size, (1 = 100%)
    width, // x position which the char will be placed
    height, // y position which the char will be placed
    20 // velocity
  );

  console.log(enemy);
  frameRate(30);
}

function draw() {
  cenary.move();
  
  character.show();
  character.setGravityEffect();
  
  enemy.move();
  enemy.show();
  
  if (character.subscribeCollision(enemy)){
    console.log("dsad")
    noLoop();
  }
}
