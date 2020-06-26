class CharacterConstructor extends Animate {
  constructor(spriteData, positionX, positionY, varY) {
    super(spriteData, positionX, positionY, varY);

    this.jumpForce = 0;
    this.Gravity = 5;
    this.jumpCount = 0;
    this.invincible = false;
  }

  jump() {
    if (this.jumpCount < 2) {
      this.jumpForce = -50;
      this.jumpCount += 1;

      return true;
    } else {
      return false;
    }
  }

  setGravityEffect() {
    this.charData.currentPos.y += this.jumpForce;
    this.jumpForce += this.Gravity;

    if (this.charData.currentPos.y > this.charData.initialPos.y) {
      this.jumpCount = 0;
      this.charData.currentPos.y = this.charData.initialPos.y;
    }
  }

  subscribeCollision(enemy) {
    const precision = 0.7;

    noFill();

    rect(
      this.charData.currentPos.x +
        ((1 - precision) / 2) * this.charData.displayDimension.width,
      this.charData.currentPos.y +
        ((1 - precision) / 2) * this.charData.displayDimension.height,
      this.charData.displayDimension.width * precision,
      this.charData.displayDimension.height * precision
    );

    rect(
      enemy.charData.currentPos.x +
        ((1 - precision) / 2) * enemy.charData.displayDimension.width,
      enemy.charData.currentPos.y +
        ((1 - precision) / 2) * enemy.charData.displayDimension.width,
      enemy.charData.displayDimension.width * precision,
      enemy.charData.displayDimension.height * precision
    );

    const response = collideRectRect(
      this.charData.currentPos.x +
        ((1 - precision) / 2) * this.charData.displayDimension.width,
      this.charData.currentPos.y +
        ((1 - precision) / 2) * this.charData.displayDimension.height,
      this.charData.displayDimension.width * precision,
      this.charData.displayDimension.height * precision,
      enemy.charData.currentPos.x +
        ((1 - precision) / 2) * enemy.charData.displayDimension.width,
      enemy.charData.currentPos.y +
        ((1 - precision) / 2) * enemy.charData.displayDimension.width,
      enemy.charData.displayDimension.width * precision,
      enemy.charData.displayDimension.height * precision
    );

    if (this.invincible) return;
    if (response) {
      this.colisionDebouncer();
      return response;
    }
  }

  colisionDebouncer() {
    this.invincible = true;
    setTimeout(() => {
      this.invincible = false;
    }, 500);
  }
}
