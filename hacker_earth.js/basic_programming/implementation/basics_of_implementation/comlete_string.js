function completeString(string) {
  var hashTable = {};
  var count = 0;
  for(var i = 0; i < string.length; i++) {
    if(!hashTable[string[i]]) {
      hashTable[string[i]] = 0;
    }
  }
  Object.keys(hashTable).forEach((key) => {
    count++;
  });
  if(count === 26) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

completeString('wyyga');
