function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n = parseInt(readLine());
    var count = 0;
    var split = n.toString().split('').map(Number);
    for (var i = 0; i < split.length; i++) {
      if (n % split[i] === 0) count++;
    }
    console.log(count);
  }

}
