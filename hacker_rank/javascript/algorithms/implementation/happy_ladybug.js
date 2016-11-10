function happyLadyBug(string) {

  var hashTable = {};
  var hashTableCount = {};
  var impossible = false;
  var count = 0;
  if (string.length === 1 && string[0] !== '_') {
    console.log('NO');
    return;
  }
  for (var i = 0; i < string.length; i++) {
    if (!hashTable[string[i]]) {
      hashTable[string[i]] = 0;
    }
    hashTable[string[i]]++;
  }
  Object.keys(hashTable).forEach((key) => {
    if (hashTable[key] === 1 && key !== '_') {
      impossible = true
      return;
    }
  });
  if (string.indexOf('_') === -1) {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === string[i + 1]) {
        if (!hashTableCount[string[i]]) hashTableCount[string[i]] = 0;
        hashTableCount[string[i]]++;
      }
    }
    if (Object.keys(hashTableCount).length >= Math.floor(string.length / 2) && impossible !== true) {

      console.log('YES');
      return;
    }
  }


  if (impossible === true) {
    console.log('NO');
    return;
  }
  if (string.indexOf('_') === -1 && hashTable[string[0]] !== string.length) {

    console.log('NO');
    return;
  }

  console.log('YES');
  return;
}

happpyLadyBug('X_Y__X');
