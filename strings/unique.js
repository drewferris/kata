var Uni = function() {};

//time: O(n) space: O(1)
Uni.prototype.check = function(s) {
    var ht = {};
    for(var i = 0; i < s.length; i++) {
        var c = s[i];
        if(ht[c]) return false;
        if(!ht[c]) ht[c] = c;
    }
    return true;
}

//time: O(n) space: O(1)
Uni.prototype.checkBool = function(s) {
    if(s.length > 128) return false;

    var cs = [];
    for(var i = 0; i < s.length; i++) {
        var c = s[i];
        if(cs[c]) return false;
        cs[c] = true;
    }
    return true;
}

//also can use bit vector
//if no ds allowed sort and then check for neighboring alike chars

module.exports = Uni;