function findRotation(array) {
  var mapped = array.filter((a) => {
    if (a[0] === 'a') return a;
  });
  return array.indexOf(mapped[0]);
}
