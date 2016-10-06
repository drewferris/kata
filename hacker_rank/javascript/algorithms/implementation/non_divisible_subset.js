function processData(input) {
  var split = input.split('\n').map(function(line) {
    return line.split(' ').map(function(string) {
      return Number(string);
    });
  });
  var firstLine = split.shift();
  var k = firstLine[1];
  var integers = split[0];
  var potential = [];
  //console.log('k', k);
  for (var i = 0; i < integers.length; i++) {
    var arr = [];
    arr.push(integers[i]);
    for (var j = 0; j < integers.length; j++) {
      //console.log(integers[i], integers[j])
      if (integers[i] !== integers[j] && integers[i] + integers[j] !== k) {
        arr.push(integers[j]);
      }
    }
    for (var p = 0; p < arr.length; p++) {
      for (var l = p + 1; l < arr.length; l++) {
        if (arr[p] + arr[l] === k) {
          arr.splice(l, 1);
          p--;
        }
      }
    }
    //console.log(arr);
    potential.push(arr);
  }
  var max = potential.sort((a, b) => {
    return b.length - a.length;
  });
  console.log(max[0].length);
}
