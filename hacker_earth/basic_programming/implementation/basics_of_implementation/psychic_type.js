function psychic(array, a, b) {
  var current = array[a];
  while(current !== a) {
    if(current === b) {
      console.log('Yes');
      current = array[current];
    }
  }
  console.log('No');
}

psychic([ 8, 3, 8, 4, 1, 2, 4, 7, 4, 4, 0 ], 1, 4);
