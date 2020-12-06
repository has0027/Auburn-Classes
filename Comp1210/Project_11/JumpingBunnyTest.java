import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;

/**
* Test jumping bunny information.
* 
* Project 11
* @author Haden Stuart
* @version 4/20/18
*/
public class JumpingBunnyTest {

   /** Test the getTrainingCost method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void getTrainingCostTest() throws NegativeValueException {
      JumpingBunny jb1 = new JumpingBunny("Speedy", "English", 6.3, 25.0); 
   
      Assert.assertEquals(25, jb1.getTrainingCost(), 0.0001);
   }
   
   /** Test the setTrainingCost method. 
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void setTrainingCostTest() throws NegativeValueException {
      JumpingBunny jb1 = new JumpingBunny("Speedy", "English", 6.3, 25.0);
      jb1.setTrainingCost(30); 
   
      Assert.assertEquals(30, jb1.getTrainingCost(), 0.0001);
   }
   
   /** Test the estimatedMonthlyCost method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void estimatedMonthlyCostTest() throws NegativeValueException {
      JumpingBunny jb1 = new JumpingBunny("Speedy", "English", 6.3, 25.0);
   
      Assert.assertEquals(40.75, jb1.estimatedMonthlyCost(), 0.00001);
   }
   
   /** Test the toString method.
   *
   * @throws NegativeValueException when negative value
   */
   @Test public void toStringTest() throws NegativeValueException {
      JumpingBunny jb1 = new JumpingBunny("Speedy", "English", 6.3, 25.0);
   
      Assert.assertTrue(jb1.toString().contains("for training)"));
   }
   
   /** Test the negative value exception. **/
   @Test public void negativeValueExceptionTest() {
      boolean thrown = false;
      
      NegativeValueException nv = new NegativeValueException();
      
      try {
         JumpingBunny jb = new JumpingBunny("Speedy", "English", 6.3, -25.0);
         
      }
      catch (NegativeValueException e) {
         thrown = true;
      }
      Assert.assertTrue("Expected NegativeValueException to be thrown.",
         thrown);
   }
}
