class InitialScreen {
  constructor() {}

  draw() {
    this._backgroundImage();
    this._text();
    this._button();  
  }

  keyPressed() {
    if(["Enter", ""].includes(key)) {
      initalButton._switchScene();
    }
  }

  _backgroundImage() {
    image(initalScreenImg, 0, 0, innerWidth, innerHeight);
  }

  _text() {
    textFont(fontInital);
    textAlign(CENTER);
    textSize(80);
    text("as aventuras de", innerWidth / 2, innerHeight / 3);
    textSize(160)
    text("Hipsta", innerWidth / 2, innerHeight / 3 + 120);
  }

  _button() {
    initalButton.y = innerHeight / 7 * 5;
    initalButton.draw();
  }  
}