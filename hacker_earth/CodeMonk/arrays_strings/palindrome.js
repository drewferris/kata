function palindrome(string) {
  if(string.length < 2) {
    if(string.length === 1) {
      console.log('YES ODD');
      return;
    } else if(string.length === 0) {
      console.log('YES EVEN');
      return;
    }
  }

  if(string[0] === string[string.length-1]) {
    palindrome(string.substring(1, string.length-1));
  } else {
    console.log('NO');
  }
}


palindrome('dddd');
