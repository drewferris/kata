function processData(input) {
  var odd = [];
  var even = [];
  var evenArr = [];
  var oddArr = [];
  var lines = input.split('\n');
  var shifted = lines.shift();
  for (var i = 0; i < lines.length; i++) {
    if (i % 2 === 0) even.push(lines[i]);
    if (i % 2 !== 0) odd.push(lines[i]);
  }
  for (var l = 0; l < even.length; l++) {
    for (var o = 0; o < even[l].length; o++) {
      var split = even[l].split('');
      for (var p = 0; p < split.length; p++) {
        evenArr.push(split[p]);
      }
    }
    for (var k = 0; k < even[l].length; k++) {
      let first;
      for (var j = k + 1; j < even[l].length; j++) {
        first = j;
        let subString = even[l].slice(k, first + 1);
        evenArr.push(subString);
      }
    }
  }
  for (var q = 0; q < odd.length; q++) {
    for (var w = 0; w < odd[q].length; w++) {
      var splitAgain = odd[q].split('');
      for (var e = 0; e < splitAgain.length; e++) {
        oddArr.push(splitAgain[e]);
      }
    }
    for (var r = 0; r < odd[q].length; r++) {
      let firstAgain;
      for (var t = r + 1; t < odd[q].length; t++) {
        firstAgain = t;
        let subString = odd[q].slice(r, firstAgain + 1);
        oddArr.push(subString);
      }
    }
  }
  for (var y = 0; y < evenArr.length; y++) {
    if ()
  }
}

function check(arr) {
    a = arr[0];
    b = arr[1];
    var contains = 'NO';
    for (var i=0;i<b.length;i++) {
        if (a.indexOf(b[i]) != -1) {
            contains = 'YES';
            break;
        }
    }
    console.log(contains)

}

function processData(input) {
    //Enter your code here
    var input = input.split("\n");
    input.shift();
    while (input.length) {
        check(input.splice(0,2))
    }
}
