function checkOrder(array) {
  for(var i = 0; i < array.length; i++) {
    if(array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

function makeBeautiful(array) {
  var swaps = 0;
  var newArray = array.slice();
  var sorted = newArray.sort((a,b) => {
    return a - b;
  });
  for(var i = 0; i < array.length; i++) {
    if(array[i] !== sorted[i]) {
      var swapIndex = array.indexOf(sorted[i]);
      var temp = array[swapIndex];
      array[swapIndex] = array[i];
      array[i] = temp;
      swaps++;
      if(checkOrder(array)) {
        console.log(swaps);
        return;
      }
    }
  }
}

makeBeautiful([2,5,3,1]);
