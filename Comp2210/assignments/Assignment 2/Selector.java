import java.util.ArrayList;
import java.util.Collection;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;

/**
 * Defines a library of selection methods on Collections.
 *
 * @author  Haden Stuart (has0027@auburn.edu)
 * @version 9/6/18
 *
 */
public final class Selector {

/**
 * Can't instantiate this class.
 *
 * D O   N O T   C H A N G E   T H I S   C O N S T R U C T O R
 *
 */
   private Selector() { }


   /**
    * Returns the minimum value in the Collection coll as defined by the
    * Comparator comp. If either coll or comp is null, this method throws an
    * IllegalArgumentException. If coll is empty, this method throws a
    * NoSuchElementException. This method will not change coll in any way.
    *
    * @param coll    the Collection from which the minimum is selected
    * @param comp    the Comparator that defines the total order on T
    * @return        the minimum value in coll
    * @throws        IllegalArgumentException as per above
    * @throws        NoSuchElementException as per above
    */
   public static <T> T min(Collection<T> coll, Comparator<T> comp) {
   
   /** Check if collection is null. */
      if (coll == null) { 
         throw new IllegalArgumentException("List is null!");
      }
      
      /** Check if comparator is null. */
      if (comp == null) {
         throw new IllegalArgumentException("Comparator is null!");
      }
      
      /** Check if list is empty. */
      if (coll.isEmpty()) {
         throw new NoSuchElementException("List is empty!");
      }
      
      T min = coll.iterator().next();
      
      for (T test : coll) {
         int result = comp.compare(test, min);
      
         if (result < 0) {
            min = test;
         
         }
      }
   
      return min;
   }


   /**
    * Selects the maximum value in the Collection coll as defined by the
    * Comparator comp. If either coll or comp is null, this method throws an
    * IllegalArgumentException. If coll is empty, this method throws a
    * NoSuchElementException. This method will not change coll in any way.
    *
    * @param coll    the Collection from which the maximum is selected
    * @param comp    the Comparator that defines the total order on T
    * @return        the maximum value in coll
    * @throws        IllegalArgumentException as per above
    * @throws        NoSuchElementException as per above
    */
   public static <T> T max(Collection<T> coll, Comparator<T> comp) {
   
      /** Check if collection is null. */
      if (coll == null) { 
         throw new IllegalArgumentException("List is null!");
      }
      
      /** Check if comparator is null. */
      if (comp == null) {
         throw new IllegalArgumentException("Comparator is null!");
      }
      
      /** Check if list is empty. */
      if (coll.isEmpty()) {
         throw new NoSuchElementException("List is empty!");
      }
     
      T max = coll.iterator().next();
      
      for (T test : coll) {
         int result = comp.compare(test, max);
      
         if (result > 0) {
            max = test;
         
         }
      } 
      
      return max;
   }


   /**
    * Selects the kth minimum value from the Collection coll as defined by the
    * Comparator comp. If either coll or comp is null, this method throws an
    * IllegalArgumentException. If coll is empty or if there is no kth minimum
    * value, this method throws a NoSuchElementException. This method will not
    * change coll in any way.
    *
    * @param coll    the Collection from which the kth minimum is selected
    * @param k       the k-selection value
    * @param comp    the Comparator that defines the total order on T
    * @return        the kth minimum value in coll
    * @throws        IllegalArgumentException as per above
    * @throws        NoSuchElementException as per above
    */
   public static <T> T kmin(Collection<T> coll, int k, Comparator<T> comp) {
   
      /** Check if collection is null. */
      if (coll == null) { 
         throw new IllegalArgumentException("List is null!");
      }
      
      /** Check if comparator is null. */
      if (comp == null) {
         throw new IllegalArgumentException("Comparator is null!");
      }
      
      /** Check if list is empty. */
      if (coll.isEmpty()) {
         throw new NoSuchElementException("List is empty!");
      } 
      
      /** Check if k is larger than collection or less than one. */
      if (k > coll.size() || k < 1) {
         throw new NoSuchElementException("There is no k minimum value!");
      }        
      
      /** Check for negative k values. */
      if (k < 0) {
         throw new NoSuchElementException("There is no k minimum value!");
      }
     
      /** Check if list has one value. */
      if (coll.size() == 1) {
         return coll.iterator().next();
      }
      
      List<T> copyColl = new ArrayList<T>(coll);
      List<T> tempArray = new ArrayList<T>(0);
      java.util.Collections.<T>sort(copyColl, comp);
      
      int temp = 1;
      int index = 1;
      
      for (T count : copyColl) {
      
         int result = comp.compare(count, copyColl.get(index));
      
         if (result != 0) {
         
            if (k == temp) {
               return count;
            }
            
            else {
               tempArray.add(count);
               temp++;
            }
         }
         index++;
         
      }
      
      T kmin = tempArray.get(k - 1);
      
      return kmin;
   }


