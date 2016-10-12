function compareArrays(array1, array2) {
  for (var i = 0; i < Math.max(array1.length, array2.length); i++) {
    if (array1.indexOf(array2[i]) !== -1) return false;
    if (array2.indexOf(array1[i]) !== -1) return false;
  }
  return true;
}

function findLength(array, a, b) {
  var returnObj = {
    count: 0,
    coordinates: []
  };

  function returnMaxLength(array, a, b) {
    if (array[a] && array[b]) {
      if ((array[b] === 'G' || array[b] === 'M') && (array[a] === 'G' || array[a] === 'M')) {
        returnObj.count++;
        returnObj.coordinates.push(a, b);
        array[a]
        returnMaxLength(array, a - 1, b + 1);
      } else {
        return 0;
      }
    } else {
      return;
    }
  }
  returnMaxLength(array, a, b);
  return returnObj;
}

function processData(input) {
  var split = input.split('\n');
  var shift = split.shift().split(' ').map(Number);
  var rows = shift[0];
  var columns = shift[1];

  var rowObj = {};
  var columnObj = {};

  var finals = [];
  var smallArr = [];

  for (var i = 0; i < columns; i++) {
    columnObj[i] = [];
  }

  for (var i = 0; i < split.length; i++) {
    rowObj[i] = [];
    for (var j = 0; j < split[i].length; j++) {
      rowObj[i].push(split[i][j]);
      columnObj[j].push(split[i][j]);
    }
  }

  for (var i = 0; i < split.length; i++) {
    for (var j = 0; j < split[i].length; j++) {
      if (split[i][j] === 'G' || split[i][j] === 'M') {
        var rowLength = findLength(rowObj[i], j - 1, j + 1);
        var columnLength = findLength(columnObj[j], i - 1, i + 1);
        //columnLength.coordinates.push(i);
        //rowLength.coordinates.push(j);
        var min = Math.min(rowLength.count, columnLength.count);
        var pusher = (min * 4) + 1;
        var obj = {
          rowLevel: i,
          columnLevel: j,
          area: pusher,
          columnIndexes: columnLength.coordinates,
          rowIndexes: rowLength.coordinates,
        }


        while (obj.columnIndexes.length > min * 2) {
          obj.columnIndexes.pop();
          obj.columnIndexes.shift();
        }
        while (obj.rowIndexes.length > min * 2) {
          obj.rowIndexes.pop();
          obj.rowIndexes.shift();
        }

        if (obj.area === 5) {
          console.log(obj);
          console.log(finals);
        }
        finals.sort((a, b) => {
          return a.area - b.area;
        });
        if (finals.length === 0) {
          finals.push(obj);
        } else if (obj.rowIndexes.length === obj.columnIndexes.length && obj.area > 1) {
          if (obj.area >= finals[0].area) {
            if (compareArrays(obj.columnIndexes, finals[0].columnIndexes) && compareArrays(obj.rowIndexes, finals[0].rowIndexes)) {
              if (finals[1]) {
                if (compareArrays(obj.columnIndexes, finals[1].columnIndexes) && compareArrays(obj.rowIndexes, finals[1].rowIndexes)) {
                  finals.push(obj);
                }
              } else {
                finals.push(obj);
              }
            }
          }
        }
      }
    }
  }
  finals.sort((a, b) => {
    return b.area - a.area;
  });
  console.log(finals);
  finals.splice(2);
  console.log(finals[0].area * finals[1].area);
  console.log(finals);
  console.log(rowObj)
  console.log(columnObj)
    //Enter your code here
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
