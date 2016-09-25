import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String text = sc.next();
        String kString = sc.next();
        int k = Integer.parseInt(kString);

        String answer = text.substring(0, k);
        String answerTwo = text.substring(0, k);

        for (int i = 0; i < text.length() - k + 1; i++) {

            String sub = text.substring(i, i + k);
            int compare = sub.compareTo(answer);
            int compareTwo = sub.compareTo(answerTwo);

            if (compare < 0) {
                answer = sub;
            }

            if (compareTwo > 0) {
                answerTwo = sub;
            }


        }

        System.out.println(answer);
        System.out.println(answerTwo);

        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    }
}
