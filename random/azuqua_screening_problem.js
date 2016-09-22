

var current =  [ "xxx", "aaa", "yyy", "hij" ];
var history =  [ [ "aaa", "bbb" ], [ "ccc", "ddd", "eee", "fff" ], [ "ggg", "hij", "abc" ]  ];

function changeStrings(current, history) {
  for (var i = 0; i < current.length; i++) {
    for (var j = 0; j < history.length; j++) {
      if (history[j].indexOf(current[i]) !== -1) current.splice(i,1);
    }
  }
  history.shift();
  history.push(current);

  var returnObj = {
    newStrings: current,
    newHistory: history
  };

  return returnObj;
}

console.log(changeStrings(current, history));
