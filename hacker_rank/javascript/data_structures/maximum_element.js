function processData(input) {
  var split = input.split('\n');
  var shift = split.shift();
  var stack = [];
  for (var i = 0; i < split.length; i++) {
    var splitAgain = split[i].split(' ').map(Number);
    if (splitAgain[0] === 1) {
      stack.push(splitAgain[1]);
    } else if (splitAgain[0] === 2) {
      stack.pop();
    } else if (splitAgain[0] === 3) {
      var max = Math.max.apply(null, stack);
      console.log(max);
    }
  }
  //Enter your code here
}
