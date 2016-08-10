function bestServer(servers) {
  var final = [];
  var finalSecond = [];
  var finalThird = [];
  for (var i = 0; i < servers.length; i++) {
    var count = servers[i].testdata.reduce(function(n, val) {
      return n + (val === -1);
    }, 0);
    var disconnectionRate = count / 24;
    Object.defineProperty(servers[i], 'indDR', {
      value: disconnectionRate
    });
    var sum = servers[i].testdata.reduce((a, b) => a + b, 0);
    var sumMinus = (sum - count) / (24 - count);
    Object.defineProperty(servers[i], 'avgNetDel', {
      value: sumMinus
    });
    var servDelay = servers[i].testdata.reduce(function(a, b, i, testdata) {return Math.max(a,b)});
    Object.defineProperty(servers[i], 'delay', {
      value: servDelay
    });
    if (servers[i].indDR > .2 || servers[i].delay > 300 || servers[i].price > 500) {
      servers.splice(i, 1);
    }
  }

  var minIndDR = Math.min.apply(Math,servers.map(function(server){return server.indDR;}));

  for (var j = 0; j < servers.length; j++) {
    console.log(servers[j].indDR, minIndDR, servers[j].name);
    if (servers[j].indDR === minIndDR && servers[j].indDR <= .2 && servers[j].delay <= 300 && servers[j].price <= 500) {
      final.push(servers[j]);
    }
  }

  console.log('servers', servers);
  console.log('final', final);

  if (final.length > 1) {
    var minAvgNetDel = Math.min.apply(Math,final.map(function(server){return server.avgNetDel;}));
    for (var k = 0; k < final.length; k++) {
      if (final[k].avgNetDel === minAvgNetDel && servers[k].indDR <= .2 && servers[k].delay <= 300 && servers[k].price <= 500) {
        finalSecond.push(final[k]);
      }
    }
  } else if(final.length === 0){
    return '';
  } else {
    return final[0].name;
  }

  if (finalSecond.length > 1) {
    var minPrice = Math.min.apply(Math,finalSecond.map(function(server){return server.price;}));
    for (var l = 0; l < finalSecond.length; l++) {
      if (finalSecond[l].price === minPrice && servers[l].indDR <= .2 && servers[l].delay <= 300 && servers[l].price <= 500) {
        finalThird.push(finalSecond[l]);
      }
    }
  } else {
    if (finalSecond.length != 0) return finalSecond[0].name;
  }

  if (finalThird.length != 0) return finalThird[0].name;
}
