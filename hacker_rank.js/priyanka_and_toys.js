function processData(input) {
  var split = input.split('\n');
  var n = Number(split[0]);
  var weightArr = split[1].split(' ').map(function(string) {
    return Number(string);
  }).sort(function(a, b) {
    return a - b;
  });
  var count = 0;

  for (var i = 0; i < weightArr.length; i++) {
    count++;
    var rangeMax = weightArr[i] + 4;
    for (var j = i + 1; j < weightArr.length; j++) {
      if (weightArr[j] >= weightArr[i] && weightArr[j] <= rangeMax) {
        weightArr.splice(j, 1);
        j--;
      }
    }
  }
  console.log(count);
}
