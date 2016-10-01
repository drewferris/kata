using System;

public static class Kata
{
  public static int[] CountBy(int x, int n)
  {
    int[] z = new int[n];

    for (int i = 1; i < n + 1; i++) {
      z[i - 1] = x * i;
    }

    return z;
  }
}
