function differentRightmostBit(n, m) {
  var c = 0;
  while ((m % 2) === (n % 2)) {
    var n = Math.floor(n / 2);
    var m = Math.floor(m / 2);
    c++;
  }
  var result = Math.pow(2, c);
  console.log(c);
  return result;
}

console.log(differentRightmostBit(16, 9));
