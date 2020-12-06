import java.util.Scanner;
import java.text.DecimalFormat;
/**
* Evaluate the equation from the given user input.
* 
* Project 3
* @author Haden Stuart
* @version 2/2/18
*/
public class ExpressionEvaluator
{
/**
* Print the result of the equation from the user input.
*
* @param args command line arguments
*/
   public static void main(String[] args)
   {
      Scanner userInput = new Scanner(System.in);
      double value = 0;
      
      
      // Prompt the user for x value
      System.out.print("Enter a value for x: ");
      value = userInput.nextDouble();
   
      // Calculate the numerator
      double powNumerator = Math.pow(value, 10);
      double absNumerator = Math.abs(10.4 * powNumerator - value + 1);
      double numerator = Math.sqrt(absNumerator);
      
      // Calculate the denominator
      double powFirst = Math.pow(value, 4);
      double powSecond = Math.pow(value, 2);
      double denominator = (3.5 * powFirst + 2.5 * powSecond
         + 1.5 * value + 0.5);
         
      // Calculate the result
      double result = (numerator / denominator);
      
      // Print the result
      System.out.println("Result: " + result);
      
      // Find the number of digits around the decimal point
      String result1 = Double.toString(result);
      int leftDecimal =  result1.indexOf(".");
      int totalDecimal = result1.length();
      int rightDecimal = (totalDecimal - (leftDecimal + 1));
      
      // Print the number of digits on each side of the decimal point
      System.out.println("# digits to left of decimal point: " 
         + leftDecimal);
      System.out.println("# digits to right of decimal point: " 
         + rightDecimal);
      
      // Format the result
      DecimalFormat fmt = new DecimalFormat("#,##0.0####");
      String formatted = fmt.format(result);
      
      // Print the formatted result
      System.out.println("Formatted Result: " + formatted); 
      
   }
}