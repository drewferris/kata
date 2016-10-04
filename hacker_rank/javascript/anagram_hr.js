function processData(input) {
  var split = input.split('\n');
  var first = split[0].split('').sort();
  var second = split[1].split('').sort();
  var count = 0;

  var countsFirst = {};

  for (var k = 0; k < first.length; k++) {
    var num = first[k];
    countsFirst[num] = countsFirst[num] ? countsFirst[num] + 1 : 1;
  }

  var countsSecond = {};

  for (var j = 0; j < second.length; j++) {
    var num = second[j];
    countsSecond[num] = countsSecond[num] ? countsSecond[num] + 1 : 1;
  }

  var check = function(arr1, arr2, countObj1, countObj2) {

    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1) {
        var splice = arr1.splice(i, 1);
        count++;
        check(arr1, arr2, countObj1, countObj2);
      } else if (arr2.indexOf(arr1[i]) !== -1 && countObj1[arr1[i]] > countObj2[arr1[i]]) {
        var splice = arr1.splice(i, 1);
        count++;
        countObj1[arr1[i]]--;
        check(arr1, arr2, countObj1, countObj2);
      }

    }
  };
  check(first, second, countsFirst, countsSecond);
  check(second, first, countsSecond, countsFirst);
  console.log(count);
}
