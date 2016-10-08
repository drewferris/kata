//timed output
function processData(input) {
  var splitFirst = input.split('\n');
  var shift = splitFirst.shift();
  var firstLine = shift.split(' ').map(Number);
  var split = splitFirst.map((a) => {
    return a.split('');
  });
  for (var k = 1; k <= firstLine[2]; k++) {
    //console.log('START split' + 'second ' + k + '\n', split);
    for (var i = 0; i < split.length; i++) {
      for (var j = 0; j < split[i].length; j++) {
        if (k === 1) {
          continue;
        } else if (k === 2) {
          if (split[i][j] === '.') {
            split[i][j] = 'O';
          } else if (split[i][j] === 'O') {
            split[i][j] = 'W';
          }
        } else if (k === 3) {
          if (split[i][j] === 'W') {

            split[i][j] = '.';
            if (j - 1 >= 0 && split[i][j - 1] !== 'W') {
              split[i][j - 1] = '.';
            }
            if (j + 1 < split[i].length && split[i][j + 1] !== 'W') {
              split[i][j + 1] = '.';
            }
            if (i - 1 >= 0 && split[i - 1][j] !== 'W') {
              split[i - 1][j] = '.';
            }
            if (i + 1 < split.length && split[i + 1][j] !== 'W') {
              split[i + 1][j] = '.';
            }
          }
        }

      }
    }
    //console.log('END split' + 'second ' + k + '\n', split)
  }
  var answer = split.map((a) => {
    return a.join('');
  });
  for (var i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }

  //Enter your code here
}
