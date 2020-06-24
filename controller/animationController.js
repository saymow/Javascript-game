class Animate {
  constructor(imagem, width, height, columns, rows, size, positionX, positionY) {
    
    console.log(imagem, width, height, columns, rows, size, positionX, positionY);

    this.imagem = imagem;
    this.charData = {
      size: size,
      currentFramePos: [0, 0], // x, y
      frames: columns * rows,
      columns: columns,
      rows: rows,
      dimension: [width, height],
      displayDimension: {
        width: width * size,
        height: height * size,
      },
      initialPos: {
        x: positionX === innerWidth ? positionX - (width * size) : positionX, 
        y: positionY - height * size,
      },
      currentPos: {
        x: positionX === innerWidth ? positionX - (width * size) : positionX,
        y: positionY - height * size
      }
    };
    this.currentFrame = 0; // x, y
  }

  show() {
    image(
      this.imagem,
      this.charData.currentPos.x,
      this.charData.currentPos.y,
      this.charData.dimension[0] * this.charData.size, // The sprite's size on screen.
      this.charData.dimension[1] * this.charData.size,
      this.charData.currentFramePos[0],
      this.charData.currentFramePos[1],
      this.charData.dimension[0], // Lines intended to cut sprite on image file.
      this.charData.dimension[1]
    );

    this.animate();
  }

  animate() {
    const [x, y] = this.calcCurrentPosition();
    this.charData.currentFramePos = [x, y];
  }

  calcCurrentPosition() {
    const row =
      Math.floor(this.currentFrame / this.charData.columns) < this.charData.columns
        ? Math.floor(this.currentFrame / this.charData.columns)
        : 0;

    const column = this.currentFrame % this.charData.columns;

    if (this.currentFrame === this.charData.frames) this.currentFrame = 0;

    this.currentFrame++;

    return [
      row * this.charData.dimension[0],
      column * this.charData.dimension[1],
    ];
  }
}