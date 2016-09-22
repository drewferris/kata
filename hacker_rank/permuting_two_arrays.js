function processData(input) {
  var split = input.split('\n');
  var queryNum = split.shift();
  for (var o = 0; o < queryNum; o++) {
    var spliced = split.splice(0, 3);
    var charLength = Number(spliced[0].split(' ')[0]);
    var relation = Number(spliced[0].split(' ')[1]);
    var firstIndexRemoved = spliced.shift();
    var arr = [];
    for (var i = 0; i < spliced.length; i++) {
      var newArr = spliced[i].split(' ');
      var mapped = newArr.map(function(string) {
        return Number(string);
      });
      arr.push(mapped);
    }
    var firstFirst = arr[0];
    var firstSecond = arr[1];


    var permArr = [];
    var usedChars = [];


    function permute(input) {

      var i, ch;
      for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
          permArr.push(usedChars.slice());
        }
        permute(input);
        input.splice(i, 0, ch);
        usedChars.pop();
      }
      return permArr;
    };

    var A = permute(firstFirst);
    console.log(A, 'A');

    var permArrAgain = [];
    var usedCharsAgain = [];


    function permuteAgain(input) {

      var i, ch;
      for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedCharsAgain.push(ch);
        if (input.length == 0) {
          permArrAgain.push(usedCharsAgain.slice());
        }
        permuteAgain(input);
        input.splice(i, 0, ch);
        usedCharsAgain.pop();
      }
      return permArrAgain;
    }

    var B = permuteAgain(firstSecond);
    console.log(B, 'B');

    var submitArr = [0];

    function countInArray(array, what) {
      var count = 0;
      for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
          count++;
        }
      }
      return count;
    }

    function compare(array1, array2) {

      for (var j = 0; j < array1.length; j++) {
        for (var k = 0; k < array1[j].length; k++) {
          for (var l = 0; l < array2.length; l++) {
            for (var m = 0; m < array2[l].length; m++) {
              for (var n = 1; n < length.length + 1; n++) {
                if (array1[j][k] + array2[l][m] === relation) {
                  submitArr.push(array1[j][k], array2[l][m]);
                  array1[j].shift();
                  array2[l].shift();
                  compare(array1, array2);
                }
              }
            }
          }
        }
      }
      return submitArr;
    }

    compare(A, B);
  }
}

//second solution

function processData(input) {
  var split = input.split('\n');
  var q = Number(split.shift());
  for (var i = 0; i < q; i++) {
    var query = split.splice(0, 3);
    var firstLine = query[0].split(' ').map(function(string) {
      return Number(string);
    });
    var n = firstLine[0];
    var k = firstLine[1];
    var a = query[1].split(' ').map(function(string) {
      return Number(string);
    }).sort(function(a, b) {
      return a - b;
    });
    var b = query[2].split(' ').map(function(string) {
      return Number(string);
    }).sort(function(a, b) {
      return b - a;
    });
    var count = 0;
    for (var j = 0; j < n; j++) {
      if (a[j] + b[j] >= k) count++;
    }
    if (count === n) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }
}
