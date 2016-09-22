function countOddPentaFib(n) {
  var fib = function(numMax){
    for(var fibArray = [0,1], i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
        x=i+j;
        fibArray.push(x);
    }
    return fibArray;
  }
  var arr = fib(n);
  var pre = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1 && pre.indexOf(arr[i]) === -1) {
    pre.push(arr[i]);
    }
  }
  return pre;
}
