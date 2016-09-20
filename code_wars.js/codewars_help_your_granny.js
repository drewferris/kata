function tour(friends, fTowns, distTable) {
  var distArr = [];
  var sideArr = [];
  var testArr = [];

  var computeDist = function(b, c) {
    return Math.sqrt(Math.abs(Math.pow(b, 2) - Math.pow(c, 2)));
  }

  var fTownsFiltered = fTowns.filter(function(a) {
    if (friends.indexOf(a[0]) !== -1) return a;
  });

  var fTownsMapped = fTownsFiltered.map(function(a) {
    return a[1];
  });

  for (var i = 0; i < distTable.length; i++) {
    if (i % 2 === 0) {
      var obj = {
        town: distTable[i],
        distance: distTable[i + 1]
      }
      testArr.push(obj)
    }
  }

  var distTableFiltered = testArr.filter(function(a) {
    if (fTownsMapped.indexOf(a.town) !== -1) return a;
  });

  for (var i = 0; i < distTableFiltered.length; i++) {
    distArr.push(distTableFiltered[i].distance);
  }

  for (var i = 0; i < distArr.length; i++) {
    var a = computeDist(distArr[i], distArr[i + 1]);
    sideArr.push(a);
  }

  var pop = sideArr.pop();
  sideArr.push(distArr[0], distArr[distArr.length - 1]);

  var sum = sideArr.reduce(function(a, b) {
    return a + b;
  }, 0);

  return Math.floor(sum);
}
