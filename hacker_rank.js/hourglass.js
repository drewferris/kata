function main() {
  var sumArr = [];
  var arr = [];
  for (arr_i = 0; arr_i < 6; arr_i++) {
    arr[arr_i] = readLine().split(' ');
    arr[arr_i] = arr[arr_i].map(Number);
  }

  for (var j = 0; j < 4; j++) {
    for (var k = 0; k < 4; k++) {
      var sum = arr[j][k] + arr[j][k + 1] + arr[j][k + 2] + arr[j + 1][k + 1] + arr[j + 2][k] + arr[j + 2][k + 1] + arr[j + 2][k + 2];
      sumArr.push(sum);
    }
  }
  var max = Math.max.apply(null, sumArr);
  console.log(max);
}
