function main() {
  var n = parseInt(readLine());
  a = readLine().split(' ');
  a = a.map(Number);
  var numberOfSwaps = 0;
  for (var i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal


    for (var j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        var b = a[j + 1];
        a[j + 1] = a[j];
        a[j] = b;
        numberOfSwaps++;
      }
    }

    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
      break;
    }
  }
  console.log(`Array is sorted in ${numberOfSwaps} swaps. ${'\n'}First Element: ${a[0]}     ${'\n'}Last Element: ${a[a.length - 1]}
 `)
}
