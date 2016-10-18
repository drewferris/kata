using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        string s = System.Console.In.ReadLine();
        string n = System.Console.In.ReadLine();
        string strings = System.Console.In.ReadLine();
        string[] nums = strings.Split(' ');
        for(var i = 0; i < nums.Length; i++) {
            if(nums[i] == s) {
               System.Console.WriteLine(i);
                return;
            }
        }
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
    }
}
