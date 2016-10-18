import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {

            Scanner scan = new Scanner(System.in);
            int k = scan.nextInt();
            int n = scan.nextInt();
            int[] array = new int[n];
            for (int j = 0; j < n; j++) {
                array[j] = scan.nextInt();
            }
            for(int i = 0; i < array.length; i++) {
                if(array[i] == k) {
                    System.out.println(i);
                    return;

                }
            }


        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    }
}
