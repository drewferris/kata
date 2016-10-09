public class PezDispenser {
  public static final int MAX_PEZ = 12;
  private String mCharacterName;
  private int mPexCount;

  public PezDispenser(String characterName) {
   mCharacterName = characterName;
   mPezCount = 0;
  }

  public void load() {
    mPezCount = MAX_PEZ;
  }

  public String getCharacterName() {
    return mCharacterName;
  }
}
