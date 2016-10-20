function processData(input) {
  var lines = input.split('\n');
  var l = Number(lines[0]);
  var ar = lines[1].split(' ').map(Number);
  var k = ar[0];
  var left = [];
  var right = [];
  for (var i = 0; i < ar.length; i++) {
    if (ar[i] < k) {
      left.push(ar[i]);
    } else if (ar[i] > k) {
      right.push(ar[i]);
    }
  }
  var concated = left.concat(k, right);
  console.log(concated.join(' '));
  //Enter your code here
}
