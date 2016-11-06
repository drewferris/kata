function rotate(array, k) {
  var hashTable = {};
  for(var i = 0; i < array.length; i++) {
    if(!hashTable[i]) {
      hashTable[i] = array[i];
    }
  }
  var l = k;
  for(var i = 0; i < array.length; i++) {
    if(l > 0) {
      array[i] = hashTable[array.length - l];
      l--;
    }  else {
      array[i] = hashTable[i - k];
    }

  }
  console.log(array);
}

rotate([1,2,3,4,5,6,7,8], 5);
