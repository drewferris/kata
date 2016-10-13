var matrixOne = [ [ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ] ];
console.log(matrixOne);
function shiftForward(array) {
  for(var i = array.length - 1; i >= 0; i--) {
    if(array[i-1]) {
      array[i] = array[i - 1];
    }
  }
  return array;
}

function rotateMatrix(matrix, level, m , n) {
  var min = Math.min(m, n);
  if(level + 1 > min) {
    return;
  }
  var topRow = matrix[level].slice(level, level + n);
  var bottomRow = matrix[matrix.length - 1 - level].slice(level, level + n);
  var frontColumn = [];
  var backColumn = [];
  for(var i = level; i < matrix.length - level; i++) {
    for(var j = level; j < matrix[i].length- level; j++) {
      if(j === level) {
        frontColumn.push(matrix[i][j]);
      } else if(j === matrix[i].length - 1 - level) {
        backColumn.push(matrix[i][j]);
      }
    }
  }
  topRow.shift();
  shiftForward(frontColumn);
  frontColumn[0] = topRow[0];
  shiftForward(bottomRow);
  bottomRow[0] = frontColumn[frontColumn.length - 1];
  backColumn.shift();
  backColumn.push(bottomRow[bottomRow.length - 1]);
  topRow.push(backColumn[0]);

  matrix[level] = matrix[level].slice(0, level).concat(topRow, matrix[level].slice(matrix[level].length - level));
  matrix[matrix.length - 1 - level] = matrix[matrix.length - 1 - level].slice(0, level).concat(bottomRow, matrix[matrix.length - 1 - level].slice(matrix[level].length - level));
  for(var i = level; i < matrix.length - level; i++) {
    for(var j = level; j < matrix[i].length - level; j++) {
      if(j === level) {
        matrix[i][j] = frontColumn[i - level];
      } else if(j === matrix[i].length - 1 - level) {
        matrix[i][j] = backColumn[i - level];
      }
    }
  }
  level++;
  m/=2;
  n/=2;
  rotateMatrix(matrix, level, m, n);
}
rotateMatrix(matrixOne, 0, 4,4);
console.log(matrixOne);

// function rotateMatrix(matrix, level) {
//   if(level + 1 > m/2) {
//     return matrix;
//   }
//   var topRow = matrix[0];
//   var bottomRow = matrix[matrix.length - 1];
//   var frontColumn = [];
//   var backColumn = [];
//   for(var i = 0; i < matrix.length; i++) {
//     for(var j = 0; j < matrix[i].length; j++) {
//       if(j === 0) {
//         frontColumn.push(matrix[i][j]);
//       } else if(j === matrix[i].length - 1) {
//         backColumn.push(matrix[i][j]);
//       }
//     }
//   }
//   topRow.shift();
//   shiftForward(frontColumn);
//   frontColumn[0] = topRow[0];
//   shiftForward(bottomRow);
//   bottomRow[0] = frontColumn[frontColumn.length - 1];
//   backColumn.shift();
//   backColumn.push(bottomRow[bottomRow.length - 1]);
//   topRow.push(backColumn[0]);
//
//
//   matrix[0] = topRow;
//   matrix[matrix.length - 1] = bottomRow;
//   for(var i = 0; i < matrix.length; i++) {
//     for(var j = 0; j < matrix[i].length; j++) {
//       if(j === 0) {
//         matrix[i][j] = frontColumn[i];
//       } else if(j === matrix[i].length - 1) {
//         matrix[i][j] = backColumn[i];
//       }
//     }
//   }
//   console.log(backColumn);
//   return matrix;
//
// }
