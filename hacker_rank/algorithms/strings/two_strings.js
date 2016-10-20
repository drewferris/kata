var testString = 'cwomzxmuelmangtosqkgfdqvkzdnxerhravxndvomhbokqmvsfcaddgxgwtpgpqrmeoxvkkjunkbjeyteccpugbkvhljxsshpoymkryydtmfhaogepvbwmypeiqumcibjskmsrpllgbvc';
//my hacky solution
function removeAllChars(string, char) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === char) {
      string = string.substring(0, i) + string.substring(i + 1);
      i--;
    }
  }
  return string;
}

function checkAlt(string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      return false;
    }
  }
  return true;
}

function checkSame(string) {
  var count = 0;
  var i = 0;
  while (string[i] === string[i + 1]) {
    count++;
    i++;
  }
  if (count === string.length - 1) {
    return true;
  } else {
    return false;
  }
}
function reduceString(obj, string, max) {
  for(var i = 0; i < string.length; i++) {
    if(obj[string[i]] !== max && obj[string[i]] !== max - 1) {
      var removed = removeAllChars(string, string[i]);
      string = removed;
    }
  }
  return string;
}

function reduceArr(arr, max) {;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === max || arr[i] === max - 1) {
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}

function checkAltAndRemove(string) {
  for(var i = 0; i < string.length; i++) {
    if(string[i] === string[i+1]) {
      var taken = removeAllChars(string, string[i]);
      string = taken;
    }
  }
  return string;
}

function getAlt(string) {
  if (string.length === 1) {
    console.log(0);
    return;
  }
  if (string.length === 2) {
    console.log(2);
    return;
  }
  if (checkSame(string)) {
    console.log(0);
    return;
  }
  if(checkAlt(string) === false) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === string[i + 1]) {
        var newString = removeAllChars(string, string[i]);
      }
    }
  } else {
    console.log(string.length);
    return;
  }
  if(checkAlt(newString) === false) {
    getAlt(newString);
  } else {
    var obj = {};
    for (var i = 0; i < newString.length; i++) {
      if(!(obj[newString[i]])) {
        obj[newString[i]] = 1;
      } else {
        obj[newString[i]] ++;
      }
    }
    var arr = Object.keys(obj).map(function ( key ) { return obj[key]; });
    var sort = arr.sort((a,b) => {
      return b - a;
    });
    for(var i = 0; i < sort.length; i++) {
      if(sort[i] !== sort[i + 1] && sort[i] !== sort[i+1] -1) {
        sort.splice(i,1);
        i--;
      }
    }
    var max = Math.max.apply( null, sort );

    var string_copy = (' ' + newString).slice(1);
    var reducedString = reduceString(obj, string, max);

    if(checkAlt(reducedString) === false) {
      var removed = checkAltAndRemove(reducedString);
    }
    if(checkSame(removed)) {
      var reducedArr = reduceArr(sort, max);
      var stringReduced = reduceString(obj, string, reduceArr[0]);
      if(checkAlt(stringReduced === false)) {
        var rem = checkAltAndRemove(stringReduced);
        console.log(rem);
        if(rem.length === 2) {
          var maxOne = reducedArr[0];
          var finalArr = reduceArr(reducedArr, maxOne);
          var redString = reduceString(obj, string_copy, finalArr[0]);
          console.log(redString);

        }
      }
    }
    console.log(reducedString.length);

  }
}

console.log(getAlt(testString));
