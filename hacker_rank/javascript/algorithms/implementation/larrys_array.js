// function checkOrder(a, b, c) {
//   if (a > c && b > a && b > c) {
//     return true;
//   } else {
//     return false;
//   }
// }

// var weird = [ 4, 1, 2, 3, 6, 7, 8, 9, 10, 11, 12, 13 ];

// var backArr = [];
// var forwardArr = [];
// var normArr = [];
var stored = {};
var count = 0;

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
      // var sub = [array[index1 - 1], array[index2 - 1], array[index3 - 1]];
      // if(backArr.indexOf(sub) !== -1) {
      //   console.log('NO');
      //   return;
      // }
      // backArr.push(sub);
      count++;
      rotate(array, index1 - 1, index2 - 1, index3 - 1, counter);
    } else if(array[index2] > array[index3] && !(array[index1 - 1])) {
      // var subAgain = [array[index1 + 1], array[index2 + 1], array[index3 + 1]];
      // if(forwardArr.indexOf(subAgain) !== -1) {
      //   console.log('NO');
      //   return;
      // }
      // forwardArr.push(subAgain);
      count++;
      rotate(array, index1 + 1, index2 + 1, index3 + 1, counter);
    } else {
      // var normSub = [array[index1], array[index2], array[index3]];
      // if(normArr.indexOf(normSub) !== -1) {
      //   console.log('NO');
      //   return;
      // }
      // normArr.push(normSub);
      count++;
      rotate(array, index1, index2, index3, counter);
    }
  } else if (array.indexOf(array[index2]) !== array.length - (counter + 1)) {
    // console.log(stored);
    if(stored[count] === array) {
      return false;
    }
    stored[count] = array;
    rotate(array, index1 + 1, index2 + 1, index3 + 1, counter);
  }
  return;
}

var goodArr = [8, 10, 6, 11, 7, 1, 9, 12, 3, 5, 13, 4, 2];
var badArr = [9, 6, 8, 12, 3, 7, 1, 11, 10, 2, 5, 4];

// var blah = [ 8, 7, 6, 1, 3, 4, 2, 5, 9, 10, 11, 12, 13 ];

function checkReOrder(array) {
  var newArray = array.slice();
  var sorted = newArray.sort((a, b) => {
    return b - a;
  });
  for (var i = 0; i < sorted.length; i++) {
    if (array.indexOf(sorted[i]) !== 0) {
      var blah1 = rotate(array, array.indexOf(sorted[i]) - 1, array.indexOf(sorted[i]), array.indexOf(sorted[i]) + 1, i);
      if(blah1 === false) {
        console.log('NO');
        return;
      }
      // rotate(array, array.indexOf(sorted[i]) - 1, array.indexOf(sorted[i]), array.indexOf(sorted[i]) + 1, i);
    } else {
      var blah = rotate(array, array.indexOf(sorted[i]), array.indexOf(sorted[i]) + 1, array.indexOf(sorted[i]) + 2, i);
      if(blah === false) {
        console.log('NO');
        return;
      }
    }
  }
  console.log('YES');
  return;
}


console.log(checkReOrder(goodArr));
console.log(checkReOrder(badArr));
