
function sumConsecutives(s) {
  var arr = [];
  function sumIt(num) {

  for (var i = 0; i < num.length; i++) {
    if (num[i] === num[i+1]) {
      console.log('num[i] equal', num[i]);
      var double = 2 * num[i];
      arr.push(double);
      var spliced = num.splice(num[i]);
      console.log('splice', spliced);
      sumIt(spliced);
    } else {
    console.log('num[i] not equal', num[i]);
      arr.push(num[i]);
      console.log('arr', arr);
    }
  }
  }
  sumIt(s);
  return arr;
}

function dirReduc(arr){
 function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === what) {
            count++;
        }
    }
    return count;
  }
  var north = countInArray(arr, 'NORTH');
  var north = countInArray(arr, 'NORTH');
  var north = countInArray(arr, 'NORTH');
  var north = countInArray(arr, 'NORTH');

}
