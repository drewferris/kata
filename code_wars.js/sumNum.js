function GetSum( a,b )
{
   arr = [];
   let count = a;
   let diff = Math.abs(b-a);
   for (var i = 0; i < diff + 1; i++) {
     if (a < b) {
       let l = a + i;
       arr.push(l);
     }
     if (a > b) {
       let k = b + i;
       arr.push(k);
     }
   }
   let sum = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
   console.log('arr', arr, 'diff', diff, 'a', a, 'b', b);
   return sum;

}

function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}
