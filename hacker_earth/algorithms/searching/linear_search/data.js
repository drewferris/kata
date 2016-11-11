function date(arr) {
  var nineteen = 0;
  var twentyOne = 0;
  for(var i = 0 ; i < arr.length; i++) {
    if(arr[i].indexOf('19') !== -1) {
      nineteen++;
    }
    if(arr[i].indexOf('21') !== -1) {
      twentyOne++;
    }
  }

  if(nineteen === twentyOne) {
    console.log('DATE');
  } else {
    console.log('NO DATE');
  }
}
