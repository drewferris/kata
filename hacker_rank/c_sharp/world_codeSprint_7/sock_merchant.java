using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());
        string[] c_temp = Console.ReadLine().Split(' ');
        int[] c = Array.ConvertAll(c_temp,Int32.Parse);
        Array.Sort(c);
        int count = 0;
        string checker = "yes";
        for (int i = 0; i < n; i++) {
            if (i + 1 < n) {
                if (c[i] == c[i + 1] && checker == "yes") {

                    count ++;
                   //System.out.println(c[i] + " c[c+1] " + c[i + 1] + " i " + i + " count " + count + " n " + n);

                    checker = "no";
                } else if(c[i] == c[i + 1] && checker == "no") {
                   //System.out.println("NOCOUNT " + c[i] + " c[c+1] " + c[i + 1] + " i " + i + " count " + count);

                    checker = "yes";
                } else if (c[i] != c[i + 1]) {
                   checker = "yes";
                }
            }

        }
        System.Console.WriteLine(count);

    }

}
