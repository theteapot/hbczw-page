export function frameRenderer(size, squares, groundHeight) {
  this.clearRect(0, 0, size.width, size.height);

  const drawGround = (groundHeight, width, color) => {
    // Draw ground
    this.save();
    this.beginPath();
    this.rect(0, size.height - groundHeight, width, groundHeight);
    this.fillStyle = color;
    this.fill();
    this.closePath();
    this.restore();
  };

  const drawRect = (x, y, width, height, color, alpha, stopped) => {
    this.save();
    this.beginPath();
    this.rect(x, y, width, height);
    // Stopped squares are solid color
    // falling squares are outline
    if (stopped) {
      this.fillStyle = "rgba(68, 44, 23, 0.7)";
      this.fill();
    } else {
      this.lineWidth = 1;
      this.strokeStyle = `rgba(68, 44, 23, ${alpha})`;
      this.stroke();
    }
    this.closePath();
    this.restore();
  };
  drawGround(groundHeight, size.width, "rgb(189, 123, 66)");

  squares.forEach((square) => {
    drawRect(
      square.x,
      square.y,
      square.width,
      square.height,
      "#444",
      square.alpha,
      square.stopped
    );
  });
}
