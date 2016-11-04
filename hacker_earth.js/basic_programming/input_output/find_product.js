function findProduct(array) {
  var answer = 1;
  for(var i = 0; i < array.length; i++) {
    answer = (answer * array[i]) % (Math.pow(10, 9) + 7);
  }
  console.log(answer);
}

findProduct([1,2,3,4,5]);
