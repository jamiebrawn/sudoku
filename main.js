function draw() {

    const size = 2;

    const canvas = document.getElementById("sudoku");
    const ctx = canvas.getContext("2d");

    for (var sx = 0; sx < size; sx++) {
        for (var sy = 0; sy < size; sy++) {
            for (var gx = 0; gx < size; gx++) {
                for (var gy = 0; gy < size; gy++) {

                    var x = sx * size + gx;
                    var y = sy * size + gy;

                    ctx.fillRect((x * 100), (y * 100), 90, 90);
                }
            }
        }
    }
}
