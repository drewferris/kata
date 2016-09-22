import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        String month = in.next();
        String day = in.next();
        String year = in.next();
        Calendar c = Calendar.getInstance();

        c.set(Calendar.YEAR,Integer.parseInt(year));
        c.set(Calendar.MONTH,Integer.parseInt(month)-1);
        c.set(Calendar.DAY_OF_MONTH,Integer.parseInt(day));
        System.out.println(c.getDisplayName(Calendar.DAY_OF_WEEK,Calendar.LONG,Locale.getDefault()).toUpperCase());

    }
}
