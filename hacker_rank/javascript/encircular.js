function encircular(s, d) {
  for (var i = 0; i < s.length; i++) {
    if(s[i] === 'F' && d.g === 'yu'){
      d.y ++;
      continue;
    }
    if(s[i] === 'F' && d.g === 'yd') {
      d.y --;
      continue;
    }
    if(s[i] === 'F' && d.g === 'xl') {
      d.x --;
      continue;
    }
    if(s[i] === 'F' && d.g === 'xr') {
      d.x ++;
      continue;
    }

    if(s[i] === 'L' && d.g === 'yu') {
      d.g = 'xl';
      continue
    }
    if(s[i] === 'L' && d.g === 'yd') {
      d.g = 'xr';
      continue;
    }
    if(s[i] === 'L' && d.g === 'xl') {
      d.g = 'yd';
      continue;
    }
    if(s[i] === 'L' && d.g === 'xr') {
      d.g = 'yu';
      continue;
    }

    if(s[i] === 'R' && d.g === 'yu') {
      d.g = 'xr';
      continue;
    }
    if(s[i] === 'R' && d.g === 'yd') {
      d.g = 'xl';
      continue;
    }
    if(s[i] === 'R' && d.g === 'xl') {
      d.g = 'yu';
      continue;
    }
    if(s[i] === 'R' && d.g === 'xr') {
      d.g = 'yd';
      continue;
    }
  }
  return d;
}

function run(s) {
  var dt = {
    x: 0,
    y: 0,
    g: 'yu',
  };
  var dt2 = {
    x: 0,
    y: 0,
    g: 'yu',
  };
  var c = encircular(s, dt2);
  var ds = encircular(s, dt);

  for (var i = 0; i < 4; i++) {
    ds = encircular(s, ds);
  }
  if(c.x === ds.x && c.y === ds.y) return true;
  return false;
}

function generate(n) {
  var s = '';
  for (var i = 0; i < n; i++) {
    var nm = Math.floor(Math.random() * 3) + 1;
    if(nm === 1) s += 'F';
    if(nm === 2) s += 'L';
    if(nm === 3) s += 'R';
  }
  return s;
}
var s = generate(10);

run('FLFLFLFFFFFFF');
