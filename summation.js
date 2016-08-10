var summation = function (num) {
  var arr = [];
  for (var i = 1; i < num + 1; i++) {
    arr.push(i);
  }
  var summed = arr.reduce((prev, curr) => prev + curr);
  return summed;
}

const summation = n => n * (n + 1) / 2;

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
}

function bestServer(servers){
  console.log(servers);
  var countArr = [];
  for (var i = 0; i < servers.length; i++) {
    var count = servers[i].testdata.reduce(function(n, val) {
    return n + (val === -1);
    }, 0);
    countArr.push(count);
    var sum = servers[i].testdata.reduce((a, b) => a + b, 0);
    console.log(sum);

    }
  }
