class CharacterConstructor extends Animate {
  constructor(
    imagem,
    width,
    height,
    rows,
    columns,
    size,
    positionX,
    positionY
  ) {
    super(imagem, width, height, rows, columns, size, positionX, positionY);

    this.jumpForce = 0;
    this.Gravity = 5;
    this.jumpCount = 0;
  }

  jump() {
    if (this.jumpCount < 2) {
      this.jumpForce = -30;
      this.jumpCount += 1;

      return true;
    } else {
      return false;
    }
  }

  setGravityEffect() {
    this.charData.currentPos.y += +this.jumpForce;
    this.jumpForce += this.Gravity;

    if (this.charData.currentPos.y > this.charData.initialPos.y) {
      this.jumpCount = 0;
      this.charData.currentPos.y = this.charData.initialPos.y;
    }
  }

  subscribeCollision(enemy) {
    const precision = 0.7;

    noFill();

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

    return response;
  }
}
