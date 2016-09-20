//solution that prevents time out


'use strict';

const processData = input => {
  const lines = input.split('\n').slice(1);
  for (let i = 0; i < lines.length; i++) {
    const parts = lines[i].split(' ');
    const lower = parts[0];
    const upper = parts[1];
    let squareNumbers = 0;
    if (lower === upper) {
      if (Math.sqrt(lower) === Math.ceil(Math.sqrt(lower))) {
        squareNumbers = 1;
      } else {
        squareNumbers = 0;
      }
    } else {
      squareNumbers = parseInt(Math.floor(Math.sqrt(upper)) - (Math.ceil(Math.sqrt(lower))) + 1)
    }
    console.log(squareNumbers);
  }
};

process.stdin.resume();
process.stdin.setEncoding("ascii");

let _input = "";
process.stdin.on("data", input => _input += input);
process.stdin.on("end", () => processData(_input));

//my solution that worked for small ranges but timed out for larger

function processData(input) {
  var split = input.split('\n');
  var shift = split.shift();
  for (var i = 0; i < split.length; i++) {
    var squareArr = [];
    var splitRange = split[i].split(' ');
    var numRange = splitRange.map(function(string) {
      return Number(string);
    });
    for (var j = numRange[0]; j < numRange[1] + 1; j++) {
      if (Math.floor(Math.sqrt(j)) === Math.sqrt(j)) {
        squareArr.push(j);
      }
    }
    console.log(squareArr.length);
  }
}
