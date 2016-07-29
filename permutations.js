function permutations(chars) {
  function insertCharAt(word, charIn, i) {
    var start = word.substring(0, i);
    var end = word.substring(i, word.length);
    return start + charIn + end;
  }
  var perm = [],
    words = [],
    firstChar;
  if (chars.length === 1) { // base case
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