   /**
    * Selects the kth maximum value from the Collection coll as defined by the
    * Comparator comp. If either coll or comp is null, this method throws an
    * IllegalArgumentException. If coll is empty or if there is no kth maximum
    * value, this method throws a NoSuchElementException. This method will not
    * change coll in any way.
    *
    * @param coll    the Collection from which the kth maximum is selected
    * @param k       the k-selection value
    * @param comp    the Comparator that defines the total order on T
    * @return        the kth maximum value in coll
    * @throws        IllegalArgumentException as per above
    * @throws        NoSuchElementException as per above
    */
   public static <T> T kmax(Collection<T> coll, int k, Comparator<T> comp) {
   
      /** Check if collection is null. */
      if (coll == null) { 
         throw new IllegalArgumentException("List is null!");
      }
      
      /** Check if comparator is null. */
      if (comp == null) {
         throw new IllegalArgumentException("Comparator is null!");
      }
      
      /** Check if list is empty. */
      if (coll.isEmpty()) {
         throw new NoSuchElementException("List is empty!");
      } 
      
      /** Check if k is larger than collection or less than one. */
      if (k > coll.size() || k < 1) {
         throw new NoSuchElementException("There is no k maximum value!");
      } 
      
      /** Check for negative k values. */
      if (k < 0) {
         throw new NoSuchElementException("There is no k maximum value!");
      }
      
      /** Check if list has one value. */
      if (coll.size() == 1) {
         return coll.iterator().next();
      }       
      
      List<T> copyColl = new ArrayList<T>(coll);
      List<T> tempArray = new ArrayList<T>(0);
      java.util.Collections.<T>sort(copyColl, java.util.Collections.reverseOrder(comp));
      
      int temp = 1;
      int index = 1;
      
      for (T count : copyColl) {
      
         int result = comp.compare(count, copyColl.get(index));
      
         if (result != 0) {
         
            if (k == temp) {
               return count;
            }
            
            else {
               tempArray.add(count);
               temp++;
            }
         }
         index++;
         
      }
      
      T kmin = tempArray.get(k - 1);
      
      return kmin;
   }


   /**
    * Returns a new Collection containing all the values in the Collection coll
    * that are greater than or equal to low and less than or equal to high, as
    * defined by the Comparator comp. The returned collection must contain only
    * these values and no others. The values low and high themselves do not have
    * to be in coll. Any duplicate values that are in coll must also be in the
    * returned Collection. If no values in coll fall into the specified range or
    * if coll is empty, this method throws a NoSuchElementException. If either
    * coll or comp is null, this method throws an IllegalArgumentException. This
    * method will not change coll in any way.
    *
    * @param coll    the Collection from which the range values are selected
    * @param low     the lower bound of the range
    * @param high    the upper bound of the range
    * @param comp    the Comparator that defines the total order on T
    * @return        a Collection of values between low and high
    * @throws        IllegalArgumentException as per above
    * @throws        NoSuchElementException as per above
    */
   public static <T> Collection<T> range(Collection<T> coll, T low, T high,
                                         Comparator<T> comp) {
                                         
      /** Check if collection is null. */
      if (coll == null) { 
         throw new IllegalArgumentException("List is null!");
      }
      
      /** Check if comparator is null. */
      if (comp == null) {
         throw new IllegalArgumentException("Comparator is null!");
      }
      
      /** Check if list is empty. */
      if (coll.isEmpty()) {
         throw new NoSuchElementException("List is empty!");
      }
      
      ArrayList<T> copyColl = new ArrayList<T>(coll);
      ArrayList<T> range = new ArrayList<T>(0);
      
      int result = comp.compare(low, high);
      
      if (result <= 0) {
      
         for (T count : copyColl) {
         
            int tempLow = comp.compare(count, low);
            int tempHigh = comp.compare(count, high);
         
            if (tempLow >= 0 && tempHigh <= 0) {
               range.add(count);
            }
            
         }
      }
      
      /** Check if range is empty. */
      if (range.size() == 0) {
         throw new NoSuchElementException("No values within range!");
      }
      
      return range;
   }


