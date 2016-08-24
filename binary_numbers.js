function main(n) {
  var arr = [];
  var newArr = [];
  var numArr = [];

  for (var i = 0; i < n; i++) {
    numArr.push(i);
  }
  var reversed = numArr.reverse();
  for (var l = 0; l < reversed.length; l++) {
    var sum = newArr.reduce((a, b) => a + b, 0);
    if (Math.pow(2, reversed[l]) < n && sum < n) {
      newArr.push(Math.pow(2, reversed[l]));
      var sumAgain = newArr.reduce((a, b) => a + b, 0);
      if (sumAgain > n) {
        var popped = newArr.pop();
        newArr.push(0);
      }
    } else if (Math.pow(2, reversed[l]) < n) {
      newArr.push(0);
    }
  }
  var binary = newArr.map(function(num) {
    if (num !== 0) {
      return 1;
    } else {
      return num;
    }
  });
  var consCount = [];
  var count = 1;

  for (var k = 0; k < binary.length; k++) {
    if (binary[k] === 1 && binary[k + 1] === 1) {
      count++;
      consCount.push(count);
    } else if (binary[k] === 0) {
      count = 1;
    }
  }
  var max = Math.max.apply(null, consCount);

  if (max === -Infinity) {
    console.log(consCount[0]);
  } else {
    console.log(max);
  }

}
