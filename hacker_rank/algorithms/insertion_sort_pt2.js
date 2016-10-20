function processData(input) {
  var lines = input.split('\n');
  var l = Number(lines[0]);
  var ar = lines[1].split(' ').map(Number);
  for (var i = 0; i < ar.length - 1; i++) {
    if (ar[i] > ar[i + 1]) {
      var temp = ar[i + 1];
      ar[i + 1] = ar[i];
      ar[i] = temp;
      var j = i;
      while (ar[j] < ar[j - 1]) {
        var temp = ar[j - 1];
        ar[j - 1] = ar[j];
        ar[j] = temp;
        j--;
      }
    }
    console.log(ar.join(' '));
  }
  //Enter your code here
}
