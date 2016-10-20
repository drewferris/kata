function processData(input) {
  var possBadSeats = [];
  if (input[input.length - 1] === 'E') {
    console.log(input.length - 1);
    return;
  } else if (input[0] === 'E') {
    console.log(0);
    return;
  } else {
    for (var i = 1; i < input.length; i++) {
      if (input[i - 1] === 'E' && input[i] === 'E' && input[i + 1] === 'E') {
        console.log(i);
        return;
      } else if (input[i] === 'E' && input[i - 1] === 'E') {
        possBadSeats.push(i);
      }
    }
  }
  var max = Math.max.apply(null, possBadSeats);
  console.log(max);
  //Enter your code here
}
