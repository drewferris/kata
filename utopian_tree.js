function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readLine());
    if (n === 0) {
      console.log(1);
    } else {
      var height = 1;
      for (var i = 1; i < n + 1; i++) {
        if (i % 2 !== 0) {
          height *= 2;
        } else if (i % 2 === 0) {
          height += 1;
        }
      }
      console.log(height);
    }
  }

}
