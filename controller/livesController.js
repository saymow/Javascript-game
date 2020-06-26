class LivesConstructor {
  constructor(total, inital) {
    this.total = total;
    this.inital = inital;
    this.lives = this.inital;

    this.widht = 25;
    this.height = 25;
    this.xInital = 20;
    this.y = 20;
  }

  draw() {
    for (let i = 0; i < this.lives; i++) {
      const margin = i * 10;
      const position = this.xInital * (i + 1);
      image(livesImg, position + margin, this.y, this.widht, this.height);
    }
  }

  decrementLife() {
    this.lives--;
  }

  incremmenLife() {
    if (this.lives >= this.inital) return;
    this.lives++;
  }
}
