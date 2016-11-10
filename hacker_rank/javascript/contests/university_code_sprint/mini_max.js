function miniMax(array) {
  var minArr = array.slice();
  var maxArr = array.slice();
  var string = '';

  minArr.sort((a, b) => {
    return a - b;
  });


  maxArr.sort((a, b) => {
    return b - a;
  });

  var minSum = minArr.reduce((a,b) => {
    return a + b;
  }, 0);

  var maxSum = maxArr.reduce((a,b) => {
    return a + b;
  }, 0);

  var min = minSum - minArr[4];
  var max = maxSum - maxArr[4];
  string += min + ' ';
  string += max;

  console.log(string);
}

miniMax([2, 3, 1, 5, 4]);
