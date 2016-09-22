// complete the function
function solution(string) {
  var final;
  var camel = function(string) {
    var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = 0; i < string.length; i++) {
      if (upperCase.indexOf(string[i]) !== -1) {
        if (string[i - 1] !== ' ') {
          var newString = string.substring(0, i) + ' ' + string.substring(i, string.length);
          final = newString;
          camel(newString);
        }
      }
    }
  };
  camel(string);
  return final;
}
