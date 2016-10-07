function processData(input) {
  var split = input.split('\n');
  var cases = split.shift();
  for (var j = 0; j < Number(cases); j++) {
    var again = split[j].split(' ').map(Number);
    if (again[0] > again[1]) {
      //console.log('first');
      console.log(again[2] + again[1] - 1);
    } else if (again[0] < again[1]) {
      //console.log('second');
      if (again[2] + (again[1] % again[0]) - 1 <= again[0]) {
        // console.log('got')
        console.log(again[2] + (again[1] % again[0]) - 1);
      } else {
        console.log(again[2] + (again[1] % again[0]) - 1 - again[0]);
      }
    } else {
      //console.log('thirds');
      console.log(again[1]);
    }
  }
}
