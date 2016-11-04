

function print(string, n) {
  var hashTable = {};
  var count = 0;
  for(var i = 0; i < string.length; i++) {
    if(!hashTable[string[i]]) {
      hashTable[string[i]] = 0;
    }
    hashTable[string[i]]++;
  }
  var phrase = 'hackerearth';
  for(var j = 0; j < n; j++) {
    for(var i = 0; i < phrase.length; i++) {
      if(hashTable[phrase[i]] !== 0) {
        hashTable[phrase[i]] --;
      } else {
        console.log(count);
        return;
      }
    }
    count++;
  }
}


print('aahkcreeatrha');
