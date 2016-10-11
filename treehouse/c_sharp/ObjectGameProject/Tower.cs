using System;

namespace TreehouseDefense
{
  class Tower
  {
    private const int _range = 1;
    private const int _power = 1;
    private const double _accuracy = .75;

    private static readonly Random _random = new Random();

    private readonly MapLocation _location;

    public Tower(MapLocation location)
    {
      _location = location;
    }

    public bool isSuccessfulShot()
    {
      return _random.NextDouble() < _accuracy;
    }

    public void FireOnInvaders(Invader[] invaders)
    {
      foreach(Invader invader in invaders)
      {
        if(invader.IsActive && _location.InRangeOf(invader.Location, _range))
        {
          if(isSuccessfulShot())
          {
            invader.DecreaseHealth(_power);
            Console.WriteLine("Shot at and hit invader.");
            if (invader.IsNeutralized)
            {
              Console.WriteLine("Neutralized invader");
            }
          }
          else
          {
            Console.WriteLine("Shot at and missed invader.");
          }
          break;
        }
      }
    }
  }


}
