function processData(input) {
  var arr = [];
  var split = input.split('\n');
  var shifted = split.shift();
  for (var i = 0; i < split.length; i++) {
    if (split[i].length % 2 != 0) {
      arr.push(-1);
    } else {
      var firstHalf = split[i].substr(0, split[i].length / 2);
      var secondHalf = split[i].substr(split[i].length / 2);
      if (firstHalf === secondHalf) {
        arr.push(0);
      } else {
        var count = 0;
        for (var j = 0; j < firstHalf.length; j++) {
          if (secondHalf.indexOf(firstHalf[j]) === -1) {
            count++;
          }
        }
        arr.push(count);
      }
    }
  }
  var stringed = arr.toString();
  var replaced = stringed.replace(/,/g, '\n');
  console.log(replaced);
}


function processData(input) {
  var lines = input.split("\n");

  console.log(lines.slice(1).map(deletions).join('\n'));
}

function deletions(s) {
  if (s.length % 2 != 0) {
    return -1;
  }
  var h1 = s.substring(0, s.length / 2);
  var h2 = s.substring(s.length / 2);

  for (var i = 0; i < h1.length; i++) {
    if (h2.indexOf[h1[i]] !== -1) {
      h2 = h2.replace(h1[i], '');
    }
  }
  return h2.length;
}
