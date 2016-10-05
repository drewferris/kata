var first = [[1,2,3],[4,5,6][7,8,9],[10,11,12,13]];

var second = [[223],[1,23,3][4,5,6][1,1,1,1,1,1,1,111,1,1,1]];






function transfer(src, dest) {
  var m = 0;
  var n = 0;
  for (var i = 0; i < src.length; i++) {
    for (var j = 0; j < src[i].length; j++) {
      if (n < dest[m].length) {
        dest[m][n] = src[i][j];
        n++;
      } else if (n > )
    }
  }
}
