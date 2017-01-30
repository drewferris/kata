var Perm = function() {};

Perm.prototype.check = function(s1, s2) {
    if(s1.length !== s2.length) return false;
    var s1s = s1.split('').sort().join('');
    var s2s = s2.split('').sort().join('');
    console.log('here');
    return s1s === s2s ? true : false;
}

Perm.prototype.checkHT = function(s1, s2) {
    if(s1.length !== s2.length) return false;

    var ht = {};

    for(var i = 0; i < s1.length; i++) {
        var c = s1[i];
        if(!ht[c]) ht[c] = 0;
        ht[c]++;
    }

    for(var i = 0; i < s2.length; i++) {
        var c = s2[i];
        if(!ht[c]) return false;
        ht[c]--;
        if(ht[c] < 0) return false;
    }

    return true;
}



module.exports = Perm;

