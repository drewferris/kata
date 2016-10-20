var testString = 'acxz';

function funnyString(string) {
  var reversed = string.split('').reverse().join('');
  var count = 0;
  for (var i = 1; i < string.length; i++) {
    var normDiff = Math.abs(string[i].charCodeAt() - string[i - 1].charCodeAt());
    var revDiff = Math.abs(reversed[i].charCodeAt() - reversed[i - 1].charCodeAt());
    if(normDiff === revDiff) count++;
  }
  if(count === string.length - 1) {
    console.log('Funny');
  } else {
    console.log('Not Funny');
  }
}

console.log(funnyString(testString));
