function processData(input) {
  var split = input.split('\n');
  var queryNum = split.shift();
  var firstHalf = split.slice(0, split.length / queryNum);
  var firstRelation = Number(firstHalf[0].split(' ')[1]);
  var firstHalfReady = firstHalf.shift();
  var arr = [];
  for (var i = 0; i < firstHalf.length; i++) {
    var newArr = firstHalf[i].split(' ');
    var mapped = newArr.map(function(string) {
      return Number(string);
    });
    arr.push(mapped);
  }
  var firstFirst = arr[0];
  var firstSecond = arr[1];

  var combos = [];

  for (var k = 0; k < firstFirst.length; k++) {
    for (var j = 0; j < firstSecond.length; j++) {
      combos.push(firstFirst[k] + firstSecond[j]);
    }
  }
  if (combos.indexOf(firstRelation) !== -1) {
    console.log('YES');
  } else {
    console.log('NO');
  }

  var secondHalf = split.slice(split.length / queryNum, split.length);
  var secondRelation = secondHalf[0].split(' ')[1];
  var secondHalfReady = secondHalf.shift();
  var secondArr = [];
  for (var l = 0; l < secondHalf.length; l++) {
    var newArrSecond = secondHalf[l].split(' ');
    var mappedSecond = newArrSecond.map(function(string) {
      return Number(string);
    });
    secondArr.push(mappedSecond);
  }
  var secondFirst = secondArr[0];
  var secondSecond = secondArr[1];

  var combosSecond = [];

  for (var m = 0; m < secondFirst.length; m++) {
    for (var n = 0; n < secondSecond.length; n++) {
      combosSecond.push(secondFirst[m] + secondSecond[n]);
    }
  }
  if (combosSecond.indexOf(secondRelation) !== -1) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}
