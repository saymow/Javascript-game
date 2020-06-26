class EnemyConstructor extends Animate {
  constructor(spriteData, positionX, positionY, varY, velocity) {
    super(spriteData, positionX, positionY, varY);

    this.velocity = velocity;
  }

  move() {
    this.charData.currentPos.x -= this.velocity;
  }

  relocate() {
    this.charData.currentPos.x = innerWidth;
  }
}
