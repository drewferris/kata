function MagicFunction(input) {
  console.log('input', input);
  var total = 0;
  var addInput = function(a) {
    total += a;
  };
  addInput(input);
  return total;
}
