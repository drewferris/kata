//iteration

function reverse(s) {
  var cs = s.split('').reverse().join('');
  console.log(cs);
}


//recursion
function revRec(s) {
  if(s.length < 2) return s;
  return revRec(s.substring(1)) + s.charAt(0);
}


debugger;
