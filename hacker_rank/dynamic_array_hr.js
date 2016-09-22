function processData(input) {
  var split = input.split('\n');
  var firstLine = split.shift().split(' ');
  var n = Number(firstLine[0]);
  var lastAns = 0;
  var seqArr = [];

  for (var i = 0; i < n; i++) {
    var seq = [];
    seqArr.push(seq);
  }

  var query1 = function(x, y) {
    var index = (x ^ lastAns) % n;
    seqArr[index].push(y);
  }

  var query2 = function(x, y) {
    var index = (x ^ lastAns) % n;
    var other = y % seqArr[index].length;
    lastAns = seqArr[index][other];
    console.log(lastAns)
  }



  for (var i = 0; i < split.length; i++) {
    var numbers = split[i].split(' ');
    var numbersAgain = numbers.map(function(string) {
      return Number(string);
    });

    if (numbersAgain[0] === 1) {
      query1(numbersAgain[1], numbersAgain[2]);
    } else if (numbersAgain[0] === 2) {
      query2(numbersAgain[1], numbersAgain[2])
    }
  }
}
