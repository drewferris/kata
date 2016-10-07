function main() {
  var n = parseInt(readLine());
  var c = readLine().split(' ');
  c = c.map(Number);
  var jump = 0;

  for (var i = 0; i < c.length; i++) {
    if (i + 2 > c.length) {
      break;
    } else if (i + 1 > c.length) {
      break;
    } else if (c[i + 2] === 0) {
      jump++;
      i++;
    } else if (c[i + 1] === 0) {
      jump++;
    }
  }
  console.log(jump);
}
