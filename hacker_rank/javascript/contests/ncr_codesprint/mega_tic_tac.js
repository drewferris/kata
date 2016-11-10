function checkBoard(board, k) {
  var rowObj = {};
  var columnObj = {};
  var diagonalObj = {};
  var alexaWin = false;
  var alexaLose = false;

  var xCount = 0;
  var oCount = 0;

  for(var i = 0; i < board.length; i++) {
    if(!rowObj[i]) rowObj[i] = board[i];
    for(var j = 0; j < board[i].length; j++) {
      if(!columnObj[j]) columnObj[j] = [];
      columnObj[j].push(board[i][j]);
      if(!diagonalObj[i - j]) diagonalObj[i - j] = [];
      diagonalObj[i - j].push(board[i][j]);
    }
  }

  Object.keys(rowObj).forEach((key) => {
    xCount = 0;
    oCount = 0;
    for(var i = 0; i < rowObj[key].length; i++) {
      if(rowObj[key][i] === 'X') {
        xCount++;
        oCount = 0;
      }
      if(rowObj[key][i] === 'O') {
        oCount++;
        xCount = 0;
      }
      if(xCount === k) alexaLose = true;
      if(oCount === k) alexaWin = true;
    }
  });

  Object.keys(columnObj).forEach((key) => {
    xCount = 0;
    oCount = 0;
    for(var i = 0; i < columnObj[key].length; i++) {
      if(columnObj[key][i] === 'X') {
        xCount++;
        oCount = 0;
      }
      if(columnObj[key][i] === 'O') {
        oCount++;
        xCount = 0;
      }
      if(xCount === k) alexaLose = true;
      if(oCount === k) alexaWin = true;
    }
  });

  Object.keys(diagonalObj).forEach((key) => {
    xCount = 0;
    oCount = 0;
    for(var i = 0; i < diagonalObj[key].length; i++) {
      if(diagonalObj[key][i] === 'X') {
        xCount++;
        oCount = 0;
      }
      if(diagonalObj[key][i] === 'O') {
        oCount++;
        xCount = 0;
      }
      if(xCount === k) alexaLose = true;
      if(oCount === k) alexaWin = true;
    }
  });

  if(alexaLose && alexaWin) {
    console.log('NONE');
  } else if(alexaWin) {
    console.log('WIN');
  } else if(alexaLose) {
    console.log('LOSE');
  } else {
    console.log('NONE');
  }
}


checkBoard([ 'XOX', 'XOX', 'XXX' ], 3);
