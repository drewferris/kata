//my solution


function longestString(s) {
  var returnStrings = [];
  for(var i = 0; i < s.length; i++) {
    var string = s[i];
    for(var j = i + 1; j < s.length; j++) {
      if(string.indexOf(s[j]) === -1) {
        string = string + s[j];
        returnStrings.push(string);
      } else {
        break;
      }
    }
  }
  returnStrings.sort((a,b) => {
    return b.length - a.length;
  });

  return returnStrings[0].length;
}

//brute-force solution

function longestString(s) {
  var n = s.length;
  var ans = 0;
  for(var i = 0; i < n; i++) {
    for(var j = i + 1; j <= n; j++) {
      if(allUnique(s, i, j)) ans = Math.max(ans, j - i);
    }
  }
  return ans;
}

function allUnique(s, start, end) {
  var hashTable = {};
  for(var i = start; i < end; i++) {
    if(hashTable[s[i]]) return false;
    hashTable[s[i]] = 1;
  }
  return true;
}

//sliding window solution broken

function longestStringSlide(s) {
  var n = s.length;
  var hashTable = {};
  var ans = 0, i = 0, j = 0;
  while(i < n && j < n) {
    if(!hashTable[s[j]]) {
      hashTable[s[j]] = s[j];
      ans = Math.max(ans, Object.keys(hashTable).length);
      j++;
      debugger;
    } else {
      i++;
      hashTable = {};
      hashTable[s[i]] = s[i];

    }
  }
  return ans;
}


//sliding window optimal

function longStrSlide2(s) {
  var n = s.length, ans = 0;
  var hashMap = {};
  for(var j = 0, i = 0; j < n; j++) {
    if(hashMap[s[j]]) {
      i = Math.max(hashMap[s[j]], i);
    }
    ans = Math.max(ans, j - i + 1);
    hashMap[s[j]] = j + 1;
  }
  return ans;
}
longStrSlide2('xxzqi');
