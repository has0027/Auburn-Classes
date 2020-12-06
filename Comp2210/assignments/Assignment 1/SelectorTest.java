import org.junit.Assert;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;


public class SelectorTest {

// Min tests

   @Test 
   public void testMinNull() {
      int[] a = null;
   
      try {
         Selector.min(a);
         Assert.fail("No exception");
      }
      
      catch (IllegalArgumentException e) {
         Assert.assertTrue(true);
      }
      
      catch (Exception e) {
         Assert.fail("Wrong exception");
      
      }
   }
   
   @Test 
   public void testMinZero() {
      int[] a = new int[0];
   
      try {
         Selector.min(a);
         Assert.fail("No exception");
      }
      
      catch (IllegalArgumentException e) {
         Assert.assertTrue(true);
      }
      
      catch (Exception e) {
         Assert.fail("Wrong exception");
      
      }
   }
   
   // Max tests 
   
   @Test 
   public void testMaxNull() {
      int[] a = null;
   
      try {
         Selector.max(a);
         Assert.fail("No exception");
      }
      
      catch (IllegalArgumentException e) {
         Assert.assertTrue(true);
      }
      
      catch (Exception e) {
         Assert.fail("Wrong exception");
      
      }
   }
   
   @Test 
   public void testMaxZero() {
      int[] a = new int[0];
   
      try {
         Selector.max(a);
         Assert.fail("No exception");
      }
      
      catch (IllegalArgumentException e) {
         Assert.assertTrue(true);
      }
      
      catch (Exception e) {
         Assert.fail("Wrong exception");
      
      }
   }
   
   // Kmin tests
   
   @Test 
   public void test1Kmin() {
      int[] a = {-5, -7};
      int k = 1;
   
      int expected = -7;
      int actual = Selector.kmin(a, k);
      Assert.assertEquals(expected, actual);
   }
    
   
   // Kmax tests
   
   @Test 
   public void test1Kmax() {
      int[] a = {-9, -7, -5, -3, -1};
      int k = 1;
   
      int expected = -3;
      int actual = Selector.kmin(a, k);
      Assert.assertEquals(expected, actual);
   }
}