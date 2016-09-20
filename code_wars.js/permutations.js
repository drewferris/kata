function permutations(chars) {
  function insertCharAt(word, charIn, i) {
    var start = word.substring(0, i);
    var end = word.substring(i, word.length);
    return start + charIn + end;
  }
  var perm = [],
    words = [],
    firstChar;
  if (chars.length === 1) {
    perm.push(chars);
    return perm;
  }
  firstChar = chars[0];
  chars = chars.substring(1, chars.length);
  words = permutations(chars);
  for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].length + 1; j++) {
      var s = insertCharAt(words[i], firstChar, j);
      if (perm.indexOf(s) === -1) perm.push(s);
    }
  }
  return perm;
}

function permutations2(string) {
  var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
  if(string.length == 1) return [string];
  arr.forEach(function(v, i, arr) {
    if(heads.indexOf(v) == -1) {
      heads.push(v);
      tmp.splice(tmp.indexOf(v), 1);
      permutations2(tmp.join('')).forEach(function(w) {out.push(v + w);});
      tmp.push(v);
    }
  });
  return out;
}
