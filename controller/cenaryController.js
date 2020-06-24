class CenaryConstructor {
  constructor(image, velocity) {
    this.image = image;
    this.velocity = velocity;
    this.axis = {
      x1: 0,
      x2: innerWidth,
    };
    this.show();
  }

  show() {
    image(this.image, this.axis.x1, 0, innerWidth, height);
    image(this.image, this.axis.x2, 0, innerWidth, height);
  }

  move() {
    this.axis.x1 -= this.velocity;
    this.axis.x2 -= this.velocity;

    if (this.axis.x1 < -innerWidth) this.axis.x1 = innerWidth;

    if (this.axis.x2 < -innerWidth) this.axis.x2 = innerWidth;

    this.show();
  }
}
