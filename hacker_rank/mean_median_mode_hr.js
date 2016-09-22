function processData(input) {
  var modeArr = [];
  var splitFirst = input.split('\n');
  var n = Number(splitFirst.shift());
  var numbers = splitFirst[0].split(' ').map(function(string) {
    return Number(string);
  });

  var meanFirst = numbers.reduce(function(a, b) {
    return a + b;
  }, 0) / n;

  var mean = Math.round(meanFirst * 10) / 10;

  var sortedIncreasing = numbers.sort(function(a, b) {
    return a - b;
  });

  var median = (sortedIncreasing[Math.floor(sortedIncreasing.length / 2)] + sortedIncreasing[Math.floor(sortedIncreasing.length / 2) - 1]) / 2;

  var mode = function mode(arr) {
    var numMapping = {};
    var greatestFreq = 0;
    var mode;
    arr.forEach(function findMode(number) {
      numMapping[number] = (numMapping[number] || 0) + 1;

      if (greatestFreq < numMapping[number]) {
        greatestFreq = numMapping[number];
        mode = number;
      }
    });
    return +mode;
  }

  console.log(mean + '\n' + median + '\n' + mode(numbers));
}
