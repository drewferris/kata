function processData(input) {
  var lines = input.split('\n').map(Number);
  var returns = [];
  for (var i = lines[0]; i <= lines[1]; i++) {
    var squared = Math.pow(i, 2);
    var stringed = squared.toString();
    var firstHalf = Number(stringed.substring(0, stringed.length / 2));
    var secondHalf = Number(stringed.substring(stringed.length / 2));
    if (firstHalf + secondHalf === i) {
      returns.push(i);
    }
  }
  if (returns.length !== 0) {
    console.log(returns.join(' '));
  } else {
    console.log('INVALID RANGE');
  }
  //Enter your code here
}
