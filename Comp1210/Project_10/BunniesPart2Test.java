import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;
import java.io.FileNotFoundException;

/**
* Test the main.
*
* Project 10
* @author Haden Stuart
* @version 4/13/18
*/
public class BunniesPart2Test {

   /** Test the constructor. 
   *
   * @throws FileNotFoundException for when no file found
   */
   @Test public void constructorTest() throws FileNotFoundException {
      
      BunniesPart2 bPart2Obj = new BunniesPart2();
      
      Bunny.resetBunnyCount();
      
      String[] args = {"bunnies1.txt"};
      BunniesPart2.main(args);
      Assert.assertEquals(4, Bunny.getBunnyCount());
   }
}
