function countCamel(string) {
  var count = 0;
  for(var i = 0; i < string.length; i++) {
    if(string[i] === string[i].toUpperCase()) {
      count++;
    }
  }
  console.log(count + 1);
}
