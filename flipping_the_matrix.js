function processData(input) {
  var inputArray = [];
  var split = input.split('\n');
  for (var i = 0; i < split.length; i++) {
    var line = split[i].split(' ').map(function(string) {
      return Number(string);
    });
    inputArray.push(line);
  }
  var queries = inputArray.shift()[0];
  var n = inputArray.shift()[0];

  var max = function(array) {
    for (var j = 0; j < array.length; j++) {
      var firstN = [];
      var lastN = [];
      for (var k = 0; k < array.length; k++) {
        if (k < n) {
          firstN.push(array[j][k]);
        } else if (k > array.length - (n + 1)) {
          lastN.push(array[j][k]);
        }
        if (firstN.length === n && lastN.length === n) {
          var sumFirstN = firstN.reduce(function(a, b) {
            return a + b;
          }, 0);
          var sumLastN = lastN.reduce(function(a, b) {
            return a + b;
          }, 0);
          if (sumFirstN < sumLastN) {
            array[j].reverse();
          }
        }
      }
    }
  }
  var transpose = function(a) {
    var w = a.length ? a.length : 0,
      h = a[0] instanceof Array ? a[0].length : 0;
    if (h === 0 || w === 0) {
      return [];
    }

    /**
     * @var {Number} i Counter
     * @var {Number} j Counter
     * @var {Array} t Transposed data is stored in this array.
     */
    var i, j, t = [];

    // Loop through every item in the outer array (height)
    for (i = 0; i < h; i++) {

      // Insert a new row (array)
      t[i] = [];

      // Loop through every item per item in outer array (width)
      for (j = 0; j < w; j++) {

        // Save transposed data.
        t[i][j] = a[j][i];
      }
    }

    return t;
  };
  var transposed = transpose(inputArray);

  var maxed = max(transposed);
  var maxFinal = max(maxed);
  console.log(maxFinal);

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});

// working
function processData(input) {
  //Enter your code here
  var n_temp = input.split("\n");
  var n = n_temp[0];
  var m = 1;
  for (var asd = 0; asd < n; asd++) {
    var k = n_temp[m];
    var sub = k * 2 - 1;
    m++;
    var arr = [];
    for (var j = 0; j < k * 2; j++) {
      var temp = n_temp[m].split(" ");
      temp = temp.map(Number);
      arr[j] = temp;
      m++;
    }
    var sum = 0;
    for (var i = 0; i < k; i++) {
      for (var j = 0; j < k; j++) {
        sum += Math.max(arr[i][j], arr[i][sub - j], arr[sub - i][j], arr[sub - i][sub - j]);
      }
    }
    console.log(sum);
  }
}
