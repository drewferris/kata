function pickPeaks(arr){
  var obj = {};
  var peakArr = [];
  var peakIndexArr = [];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i - 1] && arr[i] >= arr[i + 1] && arr[i] >= arr[i + 2] && arr.indexOf(arr[i]) != (0 || arr.length)) {
      var newArr = arr.slice(i, arr.length + 1);
      var min = Math.min.apply(null, newArr);
      if (min != arr[i]) {
        peakArr.push(arr[i]);
        peakIndexArr.push(i);
      }
    }
  }
  Object.defineProperty(obj, 'pos', {
    value: peakIndexArr,
    writable: true,
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(obj, 'peaks', {
    value: peakArr,
    writable: true,
    enumerable: true,
    configurable: true
  });
  return obj;
}
