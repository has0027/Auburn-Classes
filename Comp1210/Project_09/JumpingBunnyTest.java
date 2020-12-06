import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;

/**
* Test jumping bunny information.
* 
* Project 9
* @author Haden Stuart
* @version 4/3/18
*/
public class JumpingBunnyTest {

   /** Test the getTrainingCost method. **/
   @Test public void getTrainingCostTest() {
      JumpingBunny jb1 = new JumpingBunny("Speedy", "English", 6.3, 25.0); 
   
      Assert.assertEquals(25, jb1.getTrainingCost(), 0.0001);
   }
   
   /** Test the setTrainingCost method. **/
   @Test public void setTrainingCostTest() {
      JumpingBunny jb1 = new JumpingBunny("Speedy", "English", 6.3, 25.0);
      jb1.setTrainingCost(30); 
   
      Assert.assertEquals(30, jb1.getTrainingCost(), 0.0001);
   }
   
   /** Test the estimatedMonthlyCost method. **/
   @Test public void estimatedMonthlyCostTest() {
      JumpingBunny jb1 = new JumpingBunny("Speedy", "English", 6.3, 25.0);
   
      Assert.assertEquals(40.75, jb1.estimatedMonthlyCost(), 0.00001);
   }
   
   /** Test the toString method. **/
   @Test public void toStringTest() {
      JumpingBunny jb1 = new JumpingBunny("Speedy", "English", 6.3, 25.0);
   
      Assert.assertTrue(jb1.toString().contains("for training)"));
   }
}
