function bracketValidator(string) {
  var openParen = 0;
  var closedParen = 0;
  var openBrack = 0;
  var closedBrack = 0;
  var openCurlBrack = 0;
  var closedCurlBrack = 0;
  var split = string.split('');
  var order = [];
  for (var k = 0; k < string.length; k++) {
    if (string[k] === '(') openParen++;
    if (string[k] === ')') closedParen++;
    if (string[k] === '[') openBrack++;
    if (string[k] === ']') closedBrack++;
    if (string[k] === '{') openCurlBrack++;
    if (string[k] === '}') closedCurlBrack++;
  }
  for (var i = 0; i < split.length; i++) {
    let current = split[i];
    let first;
    for (var j = i + 1; j < split.length; j++) {
      if (current + split[j] === '{}' || current + split[j] === '[]' || current + split[j] === '()') {
        first = j;
        let subArray = split.slice(i, first + 1);
        for (var l = 0; l < subArray.length; l++) {
          if (subArray[l] === '(' && subArray.indexOf(')') === -1) order.push('X');
          if (subArray[l] === '{' && subArray.indexOf('{') === -1) order.push('X');
          if (subArray[l] === '[' && subArray.indexOf(']') === -1) order.push('X');
        }
      }
    }
  }
  if (openParen === closedParen && openBrack === closedBrack && openCurlBrack === closedCurlBrack && order.length === 0) {
    return true;
  } else {
    return false;
  }
}
