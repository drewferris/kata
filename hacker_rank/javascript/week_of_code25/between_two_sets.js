


function checkFactors(arr, num) {
  for(var i = 0; i < arr.length; i++) {
    if(num % arr[i] !== 0) {
      return false;
    }
  }
  return true;
}



function checkFactorsReverse(num, arr) {
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % num !== 0) {
      return false;
    }
  }
  return true;
}


function between(setA, setB) {
  var count = 0;
  for(var i = setA[setA.length - 1]; i <= setB[0]; i++) {
    if(checkFactors(setA, i) && checkFactorsReverse(i, setB)) {
      count++;
    }
  }
  console.log(count);
}
between([2,4], [16, 32, 96]);

debugger;
