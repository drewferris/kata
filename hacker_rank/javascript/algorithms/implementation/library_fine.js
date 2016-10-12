function main() {
  var d1_temp = readLine().split(' ');
  var d1 = parseInt(d1_temp[0]);
  var m1 = parseInt(d1_temp[1]);
  var y1 = parseInt(d1_temp[2]);
  var d2_temp = readLine().split(' ');
  var d2 = parseInt(d2_temp[0]);
  var m2 = parseInt(d2_temp[1]);
  var y2 = parseInt(d2_temp[2]);
  var dayDiff = d1 - d2;
  var monthDiff = m1 - m2;
  var yearDiff = y1 - y2;
  if (yearDiff < 0) {
    console.log(0);
    return;
  }
  if (monthDiff === 0 && yearDiff === 0) {
    if (dayDiff < 0) {
      console.log(0);
      return;
    }
    console.log(dayDiff * 15);
  } else if (monthDiff !== 0 && yearDiff === 0) {
    if (monthDiff < 0) {
      console.log(0);
      return;
    }

    console.log(monthDiff * 500);
  } else if (yearDiff !== 0) {
    console.log(yearDiff * 10000);
  }
}
