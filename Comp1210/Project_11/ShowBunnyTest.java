import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;

/**
* Test show bunny information.
* 
* Project 11
* @author Haden Stuart
* @version 4/20/18
*/
public class ShowBunnyTest {

   /** Test the getGroomingCost method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void getTrainingCostTest() throws NegativeValueException {
      ShowBunny sb1 = new ShowBunny("Bigun", "Flemish Giant", 14.6, 22.0);  
   
      Assert.assertEquals(22, sb1.getGroomingCost(), 0.0001);
   }
   
   /** Test the setGroomingCost method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void setGroomingCostTest() throws NegativeValueException {
      ShowBunny sb1 = new ShowBunny("Bigun", "Flemish Giant", 14.6, 22.0); 
      sb1.setGroomingCost(30); 
   
      Assert.assertEquals(30, sb1.getGroomingCost(), 0.0001);
   }
   
   /** Test the estimatedMonthlyCost method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void estimatedMonthlyCostTest() throws NegativeValueException {
      ShowBunny sb1 = new ShowBunny("Bigun", "Flemish Giant", 14.6, 22.0); 
   
      Assert.assertEquals(62.15, sb1.estimatedMonthlyCost(), 0.00001);
   }
  
   /** Test the toString method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void toStringTest() throws NegativeValueException {
      ShowBunny sb1 = new ShowBunny("Bigun", "Flemish Giant", 14.6, 22.0); 
   
      Assert.assertTrue(sb1.toString().contains("for grooming)"));
   }
   
   /** Test the negative value exception. **/
   @Test public void negativeValueExceptionTest() {
      boolean thrown = false;
      
      NegativeValueException nv = new NegativeValueException();
      
      try {
         ShowBunny sb = new ShowBunny("Bigun", "Flemish Giant", 14.6, -22.0); 
      }
      catch (NegativeValueException e) {
         thrown = true;
      }
      Assert.assertTrue("Expected NegativeValueException to be thrown.",
         thrown);
   }
}
