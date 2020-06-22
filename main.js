let cenaryImg, spriteImg, gameSound, cenary, sprite;
const { innerWidth: width, innerHeight: height } = window;
const spriteImgDimension = [220, 270];

function preload() {
  cenaryImg = loadImage("./imagens/cenario/floresta.png");
  spriteImg = loadImage("./imagens/personagem/correndo.png");
  gameSound = loadSound("./sons/trilha_jogo.mp3");
}

function setup() {
  createCanvas(width, height);
  // gameSound.loop();
  cenary = new CenaryConstructor(cenaryImg, 5); // img, velocity
  sprite = new CharacterConstructor(spriteImg, spriteImgDimension[0], spriteImgDimension[1], 4, 4, .5); // img, width, height, animationPngRows, animationPnColumns, size (1 = 100%)
  // frameRate(14);
}

function draw() {
  cenary.move();
  sprite.show();
}
