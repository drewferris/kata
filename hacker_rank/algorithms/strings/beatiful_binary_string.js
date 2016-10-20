'use strict';

let testString = '0100101010';

function beautifulBS(string) {
  var count = 0;
  for(var i = 1; i < string.length; i++) {
    if(string[i-1] === '0' && string[i] === '1' && string[i+1] === '0') {
      string = string.substring(0, i + 1) + '1' + string.substring(i+2);
      count++;
    }
  }
  console.log(count);
}
console.log(beautifulBS(testString));
