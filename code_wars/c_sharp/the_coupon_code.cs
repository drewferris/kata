using System;

public static class Kata
{
  public static bool CheckCoupon(string enteredCode, string correctCode, string currentDate, string expirationDate)
  {
    DateTime dateCurrent = Convert.ToDateTime(currentDate);
    DateTime dateExpired = Convert.ToDateTime(expirationDate);
    if (enteredCode.Equals(correctCode) && dateCurrent <= dateExpired) {
      return true;
    } else {
      return false;
    }
  }
}
