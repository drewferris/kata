function processData(input) {
  var inp = input.split("\n");
  var n = parseInt(inp[0].split(" ")[0]);
  var k = parseInt(inp[0].split(" ")[1]);
  var a = inp[1].split(" ");
  a = a.map(Number);
  //console.log(a, n, k);
  var possibleArr = [];
  for (var i = 0; i < a.length; i++) {
    var possible = [];
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] % k + a[j] % k !== k) {
        if (possible.indexOf(a[i]) === -1) possible.push(a[i]);
        if (possible.indexOf(a[j]) === -1) possible.push(a[j]);
      }
      possibleArr.push(possible);
    }
  }
  var sorted = possibleArr.sort((a, b) => {
    return b.length - a.length;
  });

  console.log(sorted[0].length);
}

//solution found on the leaderboard

function processData(input) {
  const _ = require('lodash');
  //splits lines into array of strings, trimming white space
  input = input.trim().split('\n');
  //shifts first line off array, takes out whitespaces, splits it into array, takes the second value, turns it into number
  var K = Number(input.shift().trim().split(' ')[1]);

  //takes the remaining input item, trims whitespaces, splits contents into array and changes to numbers
  var nums = input[0].trim().split(' ').map(Number);

  //takes these integers and maps the array into the remainders of these integers when divided by k
  nums = nums.map((n) => n % K);
  //fills a new array of length K with zeros
  var memo = _.fill(new Array(K), 0);

  //loop through new array of zeros and also iterate over array of remainders. Counts the instances of each remainder by setting each level of zero array to a remainder level. for every remainder encountered adds to it's respective level. result is the counts of each remainder
  for (var i = 0; i < nums.length; i++) {
    memo[nums[i]] += 1;
  }

  //accounts for the case where the remainder was zero, there can be only one of these in the final set so set this equal to zero. i.e. if K = 6 and 12, and 18 are in original array, both have remainder of 0 but if they are both in final array, their sum is divisible by k so only one can go
  if (memo[0] > 0) memo[0] = 1;


  for (var i = 0; i < memo.length; i++) {
    //accounts for the case where the remainder times 2 equals K, there can be only one of these. i.e. if K = 6, values with a remainder of 3 have to be limited to one since two of them would add up to K. Thus this is set to 1.
    if (i === K - i && memo[i] > 0) {
      memo[i] = 1;
      // now choose the larger set of the remainders that add up to K. i.e if K = 6, there are levels of remainders of 1 and 5. This is checking to see which level is larger and setting the opposite level to 0
    } else if (memo[i] >= memo[K - i]) {
      memo[K - i] = 0;
    }
  }
  //sums up all the values in array for desired output
  console.log(_.sum(memo));
}
