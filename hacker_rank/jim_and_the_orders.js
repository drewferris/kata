function processData(input) {
  var split = input.split('\n');
  var shift = split.shift();
  var objArr = [];
  for (var i = 0; i < split.length; i++) {
    var splitAgain = split[i].split(' ');
    var numArr = splitAgain.map(function(num) {
      return Number(num);
    });
    var obj = {};
    Object.defineProperty(obj, 'orderNumber', {
      value: numArr[0],
      writable: true,
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(obj, 'orderTime', {
      value: numArr[0] + numArr[1],
      writable: true,
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(obj, 'orderPlace', {
      value: i + 1,
      writable: true,
      enumerable: true,
      configurable: true
    });
    objArr.push(obj)
  }
  var orderArr = objArr.sort(function(a, b) {
    return a.orderTime - b.orderTime;
  });
  var finalArr = orderArr.map(function(obj) {
    return obj.orderPlace;
  });
  console.log(finalArr.join(' '));
}
