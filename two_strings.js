function processData(input) {
  var odd = [];
  var even = [];
  var evenArr = [];
  var lines = input.split('\n');
  var shifted = lines.shift();
  for (var i = 0; i < lines.length; i++) {
    if (i % 2 === 0) even.push(lines[i]);
    if (i % 2 !== 0) odd.push(lines[i]);
  }
  for (var l = 0; l < even.length; l++) {
    for (var o = 0; o < even[i].length; o++) {
      var split = even[i].split('');
      console.log(split);
    }
    for (var k = 0; k < even[l].length; k++) {
      let current = even[l][k];
      let first;
      for (var j = k + 1; j < even[l].length; j++) {
        first = j;
        let subString = even[l].slice(k, first + 1);
        evenArr.push(subString);
      }
    }
  }
  console.log(evenArr);
}
