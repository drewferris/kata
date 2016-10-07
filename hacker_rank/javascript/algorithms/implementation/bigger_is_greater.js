function nextPermutation(array) {
  // console.log(array);
  // Find non-increasing suffix, results in no answer if already non-increasing. Sets i equal to the index of the start of the suffix
  var i = array.length - 1;
  while (i > 0 && array[i - 1] >= array[i])
    i--;
  if (i <= 0)
    return "no answer";
  // console.log('array[i] start of suffix', array[i]);

  // Find successor to pivot, sets j to the least element in suffix greater than pivot i.e. successor
  var j = array.length - 1;
  while (array[j] <= array[i - 1])
    j--;
  // console.log('array[j] succesor to pivot', array[j], 'j', j);
  //set pivot equal to variable temp
  var temp = array[i - 1];
  // console.log('temp', temp);
  // console.log('before', array);
  //set the succesor equal to pivot
  array[i - 1] = array[j];
  // console.log('after', array);
  // set the pivot equal to succesor
  array[j] = temp;
  // console.log('after again', array);

  // Reverse suffix
  j = array.length - 1;
  //i is still equal to index of start of suffix
  while (i < j) {
    //set variable for start of suffix
    temp = array[i];
    //switch start of suffix with end of suffix
    array[i] = array[j];
    array[j] = temp;
    i++;
    j--;
  }
  // console.log(array);
  return array.join('');
}

var arr = [0, 1, 2, 5, 3, 3, 0];

nextPermutation(arr);
