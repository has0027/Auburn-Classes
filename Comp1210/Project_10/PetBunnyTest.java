import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;

/**
* Test pet bunny information.
* 
* Project 10
* @author Haden Stuart
* @version 4/13/18
*/
public class PetBunnyTest {

   /** Test the get methods. **/
   @Test public void getTest() {
   
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5); 
   
      Assert.assertEquals("Floppy", pb1.getName());
      Assert.assertEquals("Holland Lop", pb1.getBreed());
      Assert.assertEquals(3.5, pb1.getWeight(), 0.00001);
   }
   
   /** Test the set methods. **/
   @Test public void setTest() {
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
   
      pb1.setName("Flop");
      pb1.setBreed("Other");
      pb1.setWeight(5.0); 
   
      Assert.assertEquals("Flop", pb1.getName());
      Assert.assertEquals("Other", pb1.getBreed());
      Assert.assertEquals(5.0, pb1.getWeight(), 0.00001);
   }
   
   /** Test the bunnyCount method. **/
   @Test public void bunnyCountTest() { 
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
   
      pb1.resetBunnyCount();
   
      Assert.assertEquals(0, pb1.getBunnyCount(), 0.00001);
   }
   
   /** Test the toString method. **/
   @Test public void toStringTest() {
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
   
      Assert.assertTrue(pb1.toString().contains("Estimated Monthly Cost: "));
   }
   
   /** Test the equals method. **/
   @Test public void equalsTest() {
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
      PetBunny same = new PetBunny("Floppy", "Holland Lop", 3.5);
      PetBunny badName = new PetBunny("Flop", "Holland Lop", 3.5);
      PetBunny badBreed = new PetBunny("Floppy", "Holland Plop", 3.5);
      PetBunny badWeight = new PetBunny("Floppy", "Holland Lop", 5.0);
      String nothing = "test";
   
      Assert.assertTrue(pb1.equals(same));
      Assert.assertFalse(pb1.equals(nothing));
      Assert.assertFalse(pb1.equals(badName));
      Assert.assertFalse(pb1.equals(badBreed));
      Assert.assertFalse(pb1.equals(badWeight));
   }
   
   /** Test the hashcode method. **/
   @Test public void hashCodeTest() {
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
   
      Assert.assertEquals(0, pb1.hashCode(), 0.0001);
   }
   
   /** Test the estimatedMonthlyCost method. **/
   @Test public void estimatedMonthlyCostTest() {
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
   
      Assert.assertEquals(6.475, pb1.estimatedMonthlyCost(), 0.00001);
   }
   
   /** Test the compareTo method. **/
   @Test public void compareToTest1() {
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
      ShowBunny sb1 = new ShowBunny("Bigun", "Flemish Giant", 14.6, 22.0);
   
      Assert.assertTrue(pb1.compareTo(pb1) == 0);
   }
   
   /** Test the compareTo method. **/
   @Test public void compareToTest3() {
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
      ShowBunny sb1 = new ShowBunny("Bigun", "Flemish Giant", 2.0, 22.0);
   
      Assert.assertTrue(pb1.compareTo(sb1) > 0);
   }
}
