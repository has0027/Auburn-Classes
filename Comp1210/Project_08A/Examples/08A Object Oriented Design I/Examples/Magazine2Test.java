import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;


public class Magazine2Test {


   /** Fixture initialization (common initialization
    *  for all tests). **/
   @Before public void setUp() {
   }


  /** A test that always fails. **/
   @Test public void count1Test() {
    
      Magazine2 m1 = new Magazine2("Time", 120, "Time, Inc", "New York");
      Magazine2 m2 = new Magazine2("Time Again", 10, "Time, Inc", "New York");
       
      Assert.assertEquals("Count is incorrect. "
            + "", Magazine2.getCount(), 2);
   }
   
   @Test public void count1Test2() {
      
      Magazine2 m1 = new Magazine2("Time", 120, "Time, Inc", "New York");
      Magazine2 m2 = new Magazine2("Time Again", 10, "Time, Inc", "New York");
      Magazine2.resetCount();
       
      Assert.assertEquals("Count is incorrect. "
            + "", Magazine2.getCount(), 0);
   }

}
