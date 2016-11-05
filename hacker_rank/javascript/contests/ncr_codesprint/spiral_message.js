var string = '';
function getWords(message) {
  var firstColumnArr = [];
  var lastColumnArr = [];
  var newArr = [];
  message.forEach((line) => {
    firstColumnArr.push(line[0]);
  });
  firstColumnArr.reverse();
  for(var i = 0; i < firstColumnArr.length; i++) {
    string = string + firstColumnArr[i];
  }
  var topRow = message[0].substring(1);
  string = string + topRow;
  message.forEach((line) => {
    lastColumnArr.push(line[line.length - 1]);
  });
  lastColumnArr.shift();
  for(var i = 0; i < lastColumnArr.length; i++) {
    string = string + lastColumnArr[i];
  }
  var bottomRow = message[message.length - 1].substring(1, message[message.length - 1].length - 1).split('').reverse().join('');
  string = string + bottomRow;
  message.shift();
  message.pop();
  message.forEach((line) => {
    var blank = line.substring(1, line.length - 1);
    newArr.push(blank);
  });
  if(newArr.length !== 0) {
    getWords(newArr);
  } else {
    return;
  }
}

function processString(string) {
  var count = 0;
  var consecCount = 0;
  for(var i = 0; i < string.length; i++) {
    if(string[i] === '#') count++;
    if(string[i-1] && string[i-1] === '#' && string[i] === '#') consecCount++;
  }
  if(string[0] === '#') count--;
  if(string[string.length - 1] === '#') count--;
  console.log(count - consecCount + 1);
}

getWords([ 'a##ar', 'a#aa#', 'a#aa#', 'xxwsr' ]);

processString(string);

debugger;
