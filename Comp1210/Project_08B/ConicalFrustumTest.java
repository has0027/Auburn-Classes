import org.junit.Assert;
// import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;

/**
* Tests conical frustum methods.
* 
* Project 8A
* @author Haden Stuart
* @version 3/21/18
*/
public class ConicalFrustumTest {

   /** Fixture initialization (common initialization
    *  for all tests). **/
   @Before public void setUp() {
   }


   /** Test the get methods. **/
   @Test public void getTest() {
   
      ConicalFrustum cf = new ConicalFrustum(" test ", 1, 2, 3);
   
      Assert.assertEquals("Get label test: ",
          "test", cf.getLabel());
      Assert.assertEquals("Get r1 test: ",
          1, cf.getRadius1(), .0001);
      Assert.assertEquals("Get r2 test: ",
          2, cf.getRadius2(), .0001);
      Assert.assertEquals("Get h test: ",
          3, cf.getHeight(), .0001);
   }
   
   /** Test the volume method. **/
   @Test public void volumeTest() {
   
      ConicalFrustum cf = new ConicalFrustum("test", 1, 2, 3);
   
      Assert.assertEquals("Volume test: ",
          21.991148, cf.volume(), .0001);
   }
 
   /** Test the slant height method. **/
   @Test public void slantHeightTest() {
   
      ConicalFrustum cf = new ConicalFrustum("test", 1, 2, 3);
   
      Assert.assertEquals("Slant height test: ",
          3.162277, cf.slantHeight(), .0001);
   }
   
   /** Test the lateral surface area method. **/
   @Test public void lateralSurfaceAreaTest() {
   
      ConicalFrustum cf = new ConicalFrustum("test", 1, 2, 3);
   
      Assert.assertEquals("Lateral surface area test: ",
          29.803764, cf.lateralSurfaceArea(), .0001);
   } 
   
  /** Test the lateral surface area method. **/
   @Test public void totalSurfaceAreaTest() {
   
      ConicalFrustum cf = new ConicalFrustum("test", 1, 2, 3);
   
      Assert.assertEquals("Total surface area test: ",
          45.511728, cf.totalSurfaceArea(), .0001);
   }
   
  /** Test the toString method. **/ 
   @Test public void toStringTest() {
   
      ConicalFrustum cf = new ConicalFrustum("test", 1, 2, 3);
      
      String line = " with radius1 = ";
   
      Assert.assertTrue("String test: ", cf.toString().contains(line));
   }   
   
  /** Test the set label method. **/
   @Test public void setLabelTest() {
   
      ConicalFrustum cf = new ConicalFrustum("test", 1, 2, 3);
   
      Assert.assertFalse("Set label test false: ", cf.setLabel(null));
      Assert.assertTrue("Set label test true: ", cf.setLabel(" test "));
   }
   
   /** Test the set radius1 method. **/
   @Test public void setRadius1Test() {
   
      ConicalFrustum cf = new ConicalFrustum("test", 1, 2, 3);
   
      Assert.assertFalse("Set radius1 test false: ", cf.setRadius1(-1));
      Assert.assertTrue("Set radius1 test true: ", cf.setRadius1(2));
   }
   
   /** Test the set radius2 method. **/
   @Test public void setRadius2Test() {
   
      ConicalFrustum cf = new ConicalFrustum("test", 1, 2, 3);
   
      Assert.assertFalse("Set radius2 test false: ", cf.setRadius2(-1));
      Assert.assertTrue("Set radius2 test true: ", cf.setRadius2(2));
   }
   
   /** Test the set height method. **/
   @Test public void setHeightTest() {
   
      ConicalFrustum cf = new ConicalFrustum("test", 1, 2, 3);
   
      Assert.assertFalse("Set height test false: ", cf.setHeight(-1));
      Assert.assertTrue("Set height test true: ", cf.setHeight(2));
   }
   
   /** Test the equals method. **/
   @Test public void equalsTest() {
   
      ConicalFrustum cf = new ConicalFrustum("test", 1, 2, 3);
      ConicalFrustum same = new ConicalFrustum("test", 1, 2, 3);
      ConicalFrustum badLabel = new ConicalFrustum("test2", 1, 2, 3);
      ConicalFrustum badRadius1 = new ConicalFrustum("test", 2, 2, 3);
      ConicalFrustum badRadius2 = new ConicalFrustum("test", 1, 3, 3);
      ConicalFrustum badHeight = new ConicalFrustum("test", 1, 2, 4);
      String nothing = "Test bad";
      
      Assert.assertFalse("Equals test false: ", cf.equals(nothing));
      Assert.assertFalse("Equals test false: ", cf.equals(badLabel));
      Assert.assertFalse("Equals test false: ", cf.equals(badRadius1));
      Assert.assertFalse("Equals test false: ", cf.equals(badRadius2));
      Assert.assertFalse("Equals test false: ", cf.equals(badHeight));
      Assert.assertTrue("Equals test true: ", cf.equals(same));
   }
   
  /** Test the hash code method. **/
   @Test public void hashCodeTest() {
   
      ConicalFrustum cf = new ConicalFrustum("test", 1, 2, 3);
   
      Assert.assertEquals("Hash code test: ", 0, cf.hashCode());
   } 
   
  /** Test the getCount and resetCount methods. **/
   @Test public void countTest() {
   
      ConicalFrustum cf = new ConicalFrustum("test", 1, 2, 3);
   
      cf.resetCount();
   
      Assert.assertEquals("Get count test: ", 0, cf.getCount());
   }
}
