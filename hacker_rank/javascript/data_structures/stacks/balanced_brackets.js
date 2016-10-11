function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var s = readLine();
    //console.log('s', s);

    var openersToClosers = {
      '(': ')',
      '[': ']',
      '{': '}'
    };

    var openers = new Set(['(', '[', '{']);
    var closer = new Set([')', ']', '}']);

    var openersStack = [];
    var badStack = [];

    for (var i = 0; i < s.length; i++) {
      var char = s.charAt(i);

      if (openers.has(char)) {
        openersStack.push(char);
      } else if (closer.has(char)) {
        if (!openersStack.length) {
          badStack.push(1);
          console.log('NO');
          break;
        } else {
          var lastUnclosedOpener = openersStack.pop();
          if (openersToClosers[lastUnclosedOpener] !== char) {
            badStack.push(1);
            console.log('NO');
            break;
          }
        }
      }
    }
    if (openersStack.length === 0 && badStack.length === 0) {
      console.log('YES');
    }
  }

}
