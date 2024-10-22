function draw() {
  const size = 2;   // Can support up to 6
  const size_row = size * size; // Size for one of the whole row/col
  const size_square = 100;  // Size of the white squares
  const size_border = 10;   // Size of the border surrounding it
  const size_each = size_square + size_border;  // Size of white square and one side of border together

  var symbols_grid = new Array(size); // A grid to store symbols
  // grid variable would be structured as this:
  // symbols_grid[sx][sy][gx][gy]
  // sx and sy as a section, gx and gy as a position inside of one of the section
  for (var sx = 0; sx < size; sx++) {
    symbols_grid[sx] = new Array(size); // creating [sy]
    for (var sy = 0; sy < size; sy++) {
      symbols_grid[sx][sy] = new Array(size);   // creating [gx]
      for (var gx = 0; gx < size; gx++) {
        symbols_grid[sx][sy][gx] = new Array(size); // creating [gy]
      }
    }
  }

  var symbols_list = []; // List of symbols to display

  // Add in numbers
  if (size == 6)    // 6 is 36, need all 1-9, A-Z and 0 to be able to have enough of it
    symbols_list.push(0);

  if (size != 5) {  // if size is 5, just go with alphabet for A-Y
      const numbers_max = size_row < 9 ? size_row : 9;
      for (var i = 0; i < numbers_max; i++)
        symbols_list.push(i + 1);
  }

  // Add in alphabets
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabet_max = size_row - symbols_list.length;
  for (var i = 0; i < alphabet_max; i++)
    symbols_list.push(alphabet[i]);


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

          // Select a random symbol to use
          var symbol = getRandomItemInArray(symbols_list);
          symbols_grid[sx][sy][gx][gy] = symbol;

          // White squares
          ctx.fillStyle = "white";
          ctx.fillRect(x * size_each + size_border, y * size_each + size_border, size_square, size_square);

          // Text
          ctx.fillStyle = "black";
          ctx.font = size_square + "px sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(symbol, (x + 0.5) * size_each + (size_border * 0.5), (y + 0.5) * size_each + size_border);
        }
      }
    }
  }
}

function getRandomItemInArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}