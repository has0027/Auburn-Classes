import org.junit.Assert;
//import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;
import java.io.IOException;


/** Test class for TriangleList2. */    
public class TriangleList2Test {

   /** Fixture initialization (common initialization
    *  for all tests). **/
   @Before public void setUp() {
   }
   
   /** Test for getListName(). */
   @Test public void getListNameTest() {
   
      Triangle[] tArray = new Triangle[20];
      tArray[0] = new Triangle(3, 4, 5);
      tArray[1] = new Triangle(3, 5, 5);
      tArray[2] = new Triangle(3, 3, 3);
      
      TriangleList2 tList = new TriangleList2("Test List", tArray, 3);
      
      Assert.assertEquals("getListName Test",
                           "Test List", tList.getListName());
   }

   /** Test for totalOfPerimeters(). */
   @Test public void totalOfPerimetersTest() {
   
      Triangle[] tArray = new Triangle[20];
      tArray[0] = new Triangle(3, 4, 5);
      tArray[1] = new Triangle(3, 5, 5);
      tArray[2] = new Triangle(3, 3, 3);
      
      TriangleList2 tList = new TriangleList2("Test List", tArray, 3);
      
      Assert.assertEquals("totalOfPerimeters Test",
                           34, tList.totalOfPerimeters(), .001);
   
      Assert.assertEquals("totalOfPerimeters Test",
                           34, tList.totalOfPerimeters2(), .001);
   }

   /** Test for smallestPerimeter(). */
   @Test public void smallestPerimeterTest() {
   
      Triangle[] tArray = new Triangle[20];
      tArray[0] = new Triangle(3, 4, 5);
      tArray[1] = new Triangle(3, 5, 5);
      tArray[2] = new Triangle(3, 3, 3);
      
      TriangleList2 tList = new TriangleList2("Test List", tArray, 3);
      
      Assert.assertEquals("smallestPerimeter Test",
                           9, tList.smallestPerimeter(), .001);
   
      TriangleList2 tList2 = new TriangleList2("Test List", null, 0);
      Assert.assertEquals("smallestPerimeter Test",
                           0, tList2.smallestPerimeter(), .001);
   }

   /** Test for largestPerimeter(). */
   @Test public void largestPerimeterTest() {
   
      Triangle[] tArray = new Triangle[20];
      tArray[0] = new Triangle(3, 4, 5);
      tArray[1] = new Triangle(3, 5, 5);
      tArray[2] = new Triangle(3, 3, 3);
      
      TriangleList2 tList = new TriangleList2("Test List", tArray, 3);
      
      Assert.assertEquals("largestPerimeter Test",
                           13, tList.largestPerimeter(), .001);
   
      TriangleList2 tList2 = new TriangleList2("Test List", null, 0);
      Assert.assertEquals("largestPerimeter Test",
                           0, tList2.largestPerimeter(), .001);
   }

   /** Test for largestPerimeterWithSides(). */
   @Test public void largestPerimeterWithSidesTest() {
   
      Triangle[] tArray = new Triangle[20];
      tArray[0] = new Triangle(3, 4, 5);
      tArray[1] = new Triangle(3, 5, 5);
      tArray[2] = new Triangle(3, 3, 3);
      
      TriangleList2 tList = new TriangleList2("Test List", tArray, 3);
      
      Assert.assertEquals("largestPerimeterWithSides Test",
                           "13.0 for sides 3.0, 5.0, 5.0", 
                           tList.largestPerimeterWithSides());
   
      TriangleList2 tList2 = new TriangleList2("Test List", null, 0);
      Assert.assertEquals("largestPerimeterWithSides Test",
                           "No triangles in list", 
                           tList2.largestPerimeterWithSides());
   }

   /** Test for toString(). */
   @Test public void toStringTest() {
   
      Triangle[] tArray = new Triangle[20];
      tArray[0] = new Triangle(3, 4, 5);
      tArray[1] = new Triangle(3, 5, 5);
      tArray[2] = new Triangle(3, 3, 3);
      
      TriangleList2 tList = new TriangleList2("Test List", tArray, 3);
      
      Assert.assertEquals("toString Test",
                           true, 
                           tList.toString().
                              contains("3.0, 4.0, 5.0 (scalene)"));
   }

   /** Test for summary(). */
   @Test public void summaryTest() {
   
      Triangle[] tArray = new Triangle[20];
      tArray[0] = new Triangle(3, 4, 5);
      tArray[1] = new Triangle(3, 5, 5);
      tArray[2] = new Triangle(3, 3, 3);
      
      TriangleList2 tList = new TriangleList2("Test List", tArray, 3);
      
      Assert.assertEquals("summary Test",
                           true, 
                           tList.summary().
                              contains("Number of Triangles: 3"));
   }

   /** Test for readFile(). 
    * @throws IOException for reading a file
    */
   @Test public void readFileTest() throws IOException {
   
      Triangle[] tArray = new Triangle[20];
      tArray[0] = new Triangle(3, 4, 5);
      tArray[1] = new Triangle(3, 5, 5);
      tArray[2] = new Triangle(3, 3, 3);
      
      TriangleList2 tList = new TriangleList2("Test List", null, 0);
      tList = tList.readFile("triangle.txt");
      
      Assert.assertEquals("readFile Test",
                           "Nice Small Set of Triangles", 
                           tList.getListName());
   }
   
   /** Test for addTriangle(). */
   @Test public void addTriangleTest() {
   
      Triangle[] tArray = new Triangle[20];
      tArray[0] = new Triangle(3, 4, 5);
      tArray[1] = new Triangle(3, 5, 5);
      tArray[2] = new Triangle(3, 3, 3);
      
      TriangleList2 tList = new TriangleList2("Test List", tArray, 3);
      
      Triangle t = new Triangle(7, 7, 7);
      tList.addTriangle(7, 7, 7);
      Triangle[] tA = tList.getList();
         
      Assert.assertEquals("addTriangle Test",
                           t, tA[3]);
   }

   /** Test for deleteTriangle(). */
   @Test public void deleteTriangleTest() {
   
      Triangle[] tArray = new Triangle[20];
      tArray[0] = new Triangle(3, 4, 5);
      tArray[1] = new Triangle(3, 5, 5);
      tArray[2] = new Triangle(3, 3, 3);
      
      TriangleList2 tList = new TriangleList2("Test List", tArray, 3);
      
      Triangle t = new Triangle(3, 5, 5);
      Triangle[] tA = tList.getList();
      Assert.assertEquals("pre deleteTriangle Test",
                           t, tA[1]);         
   
      Assert.assertTrue("deleteTriangle true Test",
                           tList.deleteTriangle(3, 4, 5));
   
      Assert.assertEquals("deleteTriangle true Test",
                           t, tA[0]);
   
      Assert.assertFalse("deleteTriangle false Test",
                           tList.deleteTriangle(9, 9, 9));
   }
   

//    /** A test that always fails. **/
   // @Test public void defaultTest() {
      // Assert.assertEquals("Default test added by jGRASP. Delete "
         //    + "this test once you have added your own.", 0, 1);
   // }
}
