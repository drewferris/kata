function isUnique(s) {
  var ht = {};
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if(ht[c]) return false;
    if(!ht[c]) ht[c] = 1;
  }
  return true;
}


