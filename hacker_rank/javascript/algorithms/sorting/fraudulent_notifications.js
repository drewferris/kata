var testSpendArr = [45,
  30,
  64,
  149,
  156,
  153,
  54,
  38,
  175,
  34,
  87,
  109,
  63,
  124,
  54,
  55,
  187,
  75,
  94,
  191,
  192,
  130,
  33,
  12,
  6,
  124,
  150,
  184,
  158,
  53,
  17,
  156,
  35,
  81,
  57,
  191,
  35,
  63,
  29,
  162,
  49,
  68,
  71,
  112,
  192,
  126,
  120,
  180,
  153,
  166,
  123,
  97,
  96,
  157,
  109,
  55,
  33,
  11,
  39,
  144,
  64,
  56,
  100,
  52,
  90,
  109,
  43,
  125,
  172,
  25,
  39,
  173,
  93,
  110,
  85,
  38,
  188,
  157,
  170,
  141,
  124,
  45,
  191,
  20,
  2,
  100,
  75,
  36,
  112,
  66,
  132,
  128,
  75
];

var testArr = [2, 3, 4, 2, 3, 6, 8, 4, 5];

function countNotifications(spendArr, d) {
  var obj = {};
  var total = 0;
  for (var i = 0; i < spendArr.length; i++) {
    if (i < d) {
      if (!obj[spendArr[i]]) obj[spendArr[i]] = 0;
      obj[spendArr[i]]++;
    } else if (i >= d) {
      var median;
      var count = 0;
      for (var j = 0; j < Object.keys(obj).length; j++) {
        count += obj[Object.keys(obj)[j]];
        if (count >= Math.ceil(d / 2)) {
          median = Object.keys(obj)[j];
          count = 0;
          break;
        }
      }
      if (spendArr[i] / 2 >= Number(median)) total++;
      // debugger;
      obj[spendArr[i - d]]--;
      if (!obj[spendArr[i]]) obj[spendArr[i]] = 0;
      obj[spendArr[i]]++;
    }
  }
  console.log(total);
}

countNotifications(testSpendArr, 10);

//better solution found on leaderboard

var _ = require('lodash');

function processData(input) {
  input = _.map(_.split(input, "\n"), line => _.map(_.split(line, ' '), _.parseInt));
  const d = input[0][1];
  const median = (d % 2 === 1) ?
    arr => arr[(d - 1) / 2] :
    arr => (arr[d / 2] + arr[d / 2 - 1]) / 2;
  let sortedArr = _.sortBy(_.slice(input[1], 0, d));
  let notifications = 0;
  for (i = d; i < input[0][0]; i++) {
    if (input[1][i] >= 2 * median(sortedArr)) {
      notifications++;
    }

    sortedArr.splice(_.sortedIndexOf(sortedArr, input[1][i - d]), 1);
    sortedArr = insert(input[1][i], sortedArr);
  }
  console.log(notifications);
}

function insert(element, arr) {
  arr.splice(_.sortedIndex(arr, element) + 1, 0, element);
  return arr;
}
