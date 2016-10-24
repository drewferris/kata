'use strict';

let testArr = [31634,
  1,
  7280,
  145,
  9,
  3];
  // ,
  // 31634,
  // 31634,
  // 722,
  // 31634,
  // 31634,
  // 4351,
  // 8,
  // 31634,
  // 13,
  // 394,
  // 3279,
  // 162,
  // 56,
  // 31634,
  // 38,
  // 31634,
  // 4,
  // 1,
  // 31634,
  // 31634,
  // 2,
  // 31634,
  // 11,
  // 31634,
  // 7299,
  // 31634,
  // 31634,
  // 31634,
  // 31634,
  // 1365,
  // 31634,
  // 31634,
  // 31634,
  // 9319,
  // 31634,
  // 2977,
  // 31634,
  // 31634,
  // 3,
  // 31634,
  // 31634,
  // 31634,
  // 5638,
  // 31634,
  // 2,
  // 31634,
  // 8,
  // 31634,
  // 31634,
  // 31634,
  // 31634,
  // 31634,
  // 4,
  // 429,
  // 2,
  // 31634,
  // 972,
  // 31634,
  // 31634,
  // 468,
  // 8466,
  // 31634,
  // 31634,
  // 6,
  // 31634,
  // 882,
  // 31634,
  // 31634,
  // 9535,
  // 6,
  // 31634,
  // 3,
  // 31634,
  // 31634,
  // 9,
  // 31634,
  // 4,
  // 31634,
  // 31634,
  // 22,
  // 34,
  // 94,
  // 792,
  // 173,
  // 31634,
  // 31634,
  // 31634,
  // 6,
  // 31634,
  // 31634,
  // 31634,
  // 9,
  // 31634,
  // 2887];
console.log(testArr.length);

let testK = 3;

function testMult(array, num, length) {
  var newArr = array.filter((val) => {
    if (num % val === 0) return val;
  });
  if (newArr.length === length) {
    return true;
  } else {
    return false;
  }
}

function lcmOfTwo(a, b) {
  if(a % b === 0) {
    return a;
  } else if(b % a === 0) {
    return b;
  } else {
    return false;
  }
}


function lcm(array, k, length) {
  var fails = [];
  var reversed = array.sort((a, b) => {
    return b-a;
  });
  var current = reversed[0];
  for(var i = 0; i < reversed.length; i++) {
    if(lcmOfTwo(reversed[i], current)) {
      current = lcmOfTwo(reversed[i], current);
    }
    debugger;
    //  else if(lcmOfTwo(reversed[i], current) === false) {
    //   current = reversed[i];
    // }
  }
  debugger;

  for(var i = 0; i < fails.length; i++) {
    if(lcmOfTwo(current, fails[i])) {
      continue;
    } else {
      console.log('NO');
      return;
    }
  }
  if(current % k === 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

lcm(testArr, 100, 15817);
