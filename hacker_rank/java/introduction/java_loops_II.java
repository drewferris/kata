import java.util.*;
import java.io.*;

class Solution{
    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int t=in.nextInt();
        for(int i=0;i<t;i++){
            int a = in.nextInt();
            int b = in.nextInt();
            int n = in.nextInt();
            int tempAnswer = 0;
            for (int k = 0; k < n; k++) {
                tempAnswer = 0;
                for (int j = 0; j <= k; j++) {
                    tempAnswer = tempAnswer +(int)(Math.pow(2.0, j) * b);
                }
                tempAnswer += a;
                System.out.print(tempAnswer + " ");
            }
            System.out.print("\n");
        }
        in.close();
    }
}
