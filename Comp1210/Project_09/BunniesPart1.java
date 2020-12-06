/**
* Creates bunny information.
* 
* Project 9
* @author Haden Stuart
* @version 4/3/18
*/
public class BunniesPart1 {

   /**
   * Set each of the items. 
   *
   * @param args Command line arguments
   */
   public static void main(String[] args) {
   
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
      HouseBunny hb1 = new HouseBunny("Spot", "Really Mixed", 5.8, 0.15);
      JumpingBunny jb1 = new JumpingBunny("Speedy", "English", 6.3, 25.0);
      ShowBunny sb1 = new ShowBunny("Bigun", "Flemish Giant", 14.6, 22.0);
   
      System.out.println(pb1.toString());
      System.out.println(hb1.toString());
      System.out.println(jb1.toString());
      System.out.println(sb1.toString());
   }
}