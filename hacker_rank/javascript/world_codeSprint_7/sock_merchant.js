function main() {
  var n = parseInt(readLine());
  c = readLine().split(' ');
  c = c.map(Number);
  var sorted = c.sort();
  var count = 0;
  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      sorted.splice(i, 2);
      count++;
      i--;
    }
  }
  console.log(count);

}
