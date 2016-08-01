function toWeirdCase(string) {
  var arr = [];
  var words = string.split(' ');
  if (words.length > 1) {
    // var joinWords = words.join(' ');
    // console.log(joinWords);
    console.log(words);
    for (var i = 0; i < words.length; i++) {
      for (var j = 0; j < words[i].length; j++) {
        var smallArr = [];
        if (j % 2 === 0) {
          var l = words[i].toUpperCase();
          smallArr.push(l);
        }
        if (j % 2 != 0) {
          var m = words[i].toLowerCase();
          smallArr.push(m);
        }
      }
    }
  } else {
    for (var o = 0; o < words.length; o++) {
      for (var p = 0; p < words[o].length; p++) {
        if (p % 2 === 0) {
          var q = words[o][p].toUpperCase();
          arr.push(q);
        }
        if (p % 2 != 0) {
          var r = words[o][p].toLowerCase();
          arr.push(r);
        }
      }
    }
  }
  var joined = arr.join('');
  return joined;
}
