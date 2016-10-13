function main() {
  var s = readLine();
  var rows = Math.floor(Math.sqrt(s.length));
  var columns = Math.ceil(Math.sqrt(s.length));
  var grid = new Array(rows);
  var columnObj = {};
  var returnArr = [];
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(columns);
  }
  for (var i = 0; i < columns + 1; i++) {
    columnObj[i] = new Array();
  }
  for (var i = 0, count = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      grid[i][j] = s[count];
      columnObj[j].push(s[count]);
      count++;
    }
  }
  count--;
  if (count < s.length - 1) {
    for (var i = count, j = 0; i < s.length - 1; i++, j++) {
      columnObj[j].push(s[i + 1]);
    }
  }

  Object.keys(columnObj).forEach((key) => {
    var joined = columnObj[key].join('');
    returnArr.push(joined);
  });
  console.log(returnArr.join(' '));
}
