/**
* Create a class to hold an array of values
* and create methods to interact with the values.
* 
* Activity 7
* @author Haden Stuart
* @version 3/4/18
*/
public class Scores
{

// Instance variables

   private int[] numbers;

// Constructor

/**
* Get the numbers.
*
* @param numbersIn get the numbers
**/
   public Scores(int[] numbersIn)
   {
      numbers = numbersIn;
   }

// Methods

/**
* Get the even numbers.
*
* @return find the even values
**/
   public int[] findEvens()
   {
      int numberEvens = 0;
   
      for (int i = 0; i < numbers.length; i++)
      {
         if (numbers[i] % 2 == 0)
         {
            numberEvens++;
         }
      }
      
      int[] evens = new int[numberEvens];
      
      int count = 0;
      for (int i = 0; i < numbers.length; i++)
      {
         if (numbers[i] % 2 == 0)
         {
            evens[count] = numbers[i];
            count++;
         }
      }
      
      return evens;
   }

/**
* Get the odd numbers.
*
* @return find the odd values
**/
   public int[] findOdds()
   {
      int numberOdds = 0;
   
      for (int i = 0; i < numbers.length; i++)
      {
         if (numbers[i] % 2 == 1)
         {
            numberOdds++;
         }
      }
      
      int[] odds = new int[numberOdds];
      
      int count = 0;
      for (int i = 0; i < numbers.length; i++)
      {
         if (numbers[i] % 2 == 1)
         {
            odds[count] = numbers[i];
            count++;
         }
      }
      
      return odds; 
   }
   
/**
* Get the average numbers.
*
* @return find the average
**/  
   public double calculateAverage()
   {
      int sum = 0;
   
      for (int i = 0; i < numbers.length; i++)
      {
         sum += numbers[i];
      }
      return (double) sum / (double) numbers.length;
   }
   
/**
* Get the string.
*
* @return return the string
**/ 
   public String toString()
   {
      String result = "";
   
      for (int i = 0; i < numbers.length; i++)
      {
         result += numbers[i] + "\t";
      }
      
      return result;
   }

/**
* Get the string in reverse.
*
* @return return the string in reverse
**/   
   public String toStringInReverse()
   {
      String result = "";
   
      for (int i = numbers.length - 1; i > -1; i--)
      {
         result += numbers[i] + "\t";
      }
      
      return result;
   }

}