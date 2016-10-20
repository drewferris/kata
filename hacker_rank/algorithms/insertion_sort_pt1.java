import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {



    public static void insertIntoSorted(int[] ar) {
        int k = ar[ar.length - 1];
        for (int i = ar.length - 2; i >= 0; i--) {
            if(ar[i] > k) {
                ar[i+1] = ar[i];
                System.out.println(Arrays.toString(ar).replace(",", "").replace("[","").replace("]",""));
                if(i == 0) {
                    ar[i+1] = ar[i];
                    ar[i] = k;
                    System.out.println(Arrays.toString(ar).replace(",", "").replace("[","").replace("]",""));
                    return;
                }
            }else {
                ar[i+1] = k;
                System.out.println(Arrays.toString(ar).replace(",", "").replace("[","").replace("]",""));
                return;
            }
        }
        // Fill up this function
    }


/* Tail starts here */
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int s = in.nextInt();
        int[] ar = new int[s];
        for(int i=0;i<s;i++){
            ar[i]=in.nextInt();
        }
        insertIntoSorted(ar);
    }


    private static void printArray(int[] ar) {
        for(int n: ar){
            System.out.print(n+" ");
        }
        System.out.println("");
    }
}
