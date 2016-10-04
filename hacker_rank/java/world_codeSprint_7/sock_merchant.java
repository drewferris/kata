import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int c[] = new int[n];
        for(int c_i=0; c_i < n; c_i++){
            c[c_i] = in.nextInt();
        }
        int count = 0;
        Arrays.sort(c);
        String checker = "yes";

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
       System.out.println(count);
    }
}
