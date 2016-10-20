var testString = 'We promptly judged antique ivory buckles for the next prize';

function pangram(string) {
  var countArr = [];
  for(var i = 0; i < string.length; i++) {
    var lowered = string[i].toLowerCase();
    if(countArr.indexOf(lowered) === -1 && lowered !== ' ') {
      countArr.push(lowered);
    }
  }
  if(countArr.length !== 26) {
    console.log('not pangram');
  } else {
    console.log('pangram');
  }
}

console.log(pangram(testString));
