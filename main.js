function draw() {
  const size = 2;
  const size_square = 100;  // Size of the white squares
  const size_border = 10;   // Size of the border surrounding it
  const size_each = size_square + size_border;  // Size of white square and one side of border together

  const canvas = document.getElementById("sudoku");
  const ctx = canvas.getContext("2d");

  var size_whole = size * size * size_each + size_border;

  // Black background, for the black border
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, size_whole, size_whole);

  for (var sx = 0; sx < size; sx++) {
    for (var sy = 0; sy < size; sy++) {
      var x = sx * size;
      var y = sy * size;
      var size_section = size * size_each - size_border;   // size of the section, not counting the black border

      // Grey square, for the grey border
      ctx.fillStyle = "grey";
      ctx.fillRect(x * size_each + size_border, y * size_each + size_border, size_section, size_section);

      for (var gx = 0; gx < size; gx++) {
        for (var gy = 0; gy < size; gy++) {
          var x = sx * size + gx;
          var y = sy * size + gy;

          // White squares
          ctx.fillStyle = "white";
          ctx.fillRect(x * size_each + size_border, y * size_each + size_border, size_square, size_square);
        }
      }
    }
  }
}
