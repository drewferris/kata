function processData(input) {
  var split = input.split('\n');
  var firstLine = split[0].split(' ').map(function(string) {
    return Number(string);
  });
  var secondLine = split[1].split(' ').map(function(string) {
    return Number(string);
  });
  var thirdLine = split[2].split(' ').map(function(string) {
    return Number(string);
  });
  var secondLineTotal = secondLine.reduce(function(a, b) {
    return a + b;
  }, 0);
  var annaPortion = (secondLineTotal - secondLine[firstLine[1]]) / 2;
  if (annaPortion === thirdLine[0]) {
    console.log('Bon Appetit');
  } else {
    console.log(thirdLine[0] - annaPortion);
  }
}
