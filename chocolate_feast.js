//my solution
function main() {
  function checkWrapper(chocs, left) {
    if (((chocs + left) / m >= 1) && left !== 0) {
      var total = chocs + left;
      var chocsXchanged = Math.floor(total / m);
      var leftOver = total - (chocsXchanged * m);
      chocsEaten += chocsXchanged;
      checkWrapper(chocsXchanged, leftOver);
    } else if (chocs / m >= 1) {
      var chocsXchanged = Math.floor(chocs / m);
      leftOver = chocs - (chocsXchanged * m);
      chocsEaten += chocsXchanged;
      checkWrapper(chocsXchanged, leftOver);
    }
  }
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var c = parseInt(n_temp[1]);
    var m = parseInt(n_temp[2]);
    var chocsEaten = 0;
    var chocalatesBought = n / c;
    chocsEaten += chocalatesBought;
    checkWrapper(chocalatesBought, 0);
    console.log(chocsEaten);
  }
}

//pavels solution

function processData(input) {
  var lines = input.split('\n');
  for (var i = 1; i < lines.length; i++) {
    var amounts = lines[i].split(' ').map(function(item) {
      return parseInt(item);
    });
    console.log(chocolates(amounts[0], amounts[1], amounts[2]));
  }
}

function chocolates(amount, price, discount) {
  var result = 0;
  var bought = parseInt(amount / price);
  result += bought;

  var wrappers = bought;
  while (wrappers >= discount) {
    var freeChoco = parseInt(wrappers / discount);
    result += freeChoco;
    wrappers = wrappers - freeChoco * discount + freeChoco;
  }
  return result;
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
