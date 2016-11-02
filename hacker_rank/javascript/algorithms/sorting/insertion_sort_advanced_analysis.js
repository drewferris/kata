var testArr = [ 2, 1, 3, 1, 2 ];

function sortAdvanced(array) {
  var count = 0;
  for(var i = 0; i < array.length; i++) {
    while(array[i] > array[i+1]) {
      var temp = array[i+1];
      array[i+1] = array[i];
      array[i] = temp;
      i--;
      count++;
    }
  }
  console.log(count);
}

sortAdvanced(testArr);
