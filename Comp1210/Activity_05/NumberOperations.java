/**
* Create a number class that will perform various operations.
*
* Activity 5
* @author Haden Stuart
* @version 2/19/18
**/
public class NumberOperations
{
/**
* Create a class that will test various operations.
*
* @param args command line arguments
*/

// Instance variables

   private int number;
   
// Constructor

/**
* Set the number variable.
*
* @param numberIn set number
*/
   public NumberOperations(int numberIn)
   {
      number = numberIn;
   }

// Methods

/**
* Get the value.
*
* @return set the value 
*/
   public int getValue()
   {
      return number;
   }
   
/**
* Get the number of odds.
*
* @return get the number of odds
*/
   public String oddsUnder()
   {
      String output = "";
      int i = 0;
      while (i < number)
      {
         if (i % 2 != 0)
         {
            output += i + "\t";
         }
         i++;
      }
      return output;
   }
/**
* Get the number of powers under two.
*
* @return get the number of powers under two
*/ 
   public String powersTwoUnder()
   {
      String output = "";
      int powers = 1;
      while (powers < number)
      {
         output += powers + "\t";
         powers = powers * 2;
      }
      return output;
   }
   
/**
* Check if the input is greater or less than the compared.
*
* @param compareNumber compare the input
* @return check the compared number
*/
   public int isGreater(int compareNumber)
   {
      if (number > compareNumber)
      {
         return 1;
      }
      else if (number < compareNumber)
      {
         return -1;
      }
      else
      {
         return 0;
      }
   }
   
/**
* Return the number.
*
* @return return the number
*/
   public String toString()
   {
      return number + "";
   }
   
}