using System;

namespace Treehouse.Averager
{
  class Program
  {

    static void Main() {

      var numberTotal = 0.0;
      var count = 0;

      while (true)
      {

        Console.Write("Enter a number or type \"done\" to finish: ");

        var entry = Console.ReadLine();

        if (entry.ToLower() == "done")
        {
          break;
        }

        try {

          var input = double.Parse(entry);
          numberTotal += input;
          count ++;
        }

        catch (FormatException) {
          Console.WriteLine("That is not a valid input");
          continue;
        }
      }

      var average = numberTotal/count;
      Console.WriteLine("Average: " + average);
    }
  }
}
