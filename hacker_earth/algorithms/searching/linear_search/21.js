function twentyOne(string) {
  if(string.indexOf('21') !== -1) {
    console.log('The streak is broken!');
    return;
  }
  if(Number(string) % 21 === 0) {
    console.log('The streak is broken!');
    return;
  }
  console.log('The streak lives still in our heart!');
}
