//my solution

function main() {
  var s = readLine();
  var n = parseInt(readLine());
  var count = 0;
  var index = 0;

  if (s === 'a') {
    console.log(n);
  } else {
    while (index < n) {
      for (var i = 0; i < s.length; i++) {
        if (index < n) {
          if (s[i] === 'a') {
            count++;
          }
          index++;
          //console.log(count, index, i);
          if (i === s.length - 1 && index < n) {
            i = -1;
          }
        }
      }
    }
    console.log(count);
  }
}
//solution found on leaderboard

function main() {
  var s = readLine().split("");
  var n = parseInt(readLine());

  //variable equal to string length
  var stringSize = s.length;
  //variable equal to the amount of times 'a' occurs in s

  var a = s.filter((a) => a == 'a').length;

  //floored value of amount of times stringSize goes into n
  var repeat = Math.floor(n/stringSize);

  //number of indices left over when string can no longer completely go into remaining indices
  var left = n-(repeat*stringSize);

  //return the amount of times 'a' occurs in each string times the amount of times the string occurs before the index plus how many times 'a' occurs in the last string before it exceeds the index value
  console.log((repeat*a) + s.filter((a,i) => a == 'a' && i < left).length);


}
