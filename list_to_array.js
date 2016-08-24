
function listToArray(list) {
  var arr = [];
  function first(val) {
    arr.push(val.value);
    if (val.next) {
      first(val.next);
    }
  }
  first(list);
  return arr;
}
