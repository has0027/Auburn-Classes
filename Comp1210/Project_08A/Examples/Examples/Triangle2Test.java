import org.junit.Assert;
//import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

/** */
public class Triangle2Test {


   /** Fixture initialization (common initialization
    *  for all tests). **/
   @Before public void setUp() {
   }

   /** Tests equilateral classification. **/ 
   @Test public void equilateralTest() {   
      Triangle2 t = new Triangle2(5, 5, 5);   
      Assert.assertEquals("For sides 5, 5, 5: ", 
                           "equilateral", t.getClassification());
   }
   
//    /** Tests isosceles classification. **/
   // @Test public void isocelesTest() {
      // Triangle2 t = new Triangle2(5, 7, 5);      
      // Assert.assertEquals("Testing for isoceles with sides 5, 7, 5. ",
         //                   "isosceles", t.getClassification());
   // }
//    
//    /** Tests scalene classification. **/
   // @Test public void scaleneTest() {
      // Triangle2 t = new Triangle2(5, 7, 8);
      // Assert.assertEquals("Scalene classification incorrect.", 
         //                  "scalene", t.getClassification());
   // }
// 
//    /** Tests for negative sides. **/
   // @Test public void negativeSidesTest() {
      // Triangle2 t = new Triangle2(-5, 7, 5);
      // Assert.assertEquals("not a triangle",t.getClassification());
      // t = new Triangle2(5, -7, 5);
      // Assert.assertEquals("not a triangle",t.getClassification());
      // t = new Triangle2(5, 7, -5);
      // Assert.assertEquals("not a triangle",t.getClassification());
   // }  
//    

//    /** A test that always fails. **/
   // @Test public void defaultTest() {
   // 
      // Assert.assertEquals("Default test added by jGRASP. Delete "
         //    + "this test once you have added your own.", 0, 1); 
   // }
   
}
