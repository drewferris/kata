function iqTest(numbers) {
  var arr = numbers.split(' ');
  var final = [];
  var oddCount = 0;
  var evenCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddCount++;
    }
    if (arr[i] % 2 === 0) {
      evenCount++;
    }
  }
  if (oddCount > evenCount) {
    for (var k = 0; k < arr.length; k++) {
      if (arr[k] % 2 === 0) final.push(k + 1);
    }
  }
  if(oddCount < evenCount) {
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] % 2 !== 0) final.push(j + 1);
    }
  }
  return final[0];
}

function processData(input) {
    var split = input.split('\n');
    var phoneBook = {};
    for (var i = 1; i < Number(input[0]) + 1; i++) {
        var splitAgain = split[i].split(' ');
        phoneBook[splitAgain[0]] = splitAgain[1];
    }
    for (var j = Number(input[0]) + 1; j < split.length; j++) {
        if (phoneBook[split[j]]) {
            console.log(`${split[j]}=${phoneBook[split[j]]}`);
        } else {
            console.log('Not Found');
        }
}
