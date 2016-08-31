function maskify(cc) {
  var toString = cc.toString();
  var split = toString.split('');
  for (var i = 0; i < split.length; i++) {
    if (i < split.length - 4) split[i] = '#';
  }
  var joined = split.join('');
  return joined;
}
//top solution

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
