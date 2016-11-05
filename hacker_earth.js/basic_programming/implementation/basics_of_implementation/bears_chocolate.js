function bearsChoc(array) {
  var hashTable = {};
  var hashTableColumns = {};
  var rowVals = [];
  var columnVals = [];
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array[i].length; j++) {
      if(!hashTable[i]) {
        hashTable[i] = 0;
      }
      if(array[i][j] === '#') {
        hashTable[i]++;
      }
      if(!hashTableColumns[j]) {
        hashTableColumns[j] = 0;
      }
      if(array[i][j] === '#') {
        hashTableColumns[j]++;
      }
    }
  }
  Object.keys(hashTable).forEach((key) => {
    rowVals.push(hashTable[key]);
  });
  Object.keys(hashTableColumns).forEach((key) => {
    columnVals.push(hashTableColumns[key]);
  });
  for(var i = 0; i < rowVals.length; i++) {
    var firstHalf = rowVals.slice(0,i+1).reduce((a,b) => {
      return a + b;
    }, 0);
    var secondHalf = rowVals.slice(i+1).reduce((a,b) => {
      return a + b;
    }, 0);
    if(firstHalf === secondHalf) {
      console.log('YES');
      return;
    }
  }
  for(var i = 0; i < columnVals.length; i++) {
    var firstHalfCol = columnVals.slice(0,i+1).reduce((a,b) => {
      return a + b;
    }, 0);
    var secondHalfCol = columnVals.slice(i+1).reduce((a,b) => {
      return a + b;
    }, 0);
    if(firstHalfCol === secondHalfCol) {
      console.log('YES');
      return;
    }
  }
  console.log('NO');
}

bearsChoc([ '###', '##.', '###' ]);
