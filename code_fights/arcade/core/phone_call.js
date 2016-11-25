function phoneCall(min1, min2_10, min11, s) {
  var total = 0;
  var i = 1;
  while (s > 0) {
    if (i === 1) {
      total += min1;
      s -= min1;
    } else if (i > 1 && i <= 10) {
      total += min2_10;
      s -= min2_10;
    } else if (i > 10) {
      total += min11;
      s -= min11;
    }
    i++;
  }
  return total;

}

phoneCall(3,1,2,20);
