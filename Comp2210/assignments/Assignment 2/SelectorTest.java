import org.junit.Assert;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;
import java.util.Arrays;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;


public class SelectorTest {

    /** Collections used in the various examples. */
   static Collection<Integer> c1 = Arrays.<Integer>asList(new Integer[]{2,8,7,3,4});
   static Collection<Integer> c2 = Arrays.<Integer>asList(new Integer[]{5,9,1,7,3});
   static Collection<Integer> c3 = Arrays.<Integer>asList(new Integer[]{8,7,6,5,4});
   
   /**
    * Defines a total order on integers as ascending natural order.
    */
   static Comparator<Integer> ascendingInteger =
         new Comparator<Integer>() {
            public int compare(Integer i1, Integer i2) {
               return i1.compareTo(i2);
            }
         };
   
   /**
    * Defines a total order on integers as descending natural order.
    * This is the reverse of ascendingInteger above.
    */
   static Comparator<Integer> descendingInteger =
         new Comparator<Integer>() {
            public int compare(Integer i1, Integer i2) {
               return i2.compareTo(i1);
            }
         };
   


   /** A test that always fails. **/
   @Test 
   public void minTest1() {
      
      int expected = 2;
      int actual = Selector.<Integer>min(c1, ascendingInteger);
      Assert.assertEquals(expected, actual);
   }
   
   @Test 
   public void minTest2() {
      
      int expected = 9;
      int actual = Selector.<Integer>min(c2, descendingInteger);
      Assert.assertEquals(expected, actual);
   }
   
   @Test 
   public void minTest3() {
      
      int expected = 8;
      int actual = Selector.<Integer>min(c3, descendingInteger);
      Assert.assertEquals(expected, actual);
   }
   
}
