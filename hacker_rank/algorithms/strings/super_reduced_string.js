var testString = 'baab';

function checkDups(string) {
  for(var i = 0; i < string.length - 1; i++) {
    if(string[i] === string[i+1]) {
      return false;
    }
  }
  return true;
}

function superReduce(string) {
  if(checkDups(string) === true) {
    console.log(string);
    return;
  }
  for(var i = 0; i < string.length; i++) {
    var subFront = string.substring(0,i);
    if(string[i] === string[i+1]) {
      string = subFront + string.substring(i+2);
      if(string === '') {
        console.log('Empty String');
        return;
      }
    }
  }
  superReduce(string);
}
console.log(superReduce(testString));
