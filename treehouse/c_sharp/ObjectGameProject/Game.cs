using System;

namespace TreehouseDefense
{
    class Game
    {
        public static void Main()
        {
          Map map = new Map(8, 5);

          Point x = new MapLocation(4,2);

          Point p = x;

          map.OnMap(new MapLocation(0,0));

          Console.WriteLine(x.DistanceTo(5,5));

        }
    }
}
