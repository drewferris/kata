function processData(input) {
  var split = input.split('\n');
  var testCases = Number(split.shift());
  for (var i = 0; i < testCases; i++) {
    var query = split.splice(0, 3);
    var firstLine = query[0].split(' ').map(function(string) {
      return Number(string);
    });

    var y = firstLine[0];
    var x = firstLine[1];
    var yCost = query[1].split(' ').map(function(string) {
      return Number(string);
    }).sort(function(a, b) {
      return b - a;
    });
    var xCost = query[2].split(' ').map(function(string) {
      return Number(string);
    }).sort(function(a, b) {
      return b - a;
    });

    var xSegmentCuts = 1;
    var ySegmentCuts = 1;
    var total = 0;

    var yCut = function(arr) {
      total += arr[0] * xSegmentCuts;
      ySegmentCuts++;
      arr.splice(0, 1);
    }

    var xCut = function(arr) {
      total += arr[0] * ySegmentCuts;
      xSegmentCuts++;
      arr.splice(0, 1);
    }

    var cut = function(yArr, xArr) {
      var yCutCost = yArr[0] * xSegmentCuts;
      var xCutCost = xArr[0] * ySegmentCuts;
      //console.log('yCutCost', yCutCost, 'xCutCost', xCutCost);
      //console.log('yArr[0]', yArr[0], 'xArr[0]', xArr[0], 'ySegmentCuts', ySegmentCuts, 'xSegmentCuts', xSegmentCuts, 'total', total);

      if (yArr[0] > xArr[0]) {
        yCut(yArr);
        cut(yArr, xArr);
      } else if (yArr[0] < xArr[0]) {
        xCut(xArr);
        cut(yArr, xArr);
      } else if (yArr[0] === xArr[0] && xSegmentCuts === ySegmentCuts) {
        if (yArr.length > xArr.length) {
          yCut(yArr);
          cut(yArr, xArr);
        } else if (yArr.length < xArr.length) {
          xCut(xArr);
          cut(yArr, xArr);
        }
      } else if (yArr[0] === xArr[0]) {
        if (yCutCost > xCutCost) {
          xCut(xArr);
          cut(yArr, xArr);
        } else if (yCutCost < xCutCost) {
          yCut(yArr);
          cut(yArr, xArr);
        }
      } else if (yArr.length === 0) {
        xCut(xArr);
        cut(yArr, xArr);
      } else if (xArr.length === 0) {
        yCut(yArr);
        cut(yArr, xArr);
      }
    }

    cut(xCost, yCost);
    console.log(total % (Math.pow(10, 9) + 7));
  }
}
