import org.junit.Assert;
import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;
import java.util.Iterator;
import java.util.NoSuchElementException;

public class LinkedSetTest<T> {

   /** Test for contains/add method. **/
   @Test
   public void test1() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(4);
      ls.add(5);
      boolean actual = ls.contains(4);
      boolean expected = true;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for contains/add method. **/
   @Test
   public void test12() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(4);
      ls.add(5);
      ls.add(3);
      ls.add(1);
      ls.add(2);
      ls.remove(4);
      boolean actual = ls.contains(3);
      boolean expected = true;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for contains method. **/
   @Test
   public void test2() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(5);
      ls.add(4);
      ls.add(6);
      ls.add(8);
      boolean actual = ls.contains(6);
      boolean expected = true;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for contains/remove method. **/
   @Test
   public void test3() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      ls.remove(2);
      ls.remove(1);
      boolean actual = ls.contains(1);
      boolean expected = false;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for add method with duplicates out of order. **/
   @Test
   public void test4() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(4);
      ls.add(1);
      ls.add(5);
      ls.add(3);
      ls.add(1);
      ls.add(2);
      int actual = ls.size;
      int expected = 5;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for equals with LinkedSet parameter method. **/
   @Test
   public void test5() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(5);
      ls.add(4);
      ls.add(6);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(4);
      ls2.add(5);
      ls2.add(6);
      boolean actual = ls.equals(ls2);
      boolean expected = true;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for intersection method. **/
   @Test
   public void test6() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      ls.add(2);
      ls.add(3);
      Set<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(1);
      ls2.add(2);
      ls2.add(3);
      Set<Integer> intersect = new LinkedSet<Integer>();
      intersect = ls.intersection(ls2);
      boolean actual = intersect.contains(2);
      boolean expected = true;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for intersection method. **/
   @Test
   public void test7() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      ls.add(2);
      ls.add(3);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(1);
      ls2.add(2);
      ls2.add(3);
      Set<Integer> intersect = new LinkedSet<Integer>();
      intersect = ls.intersection(ls2);
      boolean actual = intersect.contains(2);
      boolean expected = true;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for intersection method. **/
   @Test
   public void test7New() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      ls.add(5);
      ls.add(6);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(5);
      ls2.add(2);
      ls2.add(4);
      ls2.add(7);
      Set<Integer> intersect = new LinkedSet<Integer>();
      intersect = ls.intersection(ls2);
      boolean actual = intersect.contains(5);
      boolean expected = true;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for intersection method. **/
   @Test
   public void test7NewNew() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(6);
      ls.add(5);
      ls.add(1);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(5);
      ls2.add(2);
      ls2.add(4);
      ls2.add(7);
      ls2.add(6);
      Set<Integer> intersect = new LinkedSet<Integer>();
      intersect = ls.intersection(ls2);
      boolean actual = intersect.contains(1);
      boolean expected = false;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for complement method. **/
   @Test
   public void test8() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      ls.add(2);
      ls.add(3);
      Set<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(2);
      ls2.add(3);
      ls2.add(1);
      Set<Integer> comp = new LinkedSet<Integer>();
      comp = ls.complement(ls2);
      boolean actual = comp.contains(2);
      boolean expected = false;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for complement method. **/
   @Test
   public void test9() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      ls.add(2);
      ls.add(3);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(1);
      ls2.add(2);
      ls2.add(3);
      Set<Integer> comp = new LinkedSet<Integer>();
      comp = ls.complement(ls2);
      boolean actual = comp.contains(2);
      boolean expected = false;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for complement method. **/
   @Test
   public void test10() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      ls.add(2);
      ls.add(5);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(1);
      ls2.add(2);
      ls2.add(3);
      Set<Integer> comp = new LinkedSet<Integer>();
      comp = ls.complement(ls2);
      boolean actual = comp.contains(3);
      boolean expected = false;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for complement method. **/
   @Test
   public void test101() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      ls.add(2);
      ls.add(3);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(2);
      ls2.add(3);
      ls2.add(4);
      Set<Integer> comp = new LinkedSet<Integer>();
      comp = ls.complement(ls2);
      boolean actual = comp.contains(1);
      boolean expected = true;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for complement method. **/
   @Test
   public void test11() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      ls.add(2);
      ls.add(3);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(1);
      ls2.add(2);
      ls2.add(3);
      Set<Integer> union = new LinkedSet<Integer>();
      union = ls.union(ls2);
      boolean actual = union.contains(2);
      boolean expected = true;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for union method. **/
   @Test
   public void test126() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      ls.add(2);
      ls.add(3);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(3);
      ls2.add(4);
      ls2.add(2);
      Set<Integer> union = new LinkedSet<Integer>();
      union = ls.union(ls2);
      int actual = union.size();
      int expected = 4;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for complement method. **/
   @Test
   public void test13() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      ls.add(8);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(3);
      ls2.add(4);
      ls2.add(2);
      ls2.add(6);
      Set<Integer> union = new LinkedSet<Integer>();
      union = ls.union(ls2);
      int actual = union.size();
      int expected = 6;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for complement method. **/
   @Test
   public void test21() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      ls.add(3);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(4);
      ls2.add(5);
      ls2.add(6);
      ls2.add(7);
      Set<Integer> union = new LinkedSet<Integer>();
      union = ls.union(ls2);
      int actual = union.size();
      int expected = 6;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for union method. **/
   @Test
   public void test14() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(2);
      ls.add(4);
      ls.add(8);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(5);
      Set<Integer> union = new LinkedSet<Integer>();
      union = ls.union(ls2);
      int actual = union.size();
      int expected = 4;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for union method. **/
   @Test
   public void test15() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      ls.add(2);
      ls.add(3);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(1);
      ls2.add(2);
      ls2.add(3);
      Set<Integer> union = new LinkedSet<Integer>();
      union = ls.union(ls2);
      int actual = union.size();
      int expected = 3;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for union method. **/
   @Test
   public void test16() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();      
      ls.add(1);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(1);
      ls2.add(2);
      ls2.add(3);
      Set<Integer> union = new LinkedSet<Integer>();
      union = ls.union(ls2);
      int actual = union.size();
      int expected = 3;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for union method. **/
   @Test
   public void test18() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();
      ls.add(3);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(1);
      ls2.add(2);
      ls2.add(3);
      Set<Integer> union = new LinkedSet<Integer>();
      union = ls.union(ls2);
      int actual = union.size();
      int expected = 3;
      Assert.assertEquals(expected, actual);
   }
   
   /** Test for union method. **/
   @Test
   public void test19() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();
      ls.add(1);
      ls.add(2);
      ls.add(3);
      LinkedSet<Integer> ls2 = new LinkedSet<Integer>();
      ls2.add(3);
      ls2.add(4);
      ls2.add(2);
      Set<Integer> expected = new LinkedSet<Integer>();
      expected.add(1);
      expected.add(2);
      expected.add(3);
      expected.add(4);
      Set<Integer> union = new LinkedSet<Integer>();
      union = ls.union(ls2);
      Assert.assertTrue(expected.equals(union));
   }
   
   /** Test for power set iterator. **/
   @Test
   public void test20() {
      LinkedSet<Integer> ls = new LinkedSet<Integer>();
      ls.add(1);
      ls.add(2);
      ls.add(3);
      Iterator<Set<Integer>> psi = ls.powerSetIterator();
      for (int i = 0; i < 8; i++) {
         psi.next();
      }
      boolean actual = psi.hasNext();
      boolean expected = false;
      Assert.assertEquals(expected, actual);
   }
}
