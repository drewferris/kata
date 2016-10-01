public class Kata {
  public static string declareWinner(Fighter fighter1, Fighter fighter2, string firstAttacker) {

    while(fighter1.Health > 0 && fighter2.Health > 0) {
      if (fighter1.Name == firstAttacker) {
        fighter2.Health -= fighter1.DamagePerAttack;
        declareWinner(fighter1, fighter2, fighter2.Name);
      } else if (fighter2.Name == firstAttacker) {
        fighter1.Health -= fighter2.DamagePerAttack;
        declareWinner(fighter1, fighter2, fighter1.Name);
      }
    }
    if (fighter1.Health > fighter2.Health) {
      return fighter1.Name;
    } else {
      return fighter2.Name;
    }
  }
}
