function countMistakes(array) {
  var count = 0;
  if(array[0] !== 1) count++;
  for(var i = 0; i < array.length; i++) {
    if(array[i-1]) {
      if(array[i-1] + 1 !== array[i]) {
        count++;
      }
    }
  }
  console.log(count);
}

countMistakes([3,4,6,7,]);
