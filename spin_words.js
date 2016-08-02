function spinWords(string){
  var arr = string.split(' ');
  var final = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 4) {
      var split = arr[i].split('').reverse().join('');
      final.push(split);
    } else {
      final.push(arr[i]);
    }
  }
  var submit = final.join(' ').toString();
  return submit;
}
