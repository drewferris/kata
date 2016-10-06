//my solution

function main() {
  var s = readLine();
  var n = parseInt(readLine());
  var count = 0;
  var index = 0;

  if (s === 'a') {
    console.log(n);
  } else {
    while (index < n) {
      for (var i = 0; i < s.length; i++) {
        if (index < n) {
          if (s[i] === 'a') {
            count++;
          }
          index++;
          //console.log(count, index, i);
          if (i === s.length - 1 && index < n) {
            i = -1;
          }
        }
      }
    }
    console.log(count);
  }
}
