function anagram(s1, s2) {
  if(s1.length !== s2.length) return false;
  var ss1 = s1.split('').sort();
  var ss2 = s2.split('').sort();

  for (var i = 0; i < ss1.length; i++) {
    if(ss1[i] !== ss2[i]) return false;
  }
  return true;
}

debugger;

anagram('word', 'wrdo');
anagram('word', 'wrrd');
