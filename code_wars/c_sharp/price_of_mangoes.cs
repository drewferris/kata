public class Kata
{
  public static int Mango(int quantity, int price)
  {

    int ratio = quantity / 3;

    int total = 0;
    for (int i = 1; i < quantity + 1; i++) {
      if (i % 3 != 0) {
        total += price;
      }
    }


    return total;
  }
}
