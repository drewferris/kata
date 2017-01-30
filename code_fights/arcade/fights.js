'use strict';

var Fight = function() {};

Fight.prototype.equidistantTriples = function(coordinates) {
    var t = 0;
        for(var i = 0; i < coordinates.length; i++) {
            for(var j = i + 1; j < coordinates.length; j++) {
               var jc = coordinates[j];
                var ic = coordinates[i];
                var d = jc - ic;
                var jp = jc + d;
                if(coordinates.indexOf(jp) !== -1) t++;
            }
        }
    return t;
}

Fight.prototype.reverse = function(input) {

   var reversed = 0;
   while (input) {
     reversed = reversed * 10 + input % 10;
     input = Math.floor(input / 10);
   }
   return reversed;

}


module.exports = Fight;