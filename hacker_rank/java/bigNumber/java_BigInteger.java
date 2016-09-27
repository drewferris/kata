import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        BigInteger a, b, sum, product;
        a = new BigInteger(in.nextLine());
        b = new BigInteger(in.nextLine());
        sum = a.add(b);
        product = a.multiply(b);


        System.out.println(sum);
        System.out.println(product);


        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    }
}
