function pickPeaks(arr){
  console.log(arr);
  var obj = {};
  var peakArr = [];
  var peakIndexArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        var extraArr = [];
        extraArr.push(arr[j]);
        console.log(extraArr);
      }
      if(arr[i] > arr[i - 1] && arr[i] >= arr[i + 1] && arr.indexOf(arr[i]) != (0 || arr.length)) {
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
