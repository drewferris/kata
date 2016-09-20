function pigIt(str){
  var arr = [];
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
    var sliced = words[i][0].slice(0);
    var slicedAgain = words[i].slice(1, words[i].length + 1);
    var pigLatin = slicedAgain + sliced + 'ay';
    arr.push(pigLatin);
  }
  var final = arr.join(' ');
  return final;
}


function pigIt(str){
  return str.split(' ').map(function(el){
    return el.slice(1) + el.slice(0,1) + 'ay';
  }).join(' ');
}
