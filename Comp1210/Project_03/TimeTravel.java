import java.util.Scanner;
import java.text.DecimalFormat;
import java.util.Random;
/**
* Read coded ticket info and create a description
* of the travel.
* 
* Project 3
* @author Haden Stuart
* @version 2/2/18
*/
public class TimeTravel
{
/**
* Read user input to create a ticket description.
*
* @param args command line arguments
*/
   public static void main(String[] args)
   {
      Scanner userInput = new Scanner(System.in);
   
   // Prompt user for code
      System.out.print("Enter ticket code: ");
      String rawCode = userInput.nextLine();
      String code = rawCode.trim();
      System.out.println();
      
      int characters = code.length();
   
   // Set code guidelines
      if (characters < 26)
      {
         System.out.println("*** Invalid ticket code ***");
         System.out.println("Ticket code must be at least 26 characters");
      }
      else
      {
      
      // Get the time from the original code
         String timeStart = code.substring(0, 2);
         String timeEnd = code.substring(2, 4); 
         System.out.print("Time: " + timeStart + ":" + timeEnd);
      
      // Get the date from the orignal code
         String dateStart = code.substring(4, 6);
         String dateMid = code.substring(6, 8);
         String dateEnd = code.substring(8, 12);
         System.out.print("   Date: " + dateStart + "/" 
            + dateMid + "/" + dateEnd);
      
      // Get the seat from the original code
         String seat = code.substring(22, 25);
         System.out.println("   Seat: " + seat);
         
      // Get the itinerary from the original code
         String itinerary = code.substring(25);
         System.out.println("Itinerary: " + itinerary);   
         
      // Get the price from the original code
         String codePrice = code.substring(13, 22);
         
      // Convert price to double from string
         double price = Double.parseDouble(codePrice) / 100; 
         
       // Check the category
         char category = code.charAt(12);
         char student = 's';
         char employee = 'e';
         
      // Create the cost
         double cost;
         
         if (category == student)
         {
            cost = (price - (price * 0.50));
         }
         else if (category == employee)
         {
            cost = (price - (price * 0.25));
         }
         else 
         {
            cost = price;
         }
       
       // Format the price and cost
         DecimalFormat costFormat = new DecimalFormat("$#,###.00"); 
         String nPrice = costFormat.format(price);
         String nCost = costFormat.format(cost);
         
      // Create a random prize number
         Random prizeGen = new Random();
         int prize = prizeGen.nextInt(10000);
         
      // Format the prize number 
         DecimalFormat prizeFormat = new DecimalFormat("0000");
         String nPrize = prizeFormat.format(prize);
      
      // Print the price, cost, category, and prize number
         System.out.print("Price: " + nPrice);
         System.out.print("   Cost: " + nCost);
         System.out.println("   Category: " + category);
         System.out.print("Prize Number: " + nPrize);
      
      
      }
   
   }
}