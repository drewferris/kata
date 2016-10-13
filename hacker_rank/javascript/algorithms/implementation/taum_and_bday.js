function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var b_temp = readLine().split(' ');
    var b = parseInt(b_temp[0]);
    var w = parseInt(b_temp[1]);
    var x_temp = readLine().split(' ');
    var x = parseInt(x_temp[0]);
    var y = parseInt(x_temp[1]);
    var z = parseInt(x_temp[2]);
    var blackCost = x * b;
    var whiteCost = y * w;
    if (x === y) {
      console.log(blackCost + whiteCost);
    } else {
      var blackConversionCost = z * b;
      var whiteConversionCost = z * w;
      if (blackConversionCost + b * y < blackCost) {
        blackCost = blackConversionCost + b * y;
      }
      if (whiteConversionCost + w * x < whiteCost) {
        whiteCost = whiteConversionCost + w * x;
      }
      console.log(blackCost + whiteCost);
    }
  }

}
