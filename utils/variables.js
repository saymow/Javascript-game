let game,
  JSONdata,
  initialScreen,
  sceneController,
  currentScene,
  fontInital,
  initalButton,
  initalScreenImg,
  cenaryImg,
  gameOverImg,
  livesImg,
  gameSound,
  jumpSound,
  cenary,
  character,
  score,
  lives;

const witchSprite = new SpriteModel(220, 270, 4, 4, 0.5);
const enemySprite = new SpriteModel(104, 104, 4, 7, 0.5);
const enemy2Sprite = new SpriteModel(400, 400, 5, 6, 0.5);
const enemy3Sprite = new SpriteModel(200, 150, 3, 6, 0.5);
