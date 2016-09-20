function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var fiveArr = [];
    var n = parseInt(readLine());
    for (var i = 0; i < n; i++) {
      fiveArr.push(5);
    }
    if (fiveArr.length % 3 !== 0 && fiveArr.length >= 5) {
      for (var j = 0; j < fiveArr.length; j++) {
        if (j >= fiveArr.length - 5) {
          fiveArr[j] = 3;
        }
      }
      var sliceFive = fiveArr.slice(0, fiveArr.indexOf(3));
      var sliceThree = fiveArr.slice(fiveArr.indexOf(3), fiveArr.length);
      if (sliceFive.length % 3 !== 0 || sliceThree.length % 5 !== 0) {
        for (var k = 0; k < fiveArr.length; k++) {
          if (k >= fiveArr.length - 10) {
            fiveArr[k] = 3;
          }
        }
      }
      if (fiveArr[0] === 3 && fiveArr.length % 5 !== 0) {
        console.log(-1);
      } else {
        console.log(fiveArr.join(''));
      }
    } else if (fiveArr.length % 3 === 0) {
      console.log(fiveArr.join(''));
    } else if (fiveArr.length < 3) {
      console.log(-1);
    } else {
      console.log(-1);
    }

  }

}
