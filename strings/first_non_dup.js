function first_non_dup(s) {
  var ht = {};
  var ss = [];
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if(!ht[c]) ht[c] = 0;
    ht[c] ++;
  }
  Object.keys(ht).forEach((k) => {
    if(ht[k] === 1) {
      ss.push(k);
    }
  });
  console.log(ss[0]);
}

first_non_dup('dsrewdrewa');
