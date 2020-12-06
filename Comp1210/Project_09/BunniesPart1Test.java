import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;

/**
* Tests bunny count information.
* 
* Project 9
* @author Haden Stuart
* @version 4/3/18
*/
public class BunniesPart1Test {

   /** Test the count. **/
   @Test public void mainTest() {
      BunniesPart1 vp1 = new BunniesPart1();
   
      Bunny.resetBunnyCount();
      BunniesPart1.main(null);
      Assert.assertEquals("Bunny.BunnyCount should be 4. ",
         4, Bunny.getBunnyCount());
   }
}
