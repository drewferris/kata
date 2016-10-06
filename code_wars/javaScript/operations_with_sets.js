function process2Arrays(arr1, arr2) {
  var count = 0;

  if (arr1.length !== 0 && arr2.length !== 0) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) !== -1) {
        count++;
        arr2.splice(arr2.indexOf(arr1[i]), 1);
        arr1.splice(i, 1);
        console.log('BLAH', arr2.indexOf(arr1[i]), arr1[i]);
        i--;
      }
    }
    return [count, arr1.length + arr2.length, arr1.length, arr2.length];
  } else if (arr2.length === 0) {
    var sorted = arr1.sort();
    for (var i = 0; i < sorted.length; i++) {
      if (sorted[i] === sorted[i + 1]) {
        sorted.splice(i, 1);
        i--;
      }
    }
    return [count, sorted.length, sorted.length, 0];
  }

}
