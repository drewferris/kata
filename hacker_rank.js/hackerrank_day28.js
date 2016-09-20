function main() {
  var arr = [];
  var nameArr = [];
  var dupeNameArr = [];
  var finalArr = [];
  var dupeArr = [];
  var blankArr = [];

  var N = parseInt(readLine());
  for (var a0 = 0; a0 < N; a0++) {
    var firstName_temp = readLine().split(' ');
    var firstName = firstName_temp[0];
    var emailID = firstName_temp[1];
    var gmail = '@gmail';
    if (emailID.indexOf(gmail) !== -1) {
      var personObj = {
        name: firstName,
        email: emailID
      }
      arr.push(personObj);
    }
  }

  var sorted = arr.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  for (var i = 0; i < sorted.length; i++) {
    console.log(sorted[i].name);
  }

}
