'use strict';

let testMatrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108]
];

let testN = 2;

function flipMatrix(matrix, n) {
  var an = n * 2;
  var sum = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      var adder = matrix[i][j];
      adder = Math.max(adder, Math.max(matrix[an - i - 1][j], matrix[i][an - j - 1]));
      adder = Math.max(adder, matrix[an - i - 1][an - j - 1]);
      sum += adder;
    }
  }
  console.log(sum);
}

var testInput = '1' + '\n' +
  '2' + '\n' +
  '112 42 83 119' + '\n' +
  '56 125 56 49' + '\n' +
  '62 98 114 108';

function processData(input) {
  //Enter your code here
  var lines = input.trim().split('\n');

  var q = parseInt(lines[0]);

  var counter = 1;
  var i = 0;
  for (i = 0; i < q; i++) {
    var n = parseInt(lines[counter++]);
    var j = 0;
    var m = [];
    for (j = 0; j < 2 * n; j++) {
      var line = lines[counter].trim().split(' ');
      counter++;
      var r = line.map(Number);
      m.push(r);
    }

    var u = 0,
      v = 0;
    var nn = 2 * n;
    var sum = 0;
    for (u = 0; u < n; u++) { // u = row
      for (v = 0; v < n; v++) { // v = col
        var _a = m[u][v];
        var _b = m[u][nn - 1 - v];
        var _c = m[nn - 1 - u][nn - 1 - v];
        var _d = m[nn - 1 - u][v];
        var _max = Math.max(_a, _b, _c, _d);
        sum += _max;
      }
    }
    console.log(sum);
  }
}

processData(testInput);

debugger;
