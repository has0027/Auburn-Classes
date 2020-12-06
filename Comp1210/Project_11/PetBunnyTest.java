import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;

/**
* Test pet bunny information.
* 
* Project 11
* @author Haden Stuart
* @version 4/20/18
*/
public class PetBunnyTest {

   /** Test the get methods.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void getTest() throws NegativeValueException {
   
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);  
   
      Assert.assertEquals("Floppy", pb1.getName());
      Assert.assertEquals("Holland Lop", pb1.getBreed());
      Assert.assertEquals(3.5, pb1.getWeight(), 0.00001);
   }
   
   /** Test the set methods.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void setTest() throws NegativeValueException {
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
   
      pb1.setName("Flop");
      pb1.setBreed("Other");
      pb1.setWeight(5.0); 
   
      Assert.assertEquals("Flop", pb1.getName());
      Assert.assertEquals("Other", pb1.getBreed());
      Assert.assertEquals(5.0, pb1.getWeight(), 0.00001);
   }
   
   /** Test the bunnyCount method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void bunnyCountTest() throws NegativeValueException { 
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
   
      pb1.resetBunnyCount();
   
      Assert.assertEquals(0, pb1.getBunnyCount(), 0.00001);
   }
   
   /** Test the toString method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void toStringTest() throws NegativeValueException {
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
   
      Assert.assertTrue(pb1.toString().contains("Estimated Monthly Cost: "));
   }
   
   /** Test the equals method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void equalsTest() throws NegativeValueException {
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
   
   /** Test the hashcode method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void hashCodeTest() throws NegativeValueException {
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
   
      Assert.assertEquals(0, pb1.hashCode(), 0.0001);
   }
   
   /** Test the estimatedMonthlyCost method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void estimatedMonthlyCostTest() throws NegativeValueException {
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
   
      Assert.assertEquals(6.475, pb1.estimatedMonthlyCost(), 0.00001);
   }
   
   /** Test the compareTo method. 
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void compareToTest1() throws NegativeValueException {
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
      ShowBunny sb1 = new ShowBunny("Bigun", "Flemish Giant", 14.6, 22.0);
   
      Assert.assertTrue(pb1.compareTo(pb1) == 0);
   }
   
   /** Test the compareTo method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void compareToTest3() throws NegativeValueException {
      PetBunny pb1 = new PetBunny("Floppy", "Holland Lop", 3.5);
      ShowBunny sb1 = new ShowBunny("Bigun", "Flemish Giant", 2.0, 22.0);
   
      Assert.assertTrue(pb1.compareTo(sb1) > 0);
   }
   
   /** Test the negative value exception. **/
   @Test public void negativeValueExceptionTest() {
      boolean thrown = false;
      
      NegativeValueException nv = new NegativeValueException();
      
      try {
         PetBunny pb = new PetBunny("Floppy", "Holland Lop", -3.5);
      }
      catch (NegativeValueException e) {
         thrown = true;
      }
      Assert.assertTrue("Expected NegativeValueException to be thrown.",
         thrown);
   }
}
