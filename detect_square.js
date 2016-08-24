function findNextSquare(sq) {
  if (sq % 1 != 0) return -1;
  function detectSquare(num) {
    if (Math.sqrt(num) % 1 = 0) {
      return num;
    } else {
      detectSquare(num + 1);
    }
  }
  detectSquare(sq);
}
