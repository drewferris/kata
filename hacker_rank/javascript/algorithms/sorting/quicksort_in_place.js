function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left)/2)];
  var i = left;
  var j = right;

  while(i <= j) {

    while(items[i] < pivot) {
      i++;
    }

    while(items[j] > pivot) {
      j--;
    }

    if(i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  console.log(items);
  return i;
}

function quickSort(items, left, right) {
  var index;

  if(items.length > 1) {
    index = partition(items, left, right);

    if(left < index - 1) {
      quickSort(items, left, index - 1);
    }

    if(index < right) {
      quickSort(items, index, right);
    }
  }

  console.log(items);
  return;
}

quickSort([1, 3, 9, 8, 2, 7, 5], 0, 6);
