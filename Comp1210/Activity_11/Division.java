/**
* Divide input numbers.
* 
* Activity 11
* @author Haden Stuart
* @version 4/16/18
*/
public class Division {

/**
* Divide the ints.
*
* @param num get the numerator
* @param denom get the denominator
* @return an int
*/
   public static int intDivide(int num, int denom) {
   
      try {
         return num / denom; 
      }
      catch (ArithmeticException e) {
         return 0;
      }
   }

/**
* Divide the ints and get a float.
*
* @param num get the numerator
* @param denom get the denominator
* @return a double
*/
   public static double decimalDivide(int num, int denom) {
   
      if (denom == 0) {
         throw new IllegalArgumentException("The denominator "
            + "cannot be zero.");
      }
      
      return (float) num / denom;
   }
}