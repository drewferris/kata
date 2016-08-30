function processData(input) {
  var split = input.split('\n');

  var firstLine = split[0].split(' ').map(function(string) {
    return Number(string);
  });
  var secondLine = split[1].split(' ').map(function(string) {
    return Number(string);
  });

  var count = 0;

  var compareArrays = function(array1, array2) {
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] < array2[i]) {
        if ((array2[i] - array1[i]) < (array1[i] + (9 - array2[i]))) {
          array1[i] = array1[i] + 1;
          count++;
          compareArrays(array1, array2);
        } else if ((array2[i] - array1[i]) > (array1[i] + (9 - array2[i]))) {
          array1[i] = array1[i] - 1;
          count++;
          if (array1[i] < 0) {
            array1[i] = 9;
          }
          compareArrays(array1, array2);
        }
      } else if (array1[i] > array2[i]) {
        if ((array1[i] - array2[i]) < (array2[i] + (9 - array1[i]))) {
          array1[i] = array1[i] - 1;
          count++;
          compareArrays(array1, array2);
        } else if ((array1[i] - array2[i]) > (array2[i] + (9 - array1[i]))) {
          array1[i] = array1[i] + 1;
          count++;
          if (array1[i] > 9) {
            array1[i] = 0;
          }
          compareArrays(array1, array2);
        }
      }
    }
  };
  compareArrays(firstLine, secondLine);
  console.log(count);
}
