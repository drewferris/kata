function processData(input) {

  function isPrime(value) {
    for (var i = 2; i < value; i++) {
      if (value % i === 0) {
        return false;
      }
    }
    return value > 1;
  }

  var split = input.split('\n').map(function(string) {
    return Number(string);
  });
  var shift = split.shift();
  for (var i = 0; i < split.length; i++) {
    var primeCountArr = [0];
    for (var j = 1; j < split[i] + 1; j++) {
      var primeCount = 0;
      for (var k = 0; k < j + 1; k++) {
        if (j % k === 0 && isPrime(k) === true) {
          primeCount++;
          primeCountArr.push(primeCount);
        }
      }
    }
    var maxPrimeCountArr = Math.max.apply(Math, primeCountArr);
    console.log(maxPrimeCountArr);
  }
}

//code timed out, here is a better solution

function processData(input) {
  input = input.split('\n');
  for (var j = 0; j < parseInt(input[0], 10); j++) {
    var max = 0;
    var n = parseInt(input[j + 1], 10);
    for (var i = 1; i <= n; i++) {
      if (n === 1) {
        max = 0;
        break;
      }
      var tmpMax = getMax(i);
      max = tmpMax > max ? tmpMax : max;
    }
    console.log(max);
  }
}

function getMax(n) {
  var factors = [];
  for (var i = 1; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) factors.push(i);
  }
  return factors.length;
}

function isPrime(n) {
  if (n === 1) return false;
  var count = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count > 2) return false;
  return true
}
