function getDupes(s) {
  var ht = {};
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if(!ht[c]) ht[c] = 0;
    ht[c] ++;
  }

  Object.keys(ht).forEach((k) => {
    if(ht[k] > 1) console.log(k);
  });
}

getDupes('programming');
