class CharacterConstructor {
  constructor(imagem, width, height, rows, columns, size) {
    this.imagem = imagem;
    this.charData = {
      size: size,
      currentFramePos: [0, 0], // x, y
      frames: rows * columns,
      rows: rows,
      columns: columns,
      dimension: [width, height],
    };
    this.currentFrame = 0; // x, y
  }

  show() {
    image(
      this.imagem,
      0,
      height - this.charData.dimension[1] / 2,
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
      Math.floor(this.currentFrame / this.charData.rows) < this.charData.rows
        ? Math.floor(this.currentFrame / this.charData.rows)
        : 0;

    const column = this.currentFrame % this.charData.rows;

    if (this.currentFrame === this.charData.frames) this.currentFrame = 0;

    this.currentFrame++;

    return [
      row * this.charData.dimension[0],
      column * this.charData.dimension[1],
    ];
  }
}
