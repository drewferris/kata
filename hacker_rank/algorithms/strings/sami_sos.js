var testString = 'SOSSPSSQSSOR';

function checkSOS(string) {
  var count = 0;
  for(var i = 0; i < string.length; i += 3) {
    var sub = string.substring(i, i + 3);
    if(sub[0] !== 'S') {
      count++;
    }
    if(sub[1] !== 'O') {
      count++;
    }
    if(sub[2] !== 'S') {
      count++;
    }
  }
  console.log(count);
}

console.log(checkSOS(testString));
