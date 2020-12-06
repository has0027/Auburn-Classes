import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;

/**
* Test house bunny information.
* 
* Project 9
* @author Haden Stuart
* @version 4/3/18
*/
public class HouseBunnyTest {

   /** Test the getWearAndTear method. **/
   @Test public void getWearAndTearTest() {
      HouseBunny hb1 = new HouseBunny("Spot", "Really Mixed", 5.8, 0.15);
   
      Assert.assertEquals(0.15, hb1.getWearAndTear(), 0.00001);
   }
   
  /** Test the setWearAndTear method. **/
   @Test public void setWearAndTearTest() {
      HouseBunny hb1 = new HouseBunny("Spot", "Really Mixed", 5.8, 0.15);
      hb1.setWearAndTear(0.20);
   
      Assert.assertEquals(0.20, hb1.getWearAndTear(), 0.00001);
   } 
   
   /** Test the estimatedMonthlyCost method. **/
   @Test public void estimatedMonthlyCostTest() {
      HouseBunny hb1 = new HouseBunny("Spot", "Really Mixed", 5.8, 0.15);
   
      Assert.assertEquals(15.0075, hb1.estimatedMonthlyCost(), 0.00001);
   }
   
   /** Test the toString method. **/
   @Test public void toStringTest() {
      HouseBunny hb1 = new HouseBunny("Spot", "Really Mixed", 5.8, 0.15);
   
      Assert.assertTrue(hb1.toString().contains("for wear and tear)"));
   }
}
