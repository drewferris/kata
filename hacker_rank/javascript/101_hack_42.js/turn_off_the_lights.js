var cost = 0;

var arr = [ 9881,
  2415,
  19918,
  22911,
  3510,
  1570,
  19670,
  23357,
  28978,
  29127,
  22231];

function toObjArr(array) {
  var objArr = [];
  for(var i = 0; i < array.length; i++) {
    var obj = {
      cost: array[i],
      on: true
    };
    objArr.push(obj);
  }
  return objArr;
}

var objArr = toObjArr(arr);

function turnOff(objArr, k) {
  if (k === 0) {
    var sum = objArr.reduce((a, b) => {
      return a.cost + b.cost;
    }, 0);
    cost += sum;
    return;
  }

  var filtered = objArr.filter((a) => {
    if(a.on === true) return a;
  });

  if (filtered.length === 0) {
    return;
  }

  var total = 0;
  var index = 0;

  for (var i = 0; i < filtered.length; i++) {
    var segmentSum = filtered.slice(i, i + 2 * k + 1).reduce((a, b) => {
      return a.cost + b.cost;
    }, 0);
    if (segmentSum > total) {
      total = segmentSum;
      index = i;
    }
  }
  var middle = index + k;
  cost += filtered[middle].cost;

  if(filtered.length >= index + 2 * k + 1) {
    for(var i = index; i < index + 2 * k + 1; i++) {
      filtered[i].on = false;
    }
  } else {
    for(var i = index; i < filtered.length; i++) {
      filtered[i].on = false;
    }
  }

  console.log(filtered);
  turnOff(filtered, 1);
}

console.log(turnOff(objArr, 1));

console.log(cost);
