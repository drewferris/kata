function lateRide(n) {
  var hours = n / 60;
  var minutes = n % 60;
  var string = hours.toString() + minutes.toString();
  debugger;
  return string.split('').reduce((a, b) => {
    return Number(a) + Number(b);
  });
}


lateRide(808);
