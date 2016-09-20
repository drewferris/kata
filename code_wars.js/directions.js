function dirReduc(arr){
 function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
  }
  var north = countInArray(arr, 'NORTH');
  var south = countInArray(arr, 'SOUTH');
  var east = countInArray(arr, 'EAST');
  var west = countInArray(arr, 'WEST');
  console.log('north', north);
  console.log('south', south);
  console.log('east', east);
  console.log('west', west);

  for (var i = 0; i < arr.length; i++) {
    if ((north === south && (arr[i] === ('NORTH') || ('SOUTH'))) || (east === west && (arr[i] === ('EAST') || ('WEST')))) {
      var spliced = arr.splice(i, 1);
    }
  }
  return spliced;
}