   /**
    * Returns the smallest value in the Collection coll that is greater than
    * or equal to key, as defined by the Comparator comp. The value of key
    * does not have to be in coll. If coll or comp is null, this method throws
    * an IllegalArgumentException. If coll is empty or if there is no
    * qualifying value, this method throws a NoSuchElementException. This
    * method will not change coll in any way.
    *
    * @param coll    the Collection from which the ceiling value is selected
    * @param key     the reference value
    * @param comp    the Comparator that defines the total order on T
    * @return        the ceiling value of key in coll
    * @throws        IllegalArgumentException as per above
    * @throws        NoSuchElementException as per above
    */
   public static <T> T ceiling(Collection<T> coll, T key, Comparator<T> comp) {
   
      /** Check if collection is null. */
      if (coll == null) { 
         throw new IllegalArgumentException("List is null!");
      }
      
      /** Check if comparator is null. */
      if (comp == null) {
         throw new IllegalArgumentException("Comparator is null!");
      }
      
      /** Check if list is empty. */
      if (coll.isEmpty()) {
         throw new NoSuchElementException("List is empty!");
      }
      
      /** Check if list has one value. */
      if (coll.size() == 1) {
         throw new NoSuchElementException("List has no value!");
      } 
      
      ArrayList<T> copyColl = new ArrayList<T>(coll);
      T ceiling = copyColl.iterator().next();
      
      for (T index : copyColl) {
      
         int result = comp.compare(index, key);
         int smallest = comp.compare(ceiling, index);
      
         if (result >= 0 && smallest >= 0) {
            ceiling = index;
         }
      } 
      
      return ceiling;
   }


   /**
    * Returns the largest value in the Collection coll that is less than
    * or equal to key, as defined by the Comparator comp. The value of key
    * does not have to be in coll. If coll or comp is null, this method throws
    * an IllegalArgumentException. If coll is empty or if there is no
    * qualifying value, this method throws a NoSuchElementException. This
    * method will not change coll in any way.
    *
    * @param coll    the Collection from which the floor value is selected
    * @param key     the reference value
    * @param comp    the Comparator that defines the total order on T
    * @return        the floor value of key in coll
    * @throws        IllegalArgumentException as per above
    * @throws        NoSuchElementException as per above
    */
   public static <T> T floor(Collection<T> coll, T key, Comparator<T> comp) {
   
      /** Check if collection is null. */
      if (coll == null) { 
         throw new IllegalArgumentException("List is null!");
      }
      
      /** Check if comparator is null. */
      if (comp == null) {
         throw new IllegalArgumentException("Comparator is null!");
      }
      
      /** Check if list is empty. */
      if (coll.isEmpty()) {
         throw new NoSuchElementException("List is empty!");
      }
      
     /** Check if list has one value. */
      if (coll.size() == 1) {
         throw new NoSuchElementException("List has no value!");
      }    
      
      ArrayList<T> copyColl = new ArrayList<T>(coll);
      T floor = copyColl.iterator().next();
      
      for (T index : copyColl) {
      
         int result = comp.compare(index, key);
         int greatest = comp.compare(floor, index);
      
         if (result >= 0 && greatest <= 0) {
            floor = index;
         }
      }       
      
      return floor;
   }

}
