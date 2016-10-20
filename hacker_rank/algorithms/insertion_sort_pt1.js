function processData(input) {
  var lines = input.split('\n');
  var l = Number(lines[0]);
  var ar = lines[1].split(' ').map(Number);
  var k = ar[ar.length - 1];
  for (var i = ar.length - 2; i >= 0; i--) {
    if (ar[i] > k) {
      ar[i + 1] = ar[i];
      console.log(ar.join(' '));
      if (i === 0) {
        ar[i] = k;
        console.log(ar.join(' '));
        return
      }
    } else {
      ar[i + 1] = k;
      console.log(ar.join(' '));
      return;
    }
  }
  //Enter your code here
}
