function processData(input) {
  var lines = input.split('\n');
  var q = Number(lines.shift());
  for (var i = 0; i < q; i++) {
    var n = Number(lines.shift());
    var x = [];
    var y = [];
    for (var j = 0; j < n; j++) {
      var coordinates = lines.shift().split(' ').map(Number);
      x.push(coordinates[0]);
      y.push(coordinates[1]);
    }
    var min = Math.min.apply(null, x);
    var max = Math.max.apply(null, x);
    var minY = Math.min.apply(null, y);
    var maxY = Math.max.apply(null, y);
    var ind = 'YES';
    for (var j = 0; j < x.length; j++) {
      if ((x[j] !== min && x[j] !== max) && (y[j] !== minY && y[j] !== maxY)) {
        //console.log(x[j], y[j]);
        ind = 'NO';
      }
    }
    console.log(ind);
  }
  //Enter your code here
}
