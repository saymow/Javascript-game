class EnemyConstructor extends Animate {
  constructor(
    imagem,
    width,
    height,
    rows,
    columns,
    size,
    positionX,
    positionY,
    velocity
  ) {
    super(imagem, width, height, rows, columns, size, positionX, positionY);

    this.velocity = velocity;
  }

  move() {
    if (this.charData.currentPos.x <= 0) this.charData.currentPos.x = this.charData.initialPos.x;
    else this.charData.currentPos.x -= this.velocity;
  }
}
