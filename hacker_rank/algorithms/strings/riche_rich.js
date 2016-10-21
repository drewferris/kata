'use strict';

let testString = '12321';

function isPalindrome(str) {
  if (!str || str.length < 2) return true;
  if (str.charAt(0).toLowerCase() === str.charAt(str.length - 1).toLowerCase()) {
    return isPalindrome(str.substr(1, str.length - 2));
  } else {
    return false;
  }
}

function sortLevels(string) {
  var levelObj = {
    count: 0
  };
  for (var i = 0, j = string.length - 1; i < string.length / 2, j >= string.length / 2; i++, j--) {
    if (string[i] !== string[j]) {
      levelObj[i] = 1;
      levelObj.count++;
    }
  }
  return levelObj;
}

function changeIndexVal(level, palindrome) {

  var front = Number(palindrome[level]);
  var back = Number(palindrome[palindrome.length - level - 1]);
  var max = Math.max(front, back);
  if (back !== max) {
    palindrome = palindrome.substring(0, palindrome.length - level - 1) + max + palindrome.substring(palindrome.length - level);
    return palindrome;
  } else if (front !== max) {
    palindrome = palindrome.substring(0, level) + max + palindrome.substring(level + 1);
    return palindrome;
  }
}

function changeBoth(palindrome, level) {
  return palindrome.substring(0, level) + '9' + palindrome.substring(level + 1, palindrome.length - level - 1) + '9' + palindrome.substring(palindrome.length - level);
}

function changeEachLevel(palindrome, obj) {
  let pal;
  Object.keys(obj).forEach((key) => {
    if (key !== 'count') {
      if (palindrome !== undefined) {
        if (!checkPal(Number(key), palindrome)) {
          pal = changeIndexVal(Number(key), palindrome);
          palindrome = pal;
        }
      }
    }
  });
  return palindrome;
}

function checkPal(level, palindrome) {
  if (palindrome[level] === palindrome[palindrome.length - level - 1]) {
    return true;
  }
  return false;
}

function findGreatest(palindrome, n) {
  if(n/palindrome.length >= 1) {
    var arr = new Array(palindrome.length);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = '9';
    }
    console.log(arr.join(''));
    return;
  }
  if(isPalindrome(palindrome) && palindrome.length % 2 === 1 && n === 1) {
    palindrome = palindrome.substring(0, palindrome.length/2) + '9' + palindrome.substring((palindrome.length/2) + 1);
    console.log(palindrome);
    return;
  }
  if (palindrome.length === n) {
    var arr = new Array(n);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = '9';
    }
    console.log(arr.join(''));
    return;
  }
  let pal;
  var obj = sortLevels(palindrome);
  if (isPalindrome(palindrome)) {
    var end = n / 2;
    for (let i = 0; i < end; i++) {
      if (palindrome[i] !== '9') {
        palindrome = palindrome.substring(0, i) + '9' + palindrome.substring(i + 1, palindrome.length - i - 1) + '9' + palindrome.substring(palindrome.length - i);
      } else {
        end++;
      }
    }
    console.log(palindrome);
    return;
  }
  if (n === obj.count) {
    pal = changeEachLevel(palindrome, obj);
    palindrome = pal;
    console.log(palindrome);
    return;
  } else if (n > obj.count) {
    let diff = n - obj.count;
    for (let i = 0, j= 0; i < diff, j <= diff; i++, j++) {
      if (checkPal(palindrome, i)) {
        if (diff - 2 >= obj.count) {
          pal = changeBoth(palindrome, i);
          palindrome = pal;
          j += 2;
        }
      } else if (!checkPal(i, palindrome)) {
        pal = changeBoth(palindrome, i);
        palindrome = pal;
        j += 2;
        // pal = changeEachLevel(palindrome, obj);
        // console.log(pal);
      }
    }
    console.log(palindrome);
    return;
  } else if (n < obj.count) {
    console.log(-1);
    return;
  }
}

findGreatest(testString, 1);
// findGreatest(testString, 1);
