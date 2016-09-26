static boolean isAnagram(String a, String b) {

    String lower = a.toLowerCase();
    char[] chars = lower.toCharArray();
    Arrays.sort(chars);
    String sorted = new String(chars);

    String low = b.toLowerCase();
    char[] arr = low.toCharArray();
    Arrays.sort(arr);
    String again = new String(arr);

    if (sorted.equals(again)) {

        return true;
    } else {

        return false;
    }
    // Complete the function by writing your code here.

}
