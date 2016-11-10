function tellFut(bin) {
  var oneCount = 0;
  var zeroCount = 0;
  for(var i = 0; i < bin.length; i++) {
    if(oneCount === 6 || zeroCount === 6) {
      console.log('Sorry, sorry!');
      return;
    }
    if(bin[i] === '1') {
      oneCount ++;
      zeroCount = 0;
    }
    if(bin[i] === '0') {
      zeroCount++;
      oneCount = 0;
    }
  }
  console.log('Good luck!');
}

function lilJool(s) {
  for(var i = 0; i + 6 <= s.length; i++) {
    if(s[i] === s[i+1] && s[i] === s[i+2] && s[i] === s[i+3] && s[i] === s[i+4] && s[i] === s[i+5]) {
      console.log('Sorry, sorry!');
      return;
    }
  }
  console.log('Good Luck');
  return;
}

lilJool('1111010100010100101011101100101101110011000010100010000001111100010011100101010001101111000001011000');
