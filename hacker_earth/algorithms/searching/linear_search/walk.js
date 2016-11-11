function walk(string) {
  var count = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var lower = string.toLowerCase();
  for(var i = 0; i < lower.length; i++) {
    if(vowels.indexOf(lower[i]) !== -1) count++;
  }
  console.log(count);
}

walk('nBBZLaosnm');
