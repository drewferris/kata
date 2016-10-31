var testArr = [1,2,2,3,3];

function lonelyInt(array) {
  var obj = {};
  for(var i = 0; i < array.length; i++) {
    if(!obj[array[i]]) {
      obj[array[i]] = 0;
    }
    obj[array[i]]++;
  }
  Object.keys(obj).forEach((key) => {
    if(obj[key] === 1) {
      console.log(key);
      return;
    }
  });
}

lonelyInt(testArr);
