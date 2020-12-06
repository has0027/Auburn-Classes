import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;

/**
* Test show bunny information.
* 
* Project 9
* @author Haden Stuart
* @version 4/3/18
*/
public class ShowBunnyTest {

/** Test the getGroomingCost method. **/
   @Test public void getTrainingCostTest() {
      ShowBunny sb1 = new ShowBunny("Bigun", "Flemish Giant", 14.6, 22.0);  
   
      Assert.assertEquals(22, sb1.getGroomingCost(), 0.0001);
   }
   
   /** Test the setGroomingCost method. **/
   @Test public void setGroomingCostTest() {
      ShowBunny sb1 = new ShowBunny("Bigun", "Flemish Giant", 14.6, 22.0); 
      sb1.setGroomingCost(30); 
   
      Assert.assertEquals(30, sb1.getGroomingCost(), 0.0001);
   }
   
   /** Test the estimatedMonthlyCost method. **/
   @Test public void estimatedMonthlyCostTest() {
      ShowBunny sb1 = new ShowBunny("Bigun", "Flemish Giant", 14.6, 22.0); 
   
      Assert.assertEquals(62.15, sb1.estimatedMonthlyCost(), 0.00001);
   }
   
   /** Test the toString method. **/
   @Test public void toStringTest() {
      ShowBunny sb1 = new ShowBunny("Bigun", "Flemish Giant", 14.6, 22.0); 
   
      Assert.assertTrue(sb1.toString().contains("for grooming)"));
   }
}
