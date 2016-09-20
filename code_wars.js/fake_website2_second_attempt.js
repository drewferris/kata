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
  }

  for (var m = 0; m < servers.length; m++) {
    if (servers[m].indDR > .2 || servers[m].delay > 300 || servers[m].price > 500) {
      servers.splice(m, 1);
    }
  }

  var minIndDR = Math.min.apply(Math,servers.map(function(server){return server.indDR;}));

  for (var j = 0; j < servers.length; j++) {
    if (servers[j].indDR === minIndDR && servers[j].indDR <= .2 && servers[j].delay <= 300 && servers[j].price <= 500) {
      final.push(servers[j]);
    }
  }

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

function bestServer(se) {
  vals=[];
  for (i=0;i<se.length;i++) {
     o={}; o['name']=se[i].name; o['del']=0; o['dis']=0; f=0;
     for (j=0;j<24;j++) if ((d=se[i].testdata[j])>=0) {if (d>300) {f=1; break}; o['del']+=d} else o['dis']++;
     if (f==0&&se[i].price<=500) {o['del']/=24-o['dis']; if ((o['dis']=Math.round(o['dis']/0.0024)/100)<=20) {o['price']=se[i].price; o['index']=i; vals.push(o)}}
  }
  vals.sort(function (a,b) {
     if (a.dis<b.dis) return -1; else if (a.dis>b.dis) return 1
     if (a.del<b.del) return -1; else if (a.del>b.del) return 1
     if (a.price<b.price) return -1; else if (a.price>b.price) return 1
     return a.index<b.index?-1:1
  })
  return vals.length==0?"":vals[0].name
}
