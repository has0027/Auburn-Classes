import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;

/**
* Tests negative values.
* 
* Project 11
* @author Haden Stuart
* @version 4/20/18
*/
public class NegativeValueExceptionTest {

/** Test the negative value exception. **/
   @Test public void negativeValueExceptionTest() {
      boolean thrown = false;
      
      NegativeValueException nv = new NegativeValueException();
      
      try {
         HouseBunny hb = new HouseBunny("Spot", "Mixed", 4.0, -0.08);
         PetBunny pb = new PetBunny("Floppy", "Holland Lop", -3.5);
         JumpingBunny jb = new JumpingBunny("Speedy", "English", 6.3, -25.0);
         ShowBunny sb = new ShowBunny("Bigun", "Flemish Giant", 14.6, -22.0); 
      }
      catch (NegativeValueException e) {
         thrown = true;
      }
      Assert.assertTrue("Expected NegativeValueException to be thrown.",
         thrown);
   }
}
