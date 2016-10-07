function main() {
  var t = parseInt(readLine());
  var i = 0;
  while (3 * Math.pow(2, i) < t) {
    i++;
  }
  if (t <= 4) {
    var topVal = 3 * Math.pow(2, i);
  } else {
    var topVal = 3 * Math.pow(2, i - 1);
  }

  if (3 * Math.pow(2, i) === t) {
    console.log(3 * Math.pow(2, i) - 2)
  } else {
    var topTime = topVal - 2;
    var diff = t - topTime;
    var val = topVal - diff;

    //console.log(i);
    //console.log(topTime, topVal, diff, val);
    console.log(val);
  }
}
