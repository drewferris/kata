
var stored = {};
var count = 0;

function checkAgain(array) {
  for (var j = 0; j < array.length; j++) {
    if (!(array[j] < array[j + 1] && array[j + 1] < array[j + 2])) {
      rotate(array, j, j + 1, j + 2, j);
    }
  }
}

function rotate(array, index1, index2, index3, counter) {
  if (counter === array.length - 1) {
    return;
  }
  if(!(array[index1] < array[index2] && array[index2] < array[index3]) && array[index3]) {
    var temp1 = array[index1];
    var temp2 = array[index2];
    var temp3 = array[index3];
    array[index1] = temp2;
    array[index2] = temp3;
    array[index3] = temp1;
    if(array[index2] > array[index3] && array[index1 - 1]) {
      count++;
      rotate(array, index1 - 1, index2 - 1, index3 - 1, counter);
    } else if(array[index2] > array[index3] && array[index1 - 1] && (stored[count] === array)) {
      count++;
      rotate(array, index1 + 1, index2 + 1, index3 + 1, counter);
    } else if(array[index2] > array[index3] && !(array[index1 - 1])) {
      count++;
      rotate(array, index1 + 1, index2 + 1, index3 + 1, counter);
    } else {
      count++;
      rotate(array, index1, index2, index3, counter);
    }
  } else if (array.indexOf(array[index2]) !== array.length - (counter + 1)) {
    if(stored[count] === array) {
      return false;
    }
    stored[count] = array;
    rotate(array, index1 + 1, index2 + 1, index3 + 1, counter);
  }
  console.log(array);
  return;
}

var goodArr = [17, 21, 2, 1, 16, 9, 12, 11, 6, 18, 20, 7, 14, 8, 19, 10, 3, 4, 13, 5, 15];
// var badArr = [9, 6, 8, 12, 3, 7, 1, 11, 10, 2, 5, 4];

function checkReOrder(array) {
  var newArray = array.slice();
  var sorted = newArray.sort((a, b) => {
    return b - a;
  });

  for (var i = 0; i < sorted.length; i++) {
    obj[sorted[i - 1]] = 1;
    console.log(array);
    if (array.indexOf(sorted[i]) !== 0) {
      var blah1 = rotate(array, array.indexOf(sorted[i]) - 1, array.indexOf(sorted[i]), array.indexOf(sorted[i]) + 1, i);
      if(blah1 === false) {
        console.log('NO');
        continue;
      }
    } else {
      var blah = rotate(array, array.indexOf(sorted[i]), array.indexOf(sorted[i]) + 1, array.indexOf(sorted[i]) + 2, i);
      if(blah === false) {
        console.log('NO');
        continue;
      }
    }
  }

  console.log(array);

  console.log('YES');
  return;
}


console.log(checkReOrder(goodArr));
// console.log(checkReOrder(badArr));
