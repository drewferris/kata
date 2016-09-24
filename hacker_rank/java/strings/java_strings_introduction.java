import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {

        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        String B=sc.next();
        int aLength = A.length();
        int bLength = B.length();

        int combinedLength = aLength + bLength;
        System.out.println(combinedLength);
        int compare = A.compareTo(B);

        if (compare > 0) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }

        String aCap = Character.toUpperCase(A.charAt(0)) + A.substring(1);
        String bCap = Character.toUpperCase(B.charAt(0)) + B.substring(1);

        System.out.println(aCap + " " + bCap);
        /* Enter your code here. Print output to STDOUT. */

    }
}
