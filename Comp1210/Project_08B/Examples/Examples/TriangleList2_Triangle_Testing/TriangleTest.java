import org.junit.Assert;
//import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

/** Test class for Triangle. */ 
public class TriangleTest {

   /** Fixture initialization (common initialization
    *  for all tests). **/
   @Before public void setUp() {
   }

   /** A test of getters. **/
   @Test public void gettersTest() {
   
      Triangle t = new Triangle(3, 4, 5);
      
      Assert.assertEquals("getS1 test", 
                           3, t.getS1(), .0001);
   
      Assert.assertEquals("getS2 test", 
                           4, t.getS2(), .0001);
   
      Assert.assertEquals("getS3 test", 
                           5, t.getS3(), .0001);
   }
   

   /** A test of getClassification for scalene. **/
   @Test public void getClassificationScaleneTest() {
   
      Triangle t = new Triangle(3, 4, 5);
      Assert.assertEquals("getClassification scalene test", 
                           "scalene", t.getClassification());
   }

   /** A test of getClassification for isosceles. **/
   @Test public void getClassificationIsoscelesTest() {
   
      Triangle t = new Triangle(9, 7, 7);
      Assert.assertEquals("getClassification isosceles test", 
                           "isosceles", t.getClassification());
   
      t = new Triangle(7, 9, 7);
      Assert.assertEquals("getClassification isosceles test", 
                           "isosceles", t.getClassification());
   
      t = new Triangle(7, 7, 9);
      Assert.assertEquals("getClassification isosceles test", 
                           "isosceles", t.getClassification());
   }

   /** A test of getClassification for equilateral. **/
   @Test public void getClassificationEquilateralTest() {
   
      Triangle t = new Triangle(7, 7, 7);
      Assert.assertEquals("getClassification test", 
                           "equilateral", t.getClassification());           
   }

   /** A test of getClassification() for not a triangle. **/
   @Test public void getClassificationNotATriangleTest() {
   
   // check sides for 0 /////////////////
      
      Triangle t = new Triangle(0, 7, 7);
      Assert.assertEquals("getClassification test", 
                           "not a triangle", t.getClassification());
   
      t = new Triangle(7, 0, 7);
      Assert.assertEquals("getClassification test", 
                           "not a triangle", t.getClassification());
   
      t = new Triangle(7, 7, 0);
      Assert.assertEquals("getClassification test", 
                           "not a triangle", t.getClassification());
   
   
   // check side for longer than sum of other two sides /////////
      
      t = new Triangle(15, 7, 7);
      Assert.assertEquals("getClassification test", 
                           "not a triangle", t.getClassification());
   
      t = new Triangle(7, 15, 7);
      Assert.assertEquals("getClassification test", 
                           "not a triangle", t.getClassification());
   
      t = new Triangle(7, 7, 15);
      Assert.assertEquals("getClassification test", 
                           "not a triangle", t.getClassification());
   }
   
   /** Test for perimeter(). */
   @Test public void perimeterTest() {
   
      Triangle t = new Triangle(7, 10, 7);
      
      Assert.assertEquals("perimeter test",
                           24, t.perimeter(), .000001);
   }

   /** Test for equals(). */
   @Test public void equalsTest() {
   
      // the equals method has four conditions so five test cases are needed
      Triangle t1 = new Triangle(7, 10, 7);
      Triangle t2 = new Triangle(7, 10, 7);
      Assert.assertEquals("equals test",
                        true, t1.equals(t2));
   
      t2 = new Triangle(6, 10, 7);
      Assert.assertEquals("equals false test",
                        false, t1.equals(t2));
   
   
      t2 = new Triangle(7, 9, 7);
      Assert.assertEquals("equals false test",
                        false, t1.equals(t2));
   
      t2 = new Triangle(7, 10, 9);
      Assert.assertEquals("equals false test",
                        false, t1.equals(t2));
   
      Assert.assertEquals("equals false test",
                        false, t1.equals("obj")); // Is t1 equal to a String?
   
      // Also test hashCode
      Assert.assertEquals("equals 0 test",
                        0, t1.hashCode());
   }


   /** Test for toString(). */
   @Test public void toStringTest() {
   
      Triangle t = new Triangle(7, 10, 7);
      
      Assert.assertEquals("toString test",
                     true, 
                     t.toString().contains("7.0, 10.0, 7.0 (isosceles)"));
   }

//    /** A test that always fails. **/
   // @Test public void defaultTest() {
      // Assert.assertEquals("Default test added by jGRASP. Delete "
         //    + "this test once you have added your own.", 0, 1);
   // }
}
