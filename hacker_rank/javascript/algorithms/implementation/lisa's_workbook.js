function processData(input) {
  _ = require('lodash');
  var split = input.split('\n').map((a) => {
    return a.split(' ').map(Number);
  });
  var k = split[0][1];
  var currPage = 1;
  var specialProblems = 0;
  var currProblem = 0;
  var counter = 0;
  for (var i = 0; i < split[1].length; i++) {
    var problems = split[1][i];

    for (var j = 1; j < problems + 1; j++) {
      if (counter === k) {
        currPage++;
        counter = 0;
      }
      counter++;
      currProblem++;
      if (currProblem === currPage) {
        specialProblems++;
      }
    }
    currPage++;
    currProblem = 0;
    counter = 0;
  }
  console.log(specialProblems);
}
