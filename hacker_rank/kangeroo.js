function main() {
  var x1_temp = readLine().split(' ');
  var x1 = parseInt(x1_temp[0]);
  var v1 = parseInt(x1_temp[1]);
  var x2 = parseInt(x1_temp[2]);
  var v2 = parseInt(x1_temp[3]);
  var x = x1 + v1;
  var y = x2 + v2;
  if (x === y) console.log('YES');
  var yes = 0;
  for (var i = 0; i < 100; i++) {
    x += v1;
    y += v2;
    if (x === y) {
      console.log('YES');
      yes++;
    }
  }
  if (yes === 0) console.log('NO');
}
