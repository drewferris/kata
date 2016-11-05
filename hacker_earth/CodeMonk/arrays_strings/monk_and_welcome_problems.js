function monk(arrA,arrB) {
  var string = '';
  for(var i = 0; i < arrA.length; i++) {
    var sum = arrA[i] + arrB[i];
    string = string + sum + ' ';
  }
  console.log(string);
}

monk([ 1, 2, 3, 4, 5 ], [ 4, 5, 3, 2, 10 ]);
