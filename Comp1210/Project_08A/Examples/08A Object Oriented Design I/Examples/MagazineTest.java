import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;


public class MagazineTest {


   /** Fixture initialization (common initialization
    *  for all tests). **/
   @Before public void setUp() {
   }


  /** A test that always fails -- replaced. **/
   @Test public void countTest() {
   
      Magazine.resetCount();
      Magazine m1 = new Magazine("Time", 133);
      Magazine m2 = new Magazine("News", 13);
      Assert.assertEquals("My first test failed: ", 1, Magazine.getCount());
   }
   
   @Test public void count2Test() {
   
      Magazine.resetCount();
      Magazine m1 = new Magazine("Time", 133);
      Magazine m2 = new Magazine("News", 13);
      Magazine m3 = new Magazine("News", 13);
      Magazine m4 = new Magazine("News", 13);
      Assert.assertEquals("My first test failed: ", 4, Magazine.getCount());
   }

}
