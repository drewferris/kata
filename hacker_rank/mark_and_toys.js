function processData(input) {
  var split = input.split(' ');
  var slice = split.slice(0, 2);
  var ready = split.shift()
  var readyAgain = split.shift();
  var extra = slice[1].split('\n');
  split.push(extra[1]);
  var money = Number(extra[0]);

  var priceArr = split.map(function(string) {
    return Number(string);
  }).sort(function(a, b) {
    return a - b;
  });
  var spent = 0;
  var boughtArr = [];
  var newArr = priceArr.slice(0, 13);
  var sum = newArr.reduce((a, b) => a + b, 0);
  for (var i = 0; i < priceArr.length; i++) {
    var spentCurr = spent + priceArr[i];
    if (spentCurr <= money) {
      spent += priceArr[i];
      boughtArr.push(priceArr[i]);
    }
  }
  console.log(boughtArr.length);
}
