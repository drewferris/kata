// my answer
function isUnique(s) {
  var ht = {};
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if(ht[c]) return false;
    if(!ht[c]) ht[c] = 1;
  }
  return true;
}

//boolean solution

function isUniqueChars(s) {
  if(s.length > 128) return false;

  var bs = new Array(128).fill(false);
  for(var i = 0; i < s.length; i++) {
    var c = s.charAt(i).charCodeAt(0);
    if(bs[c]) return false;
    bs[c] = true;
    debugger;
  }
  debugger;
  return true;
}

isUniqueChars('drewe');

