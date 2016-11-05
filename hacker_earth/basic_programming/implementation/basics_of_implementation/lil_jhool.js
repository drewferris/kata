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

tellFut('1111010100010100101011101100101101110011000010100010000001111100010011100101010001101111000001011000');
