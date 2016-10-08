//timed out

function swap(array, index1, index2) {
  var temp1 = array[index1];
  var temp2 = array[index2];
  array[index1] = temp2;
  array[index2] = temp1;
  return array;
}

function checkAscending(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

function reverseSegment(array, o, p) {
  var front = array.slice(0, o);
  var back = array.slice(p);
  var subArr = array.slice(o, p).reverse();
  var returnArray = front.concat(subArr, back);
  return returnArray;
}

function processData(input) {
  var split = input.split('\n');
  var shift = split.shift();
  var array = split[0].split(' ').map(Number);


  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      var newArray = array.slice();
      var temp = swap(newArray, i, j);
      if (checkAscending(temp)) {
        console.log('yes');
        var outputI = i + 1;
        var outputJ = j + 1;
        console.log('swap ' + outputI + ' ' + outputJ);
        return;
      } else {
        var tempArray = array.slice();
        var tempAgain = reverseSegment(tempArray, i, j);
        if (checkAscending(tempAgain)) {
          console.log('yes')
          var outputIAgain = i + 1;
          var outputJAgain = j;
          console.log('reverse ' + outputIAgain + ' ' + outputJAgain);
          return;
        }
      }
    }
  }
  console.log('no');



  //Enter your code here
}
