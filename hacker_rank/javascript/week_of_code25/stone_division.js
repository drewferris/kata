function stoneDivision(n, set) {
  var firstArr = [];
  var secondArr = [];
  for(var i = 0; i < set.length; i++) {
    if(n % set[i] !== 0) {
      break;
    }
    var pilesSize = n/set[i];
    var piles = set[i];
    if(set.indexOf(pilesSize) !== -1) {
      if(pilesSize % 2 !== 0) {
        secondArr.push('s');
      } else {
        firstArr.push('f');
      }
    }
  }
  if(firstArr.length !== 0) {
    console.log('First');
  } else {
    console.log('Second');
  }
}


stoneDivision(15, [5,2,3]);
