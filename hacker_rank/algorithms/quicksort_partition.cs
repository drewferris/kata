using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {
static void partition(int[] ar) {
    List<int> left = new List<int>();
    List<int> right = new List<int>();
    int k = ar[0];
    for(int  i = 0; i < ar.Length; i++) {
        if(ar[i] < k) {
            left.Add(ar[i]);
        } else if(ar[i] > k) {
            right.Add(ar[i]);
        }
    }
    left.Add(k);
    var result = left.Concat(right);
    string printResult = string.Join(" ", result.ToArray());
	Console.WriteLine(printResult);

}

/* Tail starts here */
    static void Main(String[] args) {

           int _ar_size;
           _ar_size = Convert.ToInt32(Console.ReadLine());
           int [] _ar =new int [_ar_size];
           String elements = Console.ReadLine();
           String[] split_elements = elements.Split(' ');
           for(int _ar_i=0; _ar_i < _ar_size; _ar_i++) {
                  _ar[_ar_i] = Convert.ToInt32(split_elements[_ar_i]);
           }

           partition(_ar);
    }
}
