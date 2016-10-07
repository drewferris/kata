//found on leaderboard

function processData(input) {
  var inp = input.split("\n");
  var t = parseInt(inp[0]);

  for (var i = 1; i <= t; i++) {
    var n = parseInt(inp[i].split(" ")[0]);
    var k = parseInt(inp[i].split(" ")[1]);

    //fill array of n + 1 with trues
    var lookUp = [];
    for (var j = 0; j <= n; j++) {
      lookUp.push(true);
    }
    //set p empty so can set it equal to values which meet condition
    var p = "";
    var noAns = false;

    for (var j = 1; j <= n; j++) {
      //this is for value under the halfway point
      if (j - k > 0 && lookUp[j - k]) {
        p = p + (j - k) + " ";
        lookUp[j - k] = false;
        console.log('p', p, 'lookUp', lookUp)
        //this is for value above half way point
      } else if (j + k <= n && lookUp[j + k]) {
        p = p + (j + k) + " ";
        lookUp[j + k] = false;
        console.log('p', p, 'lookUp', lookUp)
        //if no conditions are met exit loop and impossible to form absolute permutation
      } else {
        noAns = true;
        break;
      }
    }
    if (noAns)
      console.log("-1");
    else
      console.log(p);
  }
}
