function goodString(string) {
  var vowels = 'aeiou';
  var testString = '';
  var stringArr = [];
  for(var i = 0; i < string.length; i++) {
    if(vowels.indexOf(string[i]) !== -1) {
      testString = testString + string[i];
    } else {
      stringArr.push(testString);
      testString = '';
    }
  }
  stringArr.sort((a,b) => {
    return b.length - a.length;
  });
  console.log(stringArr[0].length);
}

goodString('abcaac');
