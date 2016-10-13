function main() {
  var h = parseInt(readLine());
  var m = parseInt(readLine());
  var numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine'
  };
  if (m > 30 && m !== 45) {
    console.log(numbers[60 - m] + ' minutes to ' + numbers[h + 1]);
  } else if (m === 0) {
    console.log(numbers[h] + " o' clock");
  } else if (m === 1) {
    console.log(numbers[m] + ' minute past ' + numbers[h]);
  } else if (m < 30 && m !== 15) {
    console.log(numbers[m] + ' minutes past ' + numbers[h]);
  } else if (m === 30) {
    console.log('half past ' + numbers[h]);
  } else if (m === 45) {
    console.log('quarter to ' + numbers[h + 1]);
  } else if (m === 15) {
    console.log('quarter past ' + numbers[h]);
  }
}
