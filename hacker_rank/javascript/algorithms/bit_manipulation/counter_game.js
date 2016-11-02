function counterGame(int) {
  var turn = 'Louise';
  while(int !== 1) {
    if(int % (int - 1) !== 0) {
      var res = 2;
      while((res * 2) < int) {
        res *= 2;
        if(turn === 'Louise') {
          turn = 'Richard';
        } else {
          turn = 'Louise';
        }
      }
      int -= res;
    } else {
      int = int / 2;
      if(turn === 'Louise') {
        turn = 'Richard';
      } else {
        turn = 'Louise';
      }
    }
    if(turn === 'Louise') {
      turn = 'Richard';
    } else {
      turn = 'Louise';
    }
  }
  if(turn === 'Louise') {
    console.log('Richard');
  } else {
    console.log('Louise');
  }
}

function setBits(a) {
  var count = 0;
  while(a) {
    a &= (a-1);
    count++;
  }
  return count;
}

counterGame(13174607262084689114);
