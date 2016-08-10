function bestServer(servers){
  var countArr = [];
  var averageNetworkDelay = [];
  var priceArr = [];
  var serverArr= [];
  var maxServer = [];
  var serverOneData = servers[0].testdata;
  var serverTwoData = servers[1].testdata;
  if (servers.length > 2 && servers.length < 4) {
    var serverThreeData = servers[2].testdata;
  }
  if (servers.length > 3) {
    var serverFourData = servers[3].testdata;
  }

  var serverOne = {
    name: servers[0].name,
    value: 0,
    disconnectionRateInd: countArr[0],
    testData: servers[0].testData,
    delay: serverOneData.reduce(function(a, b, i, serverOneData) {return Math.max(a,b)}),
    price: servers[0].price
  };
  var serverTwo = {
    name: servers[1].name,
    value: 0,
    disconnectionRateInd: countArr[1],
    testData: servers[1].testData,
    delay: serverTwoData.reduce(function(a, b, i, serverTwoData) {return Math.max(a,b)}),
    price: servers[1].price
  };
  if (servers.length > 2 && servers.length < 4) {
    var serverThree = {
      name: servers[2].name,
      value: 0,
      disconnectionRateInd: countArr[2],
      testData: servers[2].testData,
      delay: serverThreeData.reduce(function(a, b, i, serverThreeData) {return Math.max(a,b)}),
      price: servers[2].price
    };
  }
  if (servers.length > 3) {
    var serverFour = {
      name: servers[3].name,
      value: 0,
      disconnectionRateInd: countArr[3],
      delay: serverFourData.reduce(function(a, b, i, serverFourData) {return Math.max(a,b)}),
      price: servers[3].price
    };
  }


  var one = 1;
  var two = 2;
  var four = 4;
  var serverExceed = [];
  for (var i = 0; i < servers.length; i++) {
    var count = servers[i].testdata.reduce(function(n, val) {
      return n + (val === -1);
    }, 0);
    var disconnectionRate = count / 24;
    countArr.push(disconnectionRate);
    var sum = servers[i].testdata.reduce((a, b) => a + b, 0);
    var sumMinus = (sum + count * -1) / (24 - count);
    averageNetworkDelay.push(sumMinus);
    for (var j = 0; j < servers[i].testdata; j++) {
      if (servers[i].testdata[j] > 300) serverExceed.push(servers[i]);
    }
    var price = servers[i].price;
    priceArr.push(price);
  }
  var minCount = countArr.reduce(function(a, b, i, countArr) {return Math.min(a,b)});
  var minAverage = averageNetworkDelay.reduce(function(a, b, i, averageNetworkDelay) {return Math.min(a,b)});
  var minPrice = priceArr.reduce(function(a, b, i, priceArr) {return Math.min(a,b)});

  if (countArr[0] === minCount) serverOne.value = serverOne.value + four;
  if (countArr[1] === minCount) serverTwo.value = serverTwo.value + four;
  if (servers.length > 2 && servers.length < 4) {
    if (countArr[2] === minCount) serverThree.value = serverThree.value + four;
  }
  if (servers.length > 3) {
    if (countArr[3] === minCount) serverFour.value = serverFour.value + four;
  }
  if (averageNetworkDelay[0] === minAverage) serverOne.value = serverOne.value + two;
  if (averageNetworkDelay[1] === minAverage) serverTwo.value = serverTwo.value + two;
  if (servers.length > 2 && servers.length < 4) {
    if (averageNetworkDelay[2] === minAverage) serverThree.value = serverThree.value + two;
  }
  if (servers.length > 3) {
    if (averageNetworkDelay[3] === minAverage) serverFour.value = serverFour.value + two;
  }
  if (servers[0].price === minPrice) serverOne.value = serverOne.value + one;
  if (servers[1].price === minPrice) serverTwo.value = serverTwo.value + one;
  if (servers.length > 2 && servers.length < 4 && servers[2].price === minPrice) serverThree.value = serverThree.value + one;
  if (servers.length > 3 && servers[2].price === minPrice) serverFour.value = serverFour.value + one;

  serverOne.disconnectionRateInd = countArr[0];
  serverTwo.disconnectionRateInd = countArr[1];
  if (servers.length > 2 && servers.length < 3) {
    serverThree.disconnectionRateInd = countArr[2];
  }
  if (servers.length > 3) {
    serverFour.disconnectionRateInd = countArr[3];
  }

  if (servers.length < 3) serverArr.push(serverOne, serverTwo);
  if (servers.length > 2 && servers.length < 4) serverArr.push(serverOne, serverTwo, serverThree);
  if (servers.length > 3 && servers.length < 5) serverArr.push(serverOne, serverTwo, serverThree, serverFour);

  for (var k = 0; k < serverArr.length; k++) {
    if (maxServer.length === 0) maxServer.push(serverArr[k]);
    if (serverArr[k].value > maxServer[0].value) {
      maxServer.splice(0, 1);
      maxServer.push(serverArr[k]);
    }
  }


  if (maxServer.length === 0) return '';

  if (maxServer[0].disconnectionRateInd <= .2 && maxServer[0].delay < 300 && maxServer[0].price <= 500) {
    return maxServer[0].name;
  } else {
    return '';
  }
}
