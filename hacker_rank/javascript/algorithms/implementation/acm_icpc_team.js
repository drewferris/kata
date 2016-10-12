function compare(string1, string2) {
  var count = 0;
  for (var i = 0; i < string1.length; i++) {
    if ((string1[i] === '1' && string2[i] === '1') || (string1[i] === '0' && string2[i] === '1') || (string1[i] === '1' && string2[i] === '0')) {
      count++;
    }
  }
  return count;
}


function main() {
  var n_temp = readLine().split(' ');
  var n = parseInt(n_temp[0]);
  var m = parseInt(n_temp[1]);
  var topic = [];
  var final = [0];
  for (var topic_i = 0; topic_i < n; topic_i++) {
    topic[topic_i] = readLine();
  }
  for (var j = 0; j < topic.length; j++) {
    for (var k = j + 1; k < topic.length; k++) {
      var total = compare(topic[j], topic[k]);
      if (total >= final[0]) {
        if (total !== final[0]) {
          final.shift();
        }
        final.push(total);
      }
    }
  }
  var finalMax = Math.max.apply(null, final);
  var finalSlim = final.filter((a) => {
    if (a === finalMax) {
      return a;
    }
  });
  console.log(finalSlim[0]);
  console.log(finalSlim.length);
}
