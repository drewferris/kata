public class Kata
{
  public static long FindNextSquare(long num)
  {
    long root = (long) System.Math.Sqrt(num);
    if (root * root != num) {
      return -1;
    } else {
      long nextRoot = root + 1;
      return nextRoot * nextRoot;
    }
  }
}
