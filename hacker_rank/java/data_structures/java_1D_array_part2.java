import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int T = scan.nextInt();
        for (int i = 0; i < T; i++) {
            int n = scan.nextInt();
            int m = scan.nextInt();
            int[] array = new int[n];
            for (int j = 0; j < n; j++) {
                array[j] = scan.nextInt();
            }
            run(array, 0, n, m);
        }
               /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    }

    private static void run(int[] arr, int pos, int N, int M) {

        //System.out.println("POS: " + pos + " arr[pos]: " + arr[pos] + " N: " + N);
        if (pos + M >= N - 1) {
            System.out.println("YES");
        } else {
        if(pos + 1 < N && arr[pos + 1] == 0) {
            pos = pos + 1;
            run(arr, pos, N, M);
        } else if (pos + M < N && arr[pos + M] == 0) {
            //System.out.println("gothere");
            pos = pos + M;
            run(arr, pos, N, M);
        } else {
            System.out.println("NO");
        }
    }
}
}
