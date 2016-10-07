
function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var m = parseInt(n_temp[1]);
  c = readLine().split(' ');
  c = c.map(Number);
  var returnVals = [];
  for (var i = 0; i < n; i++) {
    var holder = Infinity;
    for (var j = 0; j < c.length; j++) {
      var dist = Math.abs(i - c[j]);
      if (dist < holder) {
        holder = dist;
      }
    }
    returnVals.push(holder);
  }
  console.log(Math.max.apply(null, returnVals));

}
