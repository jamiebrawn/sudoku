function draw() {
  const size = 2;   // Can support up to 6
  const size_row = size * size; // Size for one of the whole row/col
  const size_square = 100;  // Size of the white squares
  const size_border = 10;   // Size of the border surrounding it
  const size_each = size_square + size_border;  // Size of white square and one side of border together

  var symbols = []; // List of symbols to display

  // Add in numbers
  if (size == 6)    // 6 is 36, need all 1-9, A-Z and 0 to be able to have enough of it
    symbols.push(0);

  if (size != 5) {  // if size is 5, just go with alphabet for A-Y
      const numbers_max = size_row < 9 ? size_row : 9;
      for (var i = 0; i < numbers_max; i++)
        symbols.push(i + 1);
  }

  // Add in alphabets
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabet_max = size_row - symbols.length;
  for (var i = 0; i < alphabet_max; i++)
    symbols.push(alphabet[i]);


  const canvas = document.getElementById("sudoku");
  const ctx = canvas.getContext("2d");

  var size_whole = size_row * size_each + size_border;

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

          // Text
          ctx.fillStyle = "black";
          ctx.font = size_square + "px sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(getRandomItemInArray(symbols), (x + 0.5) * size_each + (size_border * 0.5), (y + 0.5) * size_each + size_border);
        }
      }
    }
  }
}

function getRandomItemInArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}