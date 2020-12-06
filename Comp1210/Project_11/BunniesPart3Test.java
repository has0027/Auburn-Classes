import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;

/**
* Tests the file check.
* 
* Project 11
* @author Haden Stuart
* @version 4/20/18
*/
public class BunniesPart3Test {

   /** Test a good file. **/
   @Test public void goodTest() {
     
      BunniesPart3 test = new BunniesPart3();
      
      Bunny.resetBunnyCount();
      
      String[] args = {"bunnies1.txt"};
      BunniesPart3.main(args);
      Assert.assertEquals(4, Bunny.getBunnyCount());
   }
   
   /** Test a bad file. **/
   @Test public void badTest() {
     
      BunniesPart3 test = new BunniesPart3();
      
      String[] args = {"test"};
      BunniesPart3.main(args);
      Assert.assertEquals(0, Bunny.getBunnyCount());
   }
   
   /** Test no file. **/
   @Test public void noTest() {
     
      BunniesPart3 test = new BunniesPart3();
      
      String[] args = {};
      BunniesPart3.main(args);
      Assert.assertEquals(0, Bunny.getBunnyCount());
   }
}
