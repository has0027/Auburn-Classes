import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;

/**
* Test house bunny information.
* 
* Project 11
* @author Haden Stuart
* @version 4/20/18
*/
public class HouseBunnyTest {

   /** 
   * Test the getWearAndTear method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void getWearAndTearTest() throws NegativeValueException {
      HouseBunny hb1 = new HouseBunny("Spot", "Really Mixed", 5.8, 0.15);
   
      Assert.assertEquals(0.15, hb1.getWearAndTear(), 0.00001);
   }
   
   /** Test the setWearAndTear method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void setWearAndTearTest() throws NegativeValueException {
      HouseBunny hb1 = new HouseBunny("Spot", "Really Mixed", 5.8, 0.15);
      hb1.setWearAndTear(0.20);
   
      Assert.assertEquals(0.20, hb1.getWearAndTear(), 0.00001);
   } 
   
   /** Test the estimatedMonthlyCost method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void estimatedMonthlyCostTest() throws NegativeValueException {
      HouseBunny hb1 = new HouseBunny("Spot", "Really Mixed", 5.8, 0.15);
   
      Assert.assertEquals(15.0075, hb1.estimatedMonthlyCost(), 0.00001);
   }
   
   /** Test the toString method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void toStringTest() throws NegativeValueException {
      HouseBunny hb1 = new HouseBunny("Spot", "Really Mixed", 5.8, 0.15);
   
      Assert.assertTrue(hb1.toString().contains("for wear and tear)"));
   }
}
