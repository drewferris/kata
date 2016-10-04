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
      console.log('Not found');
    }
  }
}
//solution that passes all test cases

function processData(input) {
  const ARR = input.split('\n');
  const N = ARR.shift();

  const CHECK_NAMES = ARR.splice(N);
  var phoneBook = {};

  ARR.map(data => {
    const DATA = data.split(' ');
    phoneBook[DATA[0]] = DATA[1];
  });

  CHECK_NAMES.map( data => {
    if(phoneBook[data]) {
      console.log(`${data}=${phoneBook[data]}`);
    } else {
      console.log('Not found');
    }
  });
}
