import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;

/**
* Tests the cost of bunnies.
*
* Project 10
* @author Haden Stuart
* @version 4/13/18
*/
public class CostComparatorTest {

   /** Test1 of the comparator. **/
   @Test public void comparator1Test() {
      PetBunny pb1 = new PetBunny("Test1", "Whatever", 3.5);
      PetBunny pb2 = new PetBunny("Test2", "Whatever", 3.5);
   
      CostComparator test = new CostComparator();
      int ans = test.compare(pb1, pb2);
   
      Assert.assertEquals(0, ans, 0.0001);
   }
   
   /** Test2 of the comparator. **/
   @Test public void comparator2Test() {
      PetBunny pb1 = new PetBunny("Test1", "Whatever", 4.0);
      PetBunny pb2 = new PetBunny("Test2", "Whatever", 3.5);
   
      CostComparator test = new CostComparator();
      int ans = test.compare(pb1, pb2);
   
      Assert.assertEquals(1, ans, 0.0001);
   }
   
   /** Test3 of the comparator. **/
   @Test public void comparator3Test() {
      PetBunny pb1 = new PetBunny("Test1", "Whatever", 3.5);
      PetBunny pb2 = new PetBunny("Test2", "Whatever", 4.0);
   
      CostComparator test = new CostComparator();
      int ans = test.compare(pb1, pb2);
   
      Assert.assertEquals(-1, ans, 0.0001);
   }
}
