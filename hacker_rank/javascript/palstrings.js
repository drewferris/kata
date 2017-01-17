function preProcess(s) {
  var n = s.length;
  if (n == 0) return '^$';
  var ret = '^';
  for (var i = 0; i < n; i++) {
    ret += '#' + s.substring(i, i + 1);
  }
  ret += '#$';
  return ret;
}

function longestPalindrom(s) {
  var t = preProcess(s);
  var n = t.length;
  var p = new Array(n);
  var c = 0,
    r = 0;
  for (var i = 1; i < n - 1; i++) {
    var i_mirror = 2 * c - i;

    p[i] = (r > i) ? Math.min(r - i, p[i_mirror]) : 0;

    while (t[i + 1 + p[i]] === t[i - 1 - p[i]]) p[i]++;

    if (i + p[i] > r) {
      c = i;
      r = i + p[i];
    }
  }

  var maxLen = 0;
  var centerIndex = 0;
  var ps = [];
  for (var i = 1; i < n - 1; i++) {
    maxLen = p[i];
    centerIndex = i;
    var ss = s.substring((centerIndex - 1 - maxLen) / 2, ((centerIndex - 1 - maxLen) / 2) + maxLen);
    if(ss !== '' && ps.indexOf(ss) === -1) ps.push(ss);
  }
  return ps;
}


var l = longestPalindrom('geek');
debugger;
