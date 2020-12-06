import java.util.Arrays;

/**
* Defines a library of selection methods
* on arrays of ints.
*
* @author Haden Stuart (has0027@auburn.edu)
* @version 8/23/18
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
    * Selects the minimum value from the array a. This method
    * throws IllegalArgumentException if a is null or has zero
    * length. The array a is not changed by this method.
    */
   public static int min(int[] a) {
   
   /** Check for null array. */
      if (a == null) { 
         throw new IllegalArgumentException("Array is null!");
      }
      
      /** Check for array with no values. */
      else if (a.length == 0) {
         throw new IllegalArgumentException("Array has no values!");
      }
      
      int min = a[0];
      
      /** Find the min value. */
      for (int i = 0; i < a.length; i++) {
         if (a[i] < min) {
            min = a[i];
         }
         
      }
   
   
      return min;
   }


   /**
    * Selects the maximum value from the array a. This method
    * throws IllegalArgumentException if a is null or has zero
    * length. The array a is not changed by this method.
    */
   public static int max(int[] a) {
   
   /** Check for null array. */
      if (a == null) { 
         throw new IllegalArgumentException("Array is null!");
      }
      
      /** Check for array with no values. */
      else if (a.length == 0) {
         throw new IllegalArgumentException("Array has no values!");
      }
      
      int max = a[0];
      
      /** Find the max value. */
      for (int i = 0; i < a.length; i++) {
         if (a[i] > max) {
            max = a[i];
         }
         
      }
   
      return max;
   }


   /**
    * Selects the kth minimum value from the array a. This method
    * throws IllegalArgumentException if a is null, has zero length,
    * or if there is no kth minimum value. Note that there is no kth
    * minimum value if k < 1, k > a.length, or if k is larger than
    * the number of distinct values in the array. The array a is not
    * changed by this method.
    */
   public static int kmin(int[] a, int k) {
   
      int kmin = -1;
      int temp = 9999;
   
   /** Check for null array. */
      if (a == null) { 
         throw new IllegalArgumentException("Array is null!");
      }
      
      /** Check for array with no values. */
      else if (a.length == 0) {
         throw new IllegalArgumentException("Array has no values!");
      }
      
      /** Check if k is larger than the array. */
      else if (k > a.length) {
         throw new IllegalArgumentException("There is no k minimum value!");
      }
      
      /** Find the kmin value. */
      else {
         for (int i = 0; i < k; i++) {
            temp = 9999;
            for (int j = 0; j < a.length; j++) {
               if (a[j] < temp && a[j] > kmin) {
                  temp = a[j]; 
               }
            }
            kmin = temp;
         }
      }
      
   /** Check for empty kmin value. */
      if (kmin == -1) {
         throw new IllegalArgumentException("There is no k minimum value!");
      }
   
      return kmin;
   }


   /**
    * Selects the kth maximum value from the array a. This method
    * throws IllegalArgumentException if a is null, has zero length,
    * or if there is no kth maximum value. Note that there is no kth
    * maximum value if k < 1, k > a.length, or if k is larger than
    * the number of distinct values in the array. The array a is not
    * changed by this method.
    */
   public static int kmax(int[] a, int k) {
   
      int kmax = 9999;
      int temp = -9999;

      /* Check for null array. */
      if (a == null) {
         throw new IllegalArgumentException("Array is null!");
      }
      
      /** Check for array with no values. */
      else if (a.length == 0) {
         throw new IllegalArgumentException("Array has no values!");
      }
      
      /** Check if k is larger than the array. */
      else if (k > a.length) {
         throw new IllegalArgumentException("There is no k maximum value!");
      }
      
      /** Find the kmax value. */
      else {
         for (int i = 0; i < k; i++) {
            temp = -9999;
            for (int j = 0; j < a.length; j++) {
               if (a[j] > temp && a[j] < kmax) {
                  temp = a[j]; 
               }
            }
            kmax = temp;
         }
      }
      
   /** Check for empty kmax value. */
      if (kmax == 9999) {
         throw new IllegalArgumentException("There is no k maximum value!");
      }
   
      return kmax;
   }


   /**
    * Returns an array containing all the values in a in the
    * range [low..high]; that is, all the values that are greater
    * than or equal to low and less than or equal to high,
    * including duplicate values. The length of the returned array
    * is the same as the number of values in the range [low..high].
    * If there are no qualifying values, this method returns a
    * zero-length array. Note that low and high do not have
    * to be actual values in a. This method throws an
    * IllegalArgumentException if a is null or has zero length.
    * The array a is not changed by this method.
    */
   public static int[] range(int[] a, int low, int high) {
   
      int count = 0;
      int temp = 0;
   
   /** Check for null array. */
      if (a == null) { 
         throw new IllegalArgumentException("Array is null!");
      }
      
      /** Check for array with no values. */
      else if (a.length == 0) {
         throw new IllegalArgumentException("Array has no values!");
      }
      
      /** Get the new array length. */
      else {
         for (int i = 0; i < a.length; i++) {
            if (a[i] <= high && a[i] >= low) {
               count++;
            }
         }
      }
    
   /** Make the new array. */  
      int[] range = new int[count];
    
   /** Add each value in the range to the new array. */  
      for (int i = 0; i < a.length; i++) {
         if (a[i] <= high && a[i] >= low) {
            range[temp] = a[i];
            temp++;
         }
      }
   
   /** Check for array with no values. */
      if (range.length == 0) {
         range = new int[0];
      }
      
      return range;
   }


   /**
    * Returns the smallest value in a that is greater than or equal to
    * the given key. This method throws an IllegalArgumentException if
    * a is null or has zero length, or if there is no qualifying
    * value. Note that key does not have to be an actual value in a.
    * The array a is not changed by this method.
    */
   public static int ceiling(int[] a, int key) {
   
      int ceiling = -99;
      int temp = 10;
   
   /** Check for null array. */
      if (a == null) { 
         throw new IllegalArgumentException("Array is null!");
      }
      
      /** Check for array with no values. */
      else if (a.length == 0) {
         throw new IllegalArgumentException("Array has no values!");
      }
      
      /** Find the ceiling value. */
      else {
         for (int i = 0; i < a.length; i++) {
            if (a[i] >= key && a[i] < temp) {
               temp = a[i];
               ceiling = temp;
            }
         }
      }
      
      /** Check for no ceiling values. */
      if (ceiling == -99) {
         throw new IllegalArgumentException("Array has no ceiling values!");
      }
   
      return ceiling;
   }


   /**
    * Returns the largest value in a that is less than or equal to
    * the given key. This method throws an IllegalArgumentException if
    * a is null or has zero length, or if there is no qualifying
    * value. Note that key does not have to be an actual value in a.
    * The array a is not changed by this method.
    */
   public static int floor(int[] a, int key) {
   
      int floor = -99;
      int temp = -99;
   
   /** Check for null array. */
      if (a == null) { 
         throw new IllegalArgumentException("Array is null!");
      }
      
      /** Check for array with no values. */
      else if (a.length == 0) {
         throw new IllegalArgumentException("Array has no values!");
      }
      
      /** Find the floor value. */
      else {
         for (int i = 0; i < a.length; i++) {
            if (a[i] <= key && a[i] >= temp) {
               temp = a[i];
               floor = temp;
            }
         }
      }
      
      /** Check for no floor values. */
      if (floor == -99) {
         throw new IllegalArgumentException("Array has no floor values!");
      }
   
      return floor;
   }

}
