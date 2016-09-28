import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        ArrayList<ArrayList<Integer>> outer = new ArrayList<ArrayList<Integer>>(n);
        for (int i = 0; i < n; i++) {
            int d = scan.nextInt();
            ArrayList<Integer> list = new ArrayList<Integer>(d);
            for (int j = 0; j < d; j++) {
                list.add(scan.nextInt());
            }
            outer.add(list);
        }
        int q = scan.nextInt();
        for (int i = 0; i < q; i++) {
            int y = scan.nextInt() - 1;
            int x = scan.nextInt() - 1;
            if (outer.get(y).size() <= x) {
                System.out.println("ERROR!");

            } else {
                int number = outer.get(y).get(x);
                System.out.println(number);
            }
        }
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    }
}
