function processData(input) {
  console.log(input);
  var chicken = input.replace(/\s/g, '@').replace(/@/g, ',').split(',');
  var sliced = chicken.shift();
  function checkPalindrome(palString) {
    if (!palString || palString < 2) return true;
    if (palString.charAt(0) === palString.charAt(palString.length - 1)) {
      return checkPalindrome(palString.substr(1, palString.length - 2));
    } else {
      return false;
    }
  }
  for (var i = 0; i < chicken.length; i++) {
    if (checkPalindrome(chicken[i])) console.log(-1);
    for (var j = 0; j < chicken[i].length; j++) {
      var first = chicken[i].substring(0, j) + chicken[i].substring(j + 1, chicken[i].length);
      if (checkPalindrome(first) && !checkPalindrome(chicken[i])) console.log(j);
    }
  }
}

//fucks up when strings have white spaces but that was because of messy input
// messed up input so had to make array
