import org.junit.Assert;
// import static org.junit.Assert.*;
// import org.junit.Before;
import org.junit.Test;
import java.io.FileNotFoundException;

/**
* Tests the bunny list.
* 
* Project 10
* @author Haden Stuart
* @version 4/13/18
*/
public class BunnyListTest {

   /** Test the readFile method.
   *
   * @throws FileNotFoundException when no file found
   */
   @Test public void readFileTest() throws FileNotFoundException {
   
      BunnyList list = new BunnyList();
      list.readBunnyFile("bunnies1.txt");
   
      Assert.assertEquals("Bunny Collection", list.getListName());
   }
   
   /** Test the get and set methods.
   *
   * @throws FileNotFoundException when no file found
   */
   @Test public void getSetTest() throws FileNotFoundException {
   
      BunnyList list = new BunnyList();
      list.readBunnyFile("bunnies1.txt");
      list.setListName("test");
      
      Bunny[] actualArray = new Bunny[0];
      actualArray = list.getBunnyList();
      String[] recordsArray = new String[0];
      recordsArray = list.getExcludedRecords();
   
      Assert.assertEquals("test", list.getListName());
      Assert.assertEquals(4, actualArray.length, 0.0001);
      Assert.assertEquals(2, recordsArray.length, 0.0001);
   } 
   
   /** Test the addBunny method.
   *
   * @throws FileNotFoundException when no file found
   */
   @Test public void addBunnyTest() throws FileNotFoundException {
   
      BunnyList list = new BunnyList();
      list.readBunnyFile("bunnies1.txt");
      
      PetBunny pb1 = new PetBunny("Test1", "Whatever", 3.5);
      list.addBunny(pb1);
      Bunny[] actualArray = new Bunny[0];
      actualArray = list.getBunnyList();
   
      Assert.assertEquals(5, actualArray.length, 0.0001);
   }
   
   /** Test the addexcludedRecords method.
   *
   * @throws FileNotFoundException when no file found
   */
   @Test public void addExcludedRecordTest() throws FileNotFoundException {
   
      BunnyList list = new BunnyList();
      list.readBunnyFile("bunnies1.txt");
      
      String test = "Test";
      list.addExcludedRecord(test);
      String[] recordsArray = new String[0];
      recordsArray = list.getExcludedRecords();
   
      Assert.assertEquals(3, recordsArray.length, 0.0001);
   }  
   
   /** Test the toString.
   *
   * @throws FileNotFoundException when no file found
   */
   @Test public void toStringTest() throws FileNotFoundException {
   
      BunnyList list = new BunnyList();
      list.readBunnyFile("bunnies1.txt");
   
      Assert.assertTrue(list.toString().contains("Bigun"));
   }
   
   /** Test the total cost method.
   *
   * @throws FileNotFoundException when no file found
   */
   @Test public void totalEstimatedMonthlyCostTest()
       throws FileNotFoundException {
   
      BunnyList list = new BunnyList();
      list.readBunnyFile("bunnies1.txt");
   
      Assert.assertEquals(124.38, list.totalEstimatedMonthlyCost(), 0.01);
   } 
   
   /** Test the summary method.
   *
   * @throws FileNotFoundException when no file found
   */
   @Test public void summaryTest() throws FileNotFoundException {
   
      BunnyList list = new BunnyList();
      list.readBunnyFile("bunnies1.txt");
   
      Assert.assertTrue(list.summary().contains("Number of Bunnies"));
   }
   
   /** Test the listByName.
   *
   * @throws FileNotFoundException when no file found
   */
   @Test public void listByNameTest() throws FileNotFoundException {
   
      BunnyList list = new BunnyList();
      list.readBunnyFile("bunnies1.txt");
   
      Assert.assertTrue(list.listByName().contains("Bunnies by Name"));
   }
   
   /** Test the listByCost method.
   *
   * @throws FileNotFoundException when no file found
   */
   @Test public void listByCostTest() throws FileNotFoundException {
   
      BunnyList list = new BunnyList();
      list.readBunnyFile("bunnies1.txt");
   
      Assert.assertTrue(list.listByCost().contains("Bunnies by Cost"));
   }
   
   /** Test the excludedRecordsList method.
   *
   * @throws FileNotFoundException when no file found
   */
   @Test public void excludedRecordsListTest()
       throws FileNotFoundException {
   
      BunnyList list = new BunnyList();
      list.readBunnyFile("bunnies1.txt");
   
      Assert.assertTrue(list.excludedRecordsList()
         .contains("Excluded Records"));
   }
}
