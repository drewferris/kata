var testString = 'AAAAABABABAB';

function reduceToAlt(string) {
  var count = 0;
  for(var i = 0; i < string.length; i++) {
    if(string[i] === string[i +1]) {
      string = string.substring(0, i) + string.substring(i+1);
      i--;
      count++;
    }
  }
  console.log(count);
}

console.log(reduceToAlt(testString));
