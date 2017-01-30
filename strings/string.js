var String = function() {};

String.prototype.URLify = function(s, l) {
    var t = s.trim();

    return t.replace(/\s/g, '%20');
}

String.prototype.palPerm = function(s) {
    var ht = {};
    var sc = false;
    var r = true;

    for(var i = 0; i < s.length; i++) {
        var c = s[i];
        if(c === ' ') continue;
        if(!ht[c]) ht[c] = 0;
        ht[c]++;
    }

    Object.keys(ht).forEach((k) => {
        var csc = false;
        if(ht[k] === 1 && sc) r = false;
        if(ht[k] === 1) {
            csc = true;
            sc = true;
        }
        if(ht[k] % 2 !== 0 && !csc) r = false;
        csc = false;
    });

    return r;
}

String.prototype.palPermOddCount= function(s) {
    var oc = 0;
    var ht = {};

    for(var i = 0; i < s.length; i++) {
        var c = s[i];
        if(c === ' ') continue;
        if(!ht[c]) ht[c] = 0;
        ht[c]++;
        if(ht[c] % 2 === 1) {
            oc++;
        } else {
            oc--;
        }
    }
    return oc <= 1;
}

String.prototype.oneAway = function(s1, s2) {
    if(Math.abs(s1.length - s2.length) >= 2) return false;
    var d = 0;
    var m = s1.length >= s2.length ? s1 : s2;
    if(s1.length === s2.length) {
        for(var i = 0; i < m.length; i++) {
            if(s1[i] !== s2[i]) d++;
        }
    }
    if(Math.abs(s1.length - s2.length) <= 1) {
        for(var i = 0, j = 0; i < s1.length, j < s2.length; i++, j++) {
            if(s1[i] !== s2[j]) {
                d++;
                s1.length < s2.length ? i-- : j--;
            }
        }        
    }
    return d <= 1;
}

String.prototype.oneEditAway = function(f, s) {
    if(f.length === s.length) return this.oneEditReplace(f, s);
    if(f.length + 1 === s.length) return this.oneEditInsert(f, s);
    if(f.length === s.length + 1) return this.oneEditInsert(s, f);
    return false;
}

String.prototype.oneEditReplace = function(f, s) {
    var fd = false;
    for(var i = 0; i < f.length; i++) {
        if(f[i] !== s[i]) {
            if(fd) return false;
            fd = true;
        }
    }
    return true;
}

String.prototype.oneEditInsert = function(f, s) {
    var i = 0;
    var j = 0;
    while(j < s.length && i < f.length) {
        if(f[i] !== s[j]) {
            if(i !== j) return false;
            j++;
        } else {
            i++;
            j++;
        }
    }
    return true;
}

module.exports = String;