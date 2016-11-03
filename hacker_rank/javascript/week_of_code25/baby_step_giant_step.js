function babyStepGiantStep(a, b, d) {
  var count = 0;
  if(d === 0) {
    console.log(0);
    return;
  } else if(d < a) {
    console.log(2);
  }
  var times = Math.floor(d/b);
  var  i = 1;
  if(d % b === a) {
    console.log(times + 1);
  } else {
    while(times * b + a * i !== d && times >= 0) {
      times--;
      i++;
    }
    console.log(times + i);
  }
}

babyStepGiantStep(3,4, 13);
