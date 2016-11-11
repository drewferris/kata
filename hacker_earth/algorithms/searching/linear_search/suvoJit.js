function suvoJit(string) {
  var lower = string.toLowerCase();
  var suvojitCount = 0;
  var suvoCount = 0;
  while(lower.indexOf('suvojit') !== -1) {
    suvojitCount++;
    lower = lower.substring(0, lower.indexOf('suvojit')) + lower.substring(lower.indexOf('suvojit') + 7);
  }
  while(lower.indexOf('suvo') !== -1) {
    suvoCount++;
    lower = lower.substring(lower.indexOf('suvo') + 4);
  }

  console.log(`SUVO = ${suvoCount}, SUVOJIT = ${suvojitCount}`);
}

suvoJit('$$$$$SUVOSUVOJIT$$$$$');
