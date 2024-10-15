function draw() {
  const size = 2;

  const canvas = document.getElementById("sudoku");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0,0,410, 410)

  for (var sx = 0; sx < size; sx++) {
    for (var sy = 0; sy < size; sy++) {
      var x = sx * size;
      var y = sy * size;

      ctx.fillStyle = "grey";
      ctx.fillRect(x * 100 + 10, y * 100 + 10, 190, 190);

      for (var gx = 0; gx < size; gx++) {
        for (var gy = 0; gy < size; gy++) {
          var x = sx * size + gx;
          var y = sy * size + gy;

          ctx.fillStyle = "white";
          ctx.fillRect(x * 100 + 10 , y * 100 + 10, 90, 90);
        }
      }
    }
  }
}
