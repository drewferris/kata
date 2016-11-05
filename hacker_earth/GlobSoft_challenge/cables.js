function cables(cableArr, latencyArr, n, q) {
  var count = 0;
  var total = 0;
  var returnObj = {};
  var latencySort = latencyArr.sort((a,b) => {
    return a - b;
  });
  for(var i = 0; i < cableArr.length; i++) {
    if(cableArr[i][2] > latencySort[0]) {
      cableArr[i][2] = latencySort[0];
      latencySort.shift();
    }
  }
  var sorted = cableArr.sort((a,b) => {
    return a[2] - b[2];
  });
  for(var i = 0; i < sorted.length; i++) {
    if(!returnObj[sorted[i][0]]) {
      returnObj[sorted[i][0]] = {
        connectors: [],
        sum: 0
      };
    }
    if(returnObj[sorted[i][0]].connectors.indexOf(sorted[i][1]) === -1) {
      returnObj[sorted[i][0]].connectors.push(sorted[i][1]);
      returnObj[sorted[i][0]].sum += sorted[i][2];
    }
    debugger;
    if(returnObj[sorted[i][0]].connectors.length === n - 1) {
      console.log(returnObj[sorted[i][0]].sum);
      return;
    }
  }
}

cables([[ 1, 2, 1 ],
  [ 1, 3, 5 ],
  [ 1, 4, 5 ],
  [ 1, 2, 3 ],
  [ 2, 1, 4 ],
  [ 2, 3, 6 ]], [ 5, 8, 2, 2, 3 ], 4, 6);
