function processData(input) {
  var num = 0;
  var split = input.split('\n');
  var shift = split.shift();
  var x = split[0].split(' ').map(function(string) {
    return Number(string);
  });
  var w = split[1].split(' ').map(function(string) {
    return Number(string);
  });

  for (var i = 0; i < x.length; i++) {
    var xw = x[i] * w[i];
    num += xw;
  }

  var wSum = w.reduce(function(a, b) {
    return a + b;
  }, 0);
  console.log((num / wSum).toFixed(1));
}
