function processData(input) {
  var lines = input.split('\n');
  var testCases = Number(lines.shift());
  var numberedLines = lines.map(Number);
  for (var i = 0; i < testCases; i++) {
    var possVals = [];
    var n = numberedLines.shift();
    var a = numberedLines.shift();
    var b = numberedLines.shift();
    for (var j = 0; j < n; j++) {
      var sum = j * a + (n - 1 - j) * b;
      if (possVals.indexOf(sum) === -1) {
        possVals.push(j * a + (n - 1 - j) * b);
      }
    }
    var sorted = possVals.sort((a, b) => {
      return a - b;
    });
    console.log(sorted.join(' '));
  }
  //Enter your code here
}
