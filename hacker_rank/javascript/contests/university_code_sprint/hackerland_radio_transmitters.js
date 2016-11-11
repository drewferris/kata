function trans(array, k) {
  var sorted = array.sort((a, b) => {
    return a - b;
  });
  var distances = {};
  for (var i = 0; i < sorted.length; i++) {
    if (!distances[i]) distances[i] = 0;
    if (sorted[i + 1]) {

      distances[i] = sorted[i + 1] - sorted[i];
    }
  }
  var count = 0;
  var transCount = 0;
  var keysArr = Object.keys(distances);
  for (var i = 0; i < keysArr.length; i++) {
    if (count < k * 2) {
      count += distances[keysArr[i]];
    } else if (count === k * 2) {
      transCount++;
      if(keysArr.length - 1 - i < k) {
        count = distances[keysArr[i]];
      } else {

        count = 0;
      }
    }
  }
  if(count === 0) {
    console.log(transCount);
  } else {
    console.log(transCount + 1);
  }


}

trans([7, 2, 4, 6, 5, 9, 12, 11], 2);
