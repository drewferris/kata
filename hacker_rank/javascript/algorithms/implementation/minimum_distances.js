function main() {
  var n = parseInt(readLine());
  A = readLine().split(' ');
  A = A.map(Number);
  var distances = [];
  for (var i = 0; i < A.length; i++) {
    for (var j = i + 1; j < A.length; j++) {
      if (A[i] === A[j]) {
        distances.push(Math.abs(i - j));
      }
    }
  }
  if (distances.length === 0) {
    console.log(-1);
  } else {
    console.log(Math.min.apply(null, distances));
  }

}
