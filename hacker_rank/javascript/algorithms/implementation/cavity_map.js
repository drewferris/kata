function main() {
  var n = parseInt(readLine());

  var grid = [];
  for (var grid_i = 0; grid_i < n; grid_i++) {
    grid[grid_i] = readLine();
  }
  if (n === 1) {
    console.log(grid[0]);
    return;
  }
  var realGrid = grid.map((a) => {
    return a.split('').map(Number);
  });
  for (var i = 1; i < realGrid.length - 1; i++) {
    for (var j = 1; j < realGrid[i].length; j++) {
      if (realGrid[i][j] > realGrid[i][j - 1] && realGrid[i][j] > realGrid[i][j + 1] && realGrid[i][j] > realGrid[i - 1][j] && realGrid[i][j] > realGrid[i + 1][j]) {
        realGrid[i][j] = 'X';
      }
    }

  }
  for (var i = 0; i < realGrid.length; i++) {
    console.log(realGrid[i].join(''));
  }
}
