function getInversions(matrix) {
  var count = 0;
  for(var i = 0; i < matrix.length; i++) {
    for(var j = 0; j < matrix[i].length; j++) {
      for(var k = i; k < matrix.length; k++) {
        for(var l = 0; l < matrix[k].length; l++) {
          if(matrix[i][j] > matrix[k][l] && j <= l) {
            count++;
          }
        }
      }
    }
  }


  console.log(count);
}

getInversions([ [ 4, 3 ], [ 1, 4 ] ]);
