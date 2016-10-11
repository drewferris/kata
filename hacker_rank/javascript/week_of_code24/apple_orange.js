function main() {
  var s_temp = readLine().split(' ');
  var s = parseInt(s_temp[0]);
  var t = parseInt(s_temp[1]);
  var a_temp = readLine().split(' ');
  var a = parseInt(a_temp[0]);
  var b = parseInt(a_temp[1]);
  var m_temp = readLine().split(' ');
  var m = parseInt(m_temp[0]);
  var n = parseInt(m_temp[1]);
  apple = readLine().split(' ');
  apple = apple.map(Number);
  orange = readLine().split(' ');
  orange = orange.map(Number);
  //console.log('apple', apple);
  //console.log('orange', orange);
  var appleCount = 0;
  var orangeCount = 0;
  for (var i = 0; i < apple.length; i++) {
    if (a + apple[i] >= s && a + apple[i] <= t) {
      appleCount++;
    }
  }
  for (var j = 0; j < orange.length; j++) {
    if (b + orange[j] <= t && b + orange[j] >= s) {
      orangeCount++;
    }
  }
  console.log(appleCount);
  console.log(orangeCount);
}
