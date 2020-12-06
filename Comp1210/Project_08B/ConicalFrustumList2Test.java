import org.junit.Assert;
// import static org.junit.Assert.*;
import java.io.FileNotFoundException;
import org.junit.Before;
import org.junit.Test;


public class ConicalFrustumList2Test {

/** Fixture initialization (common initialization
    *  for all tests). **/
   @Before public void setUp() {
   }
   
   
   @Test public void getNameTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
   
      Assert.assertEquals("Test list", list.getName());
   }
   
   
   @Test public void numberTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
      Assert.assertEquals(3, list.numberOfConicalFrustums());
   }


   @Test public void totalSurfaceAreaTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
      Assert.assertEquals(1128.0281, list.totalSurfaceArea(), 0.0001); 
   }


   @Test public void totalVolumeTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
      Assert.assertEquals(1998.0529, list.totalVolume(), 0.0001);  
   }
   
   
   @Test public void averageSurfaceAreaTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
      Assert.assertEquals(376.0093, list.averageSurfaceArea(), 0.0001); 
   }
   
   
   @Test public void averageVolumeTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
      Assert.assertEquals(666.0176, list.averageVolume(), 0.0001);
   }
   
   
   @Test public void toStringTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
      String line = "Test list";
      
      Assert.assertTrue(list.toString().contains(line));
   }
   
   
   @Test public void summaryInfoTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
      String line = "Number of ConicalFrustum Objects: ";
      
      Assert.assertTrue(list.summaryInfo().contains(line));
   }
   
   
   @Test public void readFileTest() throws FileNotFoundException {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", null, 3);
      list = list.readFile("conical_frustum_data_1.txt");
      
      Assert.assertEquals("Conical Frustum Test List", list.getName());
   }
   
   
   
   @Test public void addTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
      ConicalFrustum test = new ConicalFrustum("test", 1, 1, 1);
      list.addConicalFrustum("test", 1, 1, 1);
      ConicalFrustum[] aList = list.getList();
      
      Assert.assertEquals(test, aList[3]);
   }
   
   
   @Test public void findTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
      ConicalFrustum test = new ConicalFrustum("second", 4, 5, 6);
      ConicalFrustum[] aList = list.getList();
      
      Assert.assertEquals(test, aList[1]);
   }
  
  
   @Test public void deleteTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
     
      ConicalFrustum test = new ConicalFrustum("second", 4, 5, 6);
      ConicalFrustum[] aList = list.getList();
      list.deleteConicalFrustum("first");
      
      Assert.assertEquals(test, aList[0]);
   } 
   
   
   @Test public void editTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
      ConicalFrustum test = new ConicalFrustum("second", 4, 5, 5);
      ConicalFrustum[] aList = list.getList();
      list.editConicalFrustum("second", 4, 5, 5);
      
      Assert.assertEquals(test, aList[1]); 
   }
   
   
   @Test public void leastHeightTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
     
   }
   
   
   @Test public void greatestHeightTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
      Assert.assertEquals(9, list.findConicalFrustumWithGreatestHeight(), 0.0001);
   }
   
   
   @Test public void leastVolumeTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
     
   }
   
   
   @Test public void greatestVolumeTest() {
      ConicalFrustum[] cf = new ConicalFrustum[50];
      cf[0] = new ConicalFrustum("first", 1, 2, 3);
      cf[1] = new ConicalFrustum("second", 4, 5, 6);
      cf[2] = new ConicalFrustum("third", 7, 8, 9);
      
      ConicalFrustumList2 list = new ConicalFrustumList2("Test list", cf, 3);
      
      
   }
}
