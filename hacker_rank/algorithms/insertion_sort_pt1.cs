using System;
using System.Collections.Generic;
using System.IO;
class Solution {
static void insertionSort(int[] ar) {
    int k = ar[ar.Length - 1];
    for (int i = ar.Length - 2; i >= 0; i--) {
        if(ar[i] > k) {
            ar[i + 1] = ar[i];
            Console.WriteLine(string.Join(" ", ar));
            if(i == 0) {
                ar[i] = k;
                Console.WriteLine(string.Join(" ", ar));
                return;
            }
        } else if(ar[i] < k) {
            ar[i+1] = k;
            Console.WriteLine(string.Join(" ", ar));
            return;
        }
    }

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

           insertionSort(_ar);
    }
}
