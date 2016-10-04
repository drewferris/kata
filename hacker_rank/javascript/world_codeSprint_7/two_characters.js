//timed out Solution
function main() {
  var len = parseInt(readLine());
  var s = readLine();
  var split = s.split('');
  var altArr = [];
  var newArray = split.slice();


  function removeChar(arr, char1, char2) {
    for (var k = 0; k < arr.length; k++) {
      if (arr[k] !== char1 && arr[k] !== char2) {
        var temp = arr[k];
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === temp) {
            arr.splice(i, 1);
            i--;
          }
        }
      }
    }
    return arr;
  }

  function isAlt(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (i + 2 < arr.length && arr[i] !== arr[i + 2]) {
        return false;
      }
    }
    return true;
  }

  function reduceSingle(arr) {
    var sorted = arr.sort();
    for (var i = 0; i < sorted.length; i++) {
      if (sorted[i] === sorted[i + 1]) {
        sorted.splice(i, 1);
        i--;
      }
    }
    return sorted;
  }

  var reduced = reduceSingle(newArray);

  for (var i = 0; i < reduced.length; i++) {
    for (var j = i + 1; j < reduced.length; j++) {
      var newArray = split.slice();
      var test = removeChar(newArray, reduced[i], reduced[j]);
      if (isAlt(test) === true) {
        altArr.push(test);
      }
    }
  }

  var sortAlt = altArr.sort(function(a, b) {
    return b.length - a.length;
  });
  console.log(altArr[0].length);
}

//string approach unfinished
function find_unique_characters(string) {
  var unique = '';
  for (var i = 0; i < string.length; i++) {
    if (unique.indexOf(string[i]) == -1) {
      unique += string[i];
    }
  }
  return unique;
}
console.log(find_unique_characters('baraban'));
