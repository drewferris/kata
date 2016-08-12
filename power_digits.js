function sumDigPow(a, b) {
  var arr = [];
  for (var i = a; i < b + 1; i++) {
    var string = i.toString();
    var split = string.split('');
    if (split.length < 2) {
      arr.push(Number(split[0]))
    } else {
      var sum = [];
      for (var j = 0; j < split.length; j++) {
        var power = Math.pow(split[j], j + 1);
        sum.push(power);
      }
      var reduced = sum.reduce((a, b) => a + b, 0);
      if (reduced === i) arr.push(i);
  }
  }
  return arr;
