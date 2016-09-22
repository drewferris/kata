var findMissing = function (list) {
  var diff = list[1] - list[0];
  for (var i = 0; i < list.length; i++) {
    if (list[i] - list[i - 1] != diff && list.indexOf(list[i]) != 0) {
      return list [i] - diff;
    }
  }
}
