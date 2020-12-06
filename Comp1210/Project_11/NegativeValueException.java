/**
* Create a negative value exception.
*
* Project 11
* @author Haden Stuart
* @version 4/20/18
*/
public class NegativeValueException extends Exception {

/**
* Set the super.
*
*/
   public NegativeValueException() {
      super("Numeric values must be nonnegative");
   }

/**
* Set the super.
*
* @param number get the negative number
*/
   public NegativeValueException(double number) {
      super("Numeric values must be nonnegative");
   }
}