class EnemyConstructor extends Animate {
  constructor(spriteData, positionX, positionY, varY, velocity) {
    super(spriteData, positionX, positionY, varY);

    this.velocity = velocity;

    this.minWidhtBoundary = -spriteData.width;
  }

  move() {
    if (this.charData.currentPos.x <= this.minWidhtBoundary)
      this.charData.currentPos.x = this.charData.initialPos.x;
    else this.charData.currentPos.x -= this.velocity;
  }
}
