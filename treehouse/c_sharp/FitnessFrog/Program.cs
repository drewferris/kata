using System;

namespace Treehouse.FitnessFrog
{
  class Program
  {

    static void Main()
    {
      var runningTotal = 0.0;

      while (true)
      {

        Console.Write("Enter how many minutes you exercised or type \"quit\" to exit: ");
        var entry = Console.ReadLine();

        if (entry.ToLower() == "quit")
        {
          break;
        }

          try {
              var minutes = double.Parse(entry);

              if (minutes <= 0) {
                Console.WriteLine(minutes + " is an invaled number");
                continue;
              } else if (minutes <= 10) {
                Console.WriteLine("Better than nothing, am I right?");
              } else if(minutes <= 30) {
                Console.WriteLine("Way to go hot stuff!");
              } else if (minutes <= 60) {
                Console.WriteLine("You must be a ninja warrior in trainint!");
              } else {
                Console.WriteLine("Okay, now you're just showing off.");
              }
            runningTotal += minutes;
            }
          catch (FormatException) {
            Console.WriteLine("That is not a valid input.");
            continue;
          }
          Console.WriteLine("You've exercised " + runningTotal + " minutes.");

      }
    }

  }
}
