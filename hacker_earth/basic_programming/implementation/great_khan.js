function greatKhan(seq) {
  var string = '';
  var val1 = 0;
  var val2 = 0;
  var val3 = 0;
  var ticker = 1;
  for(var i = 0; i < seq.length; i++) {
    if(ticker === 1) {
      val1 += seq[i];
      ticker++;
    } else if(ticker === 2) {
      val2 += seq[i];
      ticker++;
    } else if(ticker === 3) {
      val3 += seq[i];
      ticker = 1;
    }
  }
  string = val1 + ' ' + val2 + ' ' + val3;
  console.log(string);
}

greatKhan([641009859, 54748096]);
