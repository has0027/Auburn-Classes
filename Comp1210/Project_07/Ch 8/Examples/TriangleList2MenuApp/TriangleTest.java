import org.junit.Assert;
//import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

/**  */
public class TriangleTest {


   /** Fixture initialization (common initialization
    *  for all tests). **/
   @Before public void setUp() {
   }


//    /** A test that always fails. **/
   // @Test public void defaultTest() {
      // Assert.assertEquals("Default test added by jGRASP. Delete "
         //    + "this test once you have added your own.", 0, 1);
   // }
   
   /**  **/
   @Test public void equalsForArrayTest() {
      Triangle t0 = new Triangle(3, 4, 5);
      Triangle t1 = new Triangle(3, 4, 6);
      Triangle t2 = new Triangle(3, 5, 5);
      Triangle t3 = new Triangle(5, 4, 5);
      Triangle t4 = new Triangle(5, 4, 5);
      Triangle[] ta1 = {t0, t1, t2, t3};
      Triangle[] ta2 = {t3, t2, t1, t0};
      Triangle[] ta3 = {t0, t1, t2, t4};
      
      // boolean pass = true;
      // for (int i = 0; i < ta1.length; i++) {
         // if (!ta1[i].equals(ta3[i])) {
            // pass = false;
         // }
      // }
      
      Assert.assertArrayEquals("Comparing two Triangle arrays ", 
                               ta1, ta3);
   }

}
