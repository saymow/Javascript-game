
class CenaryConstructor {
  constructor(image, velocity) {
    this.image = image;
    this.velocity = velocity;
    this.axis = {
      x1: 0,
      x2: width,
    }
    this.show();
  }

  show() {
    image(this.image, 
      this.axis.x1, 
      0, 
      width, 
     height
    );
    image(this.image,
      this.axis.x2,
      0,
      width,
     height
    );
  }

  move() {
    this.axis.x1 -= this.velocity;
    this.axis.x2 -= this.velocity;
    
    if (this.axis.x1 < -width)
      this.axis.x1 = width;

    if (this.axis.x2 < -width)
      this.axis.x2 = width;

    this.show();
  }
}
