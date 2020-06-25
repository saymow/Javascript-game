class Game {
  constructor() {}

  setup() {
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

    EnemysController.randomEnemy = Math.round(
      Math.random() * (EnemysController.Enemys.length - 1)
    );
  }

  keyPressed(key) {
    if (["", "ArrowUp"].includes(key)) {
      if (character.jump()) jumpSound.play();
    }
  }

  draw() {
    cenary.move();

    if (!EnemysController.run(character)) {
      image(gameOverImg, innerWidth / 3, innerHeight / 3);
      noLoop();
    }

    score.show();
    character.show();
    character.setGravityEffect();
  }
}


const EnemysController = {
  randomEnemy: undefined,
  randomVelocity: Math.random() * (40 - 10) + 10,

  Enemys: [],

  run(char) {
    let enemyIsNotVisible =
      this.Enemys[this.randomEnemy].charData.currentPos.x <
      -this.Enemys[this.randomEnemy].charData.displayDimension.width;

    if (enemyIsNotVisible) {
      this.randomEnemy = Math.round(Math.random() * (this.Enemys.length - 1));
      this.Enemys[this.randomEnemy].velocity = this.randomVelocity;
    }

    this.Enemys[this.randomEnemy].move();
    this.Enemys[this.randomEnemy].show();

    return !char.subscribeCollision(this.Enemys[this.randomEnemy]);
  },
};