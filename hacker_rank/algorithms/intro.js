function processData(input) {
  var lines = input.split('\n');
  var arr = lines[2].split(' ');
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === lines[0]) {
      console.log(i);
      return;
    }
  }
  console.log(arr);
  //Enter your code here
}
