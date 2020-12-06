import java.util.Scanner;
/**
* Calculates the number of bills an ATM will dispense.
* 
* Project 2
* @author Haden Stuart
* @version 1/24/18
*/
public class ATM
{
/**
* Prints the calculate number of bills the ATM will dispense.
*
* @param args command line arguments
*/
   public static void main(String[] args)
   {
      Scanner userInput = new Scanner(System.in);
      int amount = 0;
      
      // Prompt the user for the amount
      System.out.print("Enter the amount: ");
      amount = userInput.nextInt();
      
      // Display the bills denomination
      if (amount > 300)
      {
      // Set the max input amount
         System.out.println("Limit of $300 exceeded! ");
      }
      else 
      {
      // Seperate the bills to add up to the amount
         int twenty = (amount / 20);
         int ten = ((amount - twenty * 20) / 10);
         int five = ((amount - twenty * 20 - ten * 10) / 5);
         int one = ((amount - twenty * 20 - ten * 10 - five * 5) / 1);
         
      // Print each of the denomination amounts
         System.out.println("Bills by denomination: ");
         System.out.println("\t$20: " + (twenty));
         System.out.println("\t$10: " + (ten));
         System.out.println("\t$5: " + (five));
         System.out.println("\t$1: " + (one));
         
      // Print the proof of the amount
         System.out.print("$" + amount + " = ");
         System.out.print("(" + twenty + " * $20) + ");
         System.out.print("(" + ten + " * $10) + ");
         System.out.print("(" + five + " * $5) + ");
         System.out.print("(" + one + " * $1)");
         
      }
      
   }

}