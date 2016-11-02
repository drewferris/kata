function k_combinations(set, k) {
  var i, j, combs, head, tailcombs;

  if (k == set.length) {
    return [set];
  }

  if (k == 1) {
    combs = [];
    for (i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }

  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    head = set.slice(i, i + 1);
    tailcombs = k_combinations(set.slice(i + 1), k - 1);
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

function combinations(set) {
  var k, i, combs, k_combs;
  combs = [];

  for (k = 1; k <= set.length; k++) {
    k_combs = k_combinations(set, k);
    for (i = 0; i < k_combs.length; i++) {
      combs.push(k_combs[i]);
    }
  }
  return combs.length;
}


function processData(input) {
  var lines = input.split('\n').map(Number);
  var arr = [];
  for (var i = 1; i <= lines[0]; i++) {
    arr.push(i);
  }
  var poss = combinations(arr);
  console.log(Math.abs(poss - lines[1]));
}
combinations([1, 2, 3]);

debugger;
