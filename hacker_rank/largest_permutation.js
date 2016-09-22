//my solution

function processData(input) {
  var split = input.split('\n');
  var firstLine = split[0].split(' ').map(function(string) {
    return Number(string);
  });
  var n = firstLine[0];
  var k = firstLine[1];
  var secondLine = split[1].split(' ').map(function(string) {
    return Number(string);
  });

  var secondLineDup = split[1].split(' ').map(function(string) {
    return Number(string);
  }).sort(function(a, b) {
    return b - a;
  });

  if (secondLine[0] === secondLineDup[0]) {
    console.log(secondLine.join(' '));
  } else if (secondLine != secondLineDup) {
    var newArr = [];
    var count = 0;
    for (var i = 0; i < secondLine.length; i++) {
      if (count < k) {
        var max = Math.max.apply(null, secondLine);
        if (secondLine[i] < max) {
          var b = secondLine[secondLine.indexOf(max)];
          secondLine[secondLine.indexOf(max)] = secondLine[i];
          secondLine[i] = b;
          count++;
          var spliced = secondLine.splice(i, 1);
          newArr.push(spliced[0]);
          i--;
        } else {
          newArr.push(secondLine[i]);
        }
      } else {
        newArr.push(secondLine[i]);
      }
    }
    console.log(newArr.join(' '));
  }
}

//code that is better but still times out

var maximum = function(arr, start, end) {
  var max = arr[start];
  var index = start;
  for (i = start + 1; i < end; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }
  return index;
}

var swap = function(a, b) {
  var temp = a;
  a = b;
  b = temp;
  return [a, b];
}

var largest_permutation = function(arr, n, k) {
  for (j = 0; j < n; j++) {
    var pos = maximum(arr, j, n);
    if (k > 0 && pos != j) {
      var res = swap(arr[pos], arr[j]);
      arr[pos] = res[0];
      arr[j] = res[1];
      k--;
    }
  }
  return arr;
};

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  input[0] = input[0].split(" ");
  var k = parseInt(input[0][1]);
  input[1] = input[1].split(" ");
  var nums = [];
  for (i = 0; i < input[1].length; i++)
    nums.push(parseInt(input[1][i]));
  nums = largest_permutation(nums, nums.length, k);
  console.log(nums.join(" "));
}
