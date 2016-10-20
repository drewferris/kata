var testArr = [ 1, 0, 1, 1, 0 ];

function convertToDec(binArr) {
  var reversed = binArr.reverse();
  var count = 0;
  for(var i = 0; i < reversed.length; i++) {
    if (reversed[i] === 1) {
      count += Math.pow(2,i);
    }
  }
  return count;
}


function runQuery(array, query) {
  if(query.length === 2) {
    if(array[query[1]] === 1) {
      array[query[1]] = 0;
    } else {
      array[query[1]] = 1;
    }
  } else {
    var sliced = array.slice(query[1], query[2]);
    var binNum = convertToDec(sliced);
    if(binNum % 2 === 0) {
      console.log('EVEN');
    } else {
      console.log('ODD');
    }
  }
}
runQuery(testArr, [ 1, 2 ]);
console.log(testArr);
runQuery(testArr, [ 0, 1, 4 ]);
