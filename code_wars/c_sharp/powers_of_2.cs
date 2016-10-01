using System.Numerics;
using System.Linq;
using System;

public class Kata
{
  public static BigInteger[] PowersOfTwo(int n)
  {
    var bigInts = new BigInteger[n + 1];

    for(int i = 0; i <= n; ++i)
      bigInts[i] = new BigInteger(Math.Pow(2, i));

    return bigInts;
  }
}
