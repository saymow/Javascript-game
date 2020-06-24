class ScoreConstructor {
  constructor() {
    this.score = 0;
  }

  show() {
    textAlign(RIGHT);
    fill("#fff");
    textSize(50);
    text(Math.round(this.score), innerWidth - 20, 50);

    this.addScore();
  }

  addScore() {
    this.score += 0.5;
  }
}
