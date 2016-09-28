import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int arr[][] = new int[6][6];
        int sum = -1000;
        for(int i=0; i < 6; i++){
            for(int j=0; j < 6; j++){
                arr[i][j] = in.nextInt();

                //sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            }
        }
        for (int k = 0; k < 4; k++) {
            for (int l = 0; l < 4; l++) {
                                int preSum = arr[k][l] + arr[k][l + 1] + arr[k][l + 2] + arr[k + 1][l + 1] + arr[k + 2][l] + arr[k + 2][l + 1] + arr[k + 2][l + 2];
                if (preSum > sum) {
                    sum = preSum;
                }



            }

        }
        System.out.println(sum);

    }
}
