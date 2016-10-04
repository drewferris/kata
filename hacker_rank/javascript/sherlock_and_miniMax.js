function processData(input) {
  let split = input.split('\n');
  let number = Number(split[0]);
  let integers = split[1].split(' ').map(function(string) {
    return Number(string);
  });
  let range = split[2].split(' ').map(function(string) {
    return Number(string);
  });
  var objArr = [];
  for (var i = range[0]; i < range[1] + 1; i++) {
    var diffArr = [];
    for (var j = 0; j < integers.length; j++) {
      var diff = Math.abs(integers[j] - i);
      diffArr.push(diff);
      if (j === number - 1) {
        var minObj = {
          min: Math.min.apply(Math, diffArr),
          M: i
        }
        objArr.push(minObj);
      }
    }
  }
  var sortedObjArr = objArr.sort(function(a, b) {
    return b.min - a.min;
  });
  console.log(sortedObjArr[0].M);
}
