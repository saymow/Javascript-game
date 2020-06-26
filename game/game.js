class Game {
  constructor() {
    this.enemyController = new EnemysController()
  }

  setup() {
    cenary = new CenaryConstructor(cenaryImg, 5); // img, velocity
    character = new CharacterConstructor(witchSprite, 0, height, 30);
    score = new ScoreConstructor();
    lives = new LivesConstructor(3, 3);

    this.enemyController.Enemys.push(
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
  }

  keyPressed(key) {
    if (["ArrowUp"].includes(key)) {
      if (character.jump()) jumpSound.play();
    }
  }

  draw() {
    cenary.move();

    if (!this.enemyController.run(character)) {
      lives.decrementLife();
      if (lives.lives === 0) {
        image(gameOverImg, innerWidth / 3, innerHeight / 3);
        noLoop();
      } else if (this.enemyController.index >= this.enemyController.chunks.length - 1) {
        return noLoop();
      }
    }

    lives.draw();
    score.show();
    character.show();
    character.setGravityEffect();
  }
}

console.log(JSONdata);

class EnemysController {
  constructor() {
    this.index = 0,
    this.chunks = JSONdata.chunks,
    this.Enemys = []
  }

  run(char) {
    let Enemy = this.Enemys[this.chunks[this.index].Enemy];

    this.chunkController(Enemy);

    Enemy.move();
    Enemy.show();

    let notCollided = char.subscribeCollision(Enemy);

    return !notCollided;
  }

  chunkController(Enemy) {
    let enemyIsNotVisible =
      Enemy.charData.currentPos.x < -Enemy.charData.displayDimension.width;

    if (enemyIsNotVisible) {
      this.index++;
      this.Enemys[this.chunks[this.index].Enemy].relocate();
      this.Enemys[this.chunks[this.index].Enemy].velocity = this.chunks[
        this.index
      ].velocity;
    }
  }
};
