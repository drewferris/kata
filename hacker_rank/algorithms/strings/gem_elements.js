'use strict';

var testArr = [ 'abcdde', 'baccd', 'eeabg' ];

function returnGemsEls(array, k) {
  var count = 0;
  var elementsArr = [];
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array[i].length; j++) {
      if(elementsArr.indexOf(array[i][j]) === -1) {
        elementsArr.push(array[i][j]);
      }
    }
  }
  for(var i = 0; i < elementsArr.length; i++) {
    let filterdArr = array.filter((a) => {
      if(a.indexOf(elementsArr[i]) !== -1) {
        return a;
      }
    });
    if(filterdArr.length === k) {
      count++;
    }
  }
  console.log(count);
}

console.log(returnGemsEls(testArr, 3));
