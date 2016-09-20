const binaryArrayToNumber = arr => {
  var final = [];
  var reverse = arr.reverse();
  for (var i = 0; i < reverse.length; i++) {
    var val = reverse[i] * Math.pow(2, i);
    final.push(val);
  }
  var sum = final.reduce(add, 0);

  function add(a, b) {
      return a + b;
  }

  return sum;
};

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
