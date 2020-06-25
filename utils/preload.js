const gamePreload = () => {
  enemySprite.img = loadImage("./assets/imagens/inimigos/gotinha.png");
  witchSprite.img = loadImage("./assets/imagens/personagem/correndo.png");
  enemy2Sprite.img = loadImage("./assets/imagens/inimigos/troll.png");
  enemy3Sprite.img = loadImage("./assets/imagens/inimigos/gotinha-voadora.png");
  cenaryImg = loadImage("./assets/imagens/cenario/floresta.png");
  gameSound = loadSound("./assets/sons/trilha_jogo.mp3");
  gameOverImg = loadImage("./assets/imagens/assets/game-over.png");
  initalScreenImg = loadImage("./assets/imagens/assets/telaInicial.png")
  fontInital = loadFont("./assets/imagens/assets/fonteTelaInicial.otf");
  jumpSound = loadSound("./assets/sons/somPulo.mp3");
};
