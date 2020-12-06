import java.util.Scanner;
/**
* Calculates the slope of two given sets .
* 
* Project 2
* @author Haden Stuart
* @version 1/24/18
*/
public class SlopeIntercept
{
 /**
* Prints the slope of two sets of intercepts along with the x and y intercepts.
*
* @param args command line arguments
*/
   public static void main(String[] args)
   {
      Scanner userInput = new Scanner(System.in);
      int x1 = 0;
      int y1 = 0;
      int x2 = 0;
      int y2 = 0;
      
      // Prompt user for x1 and y1
      System.out.println("Enter the X and Y coordinates of starting point:");
      System.out.print("\tx1 = ");
      x1 = userInput.nextInt();
      System.out.print("\ty1 = ");
      y1 = userInput.nextInt();
      
      // Prompt user for x2 and y2
      System.out.println("Enter the X and Y coordinates of ending point:");
      System.out.print("\tx2 = ");
      x2 = userInput.nextInt();
      System.out.print("\ty2 = ");
      y2 = userInput.nextInt();
      
      // Add rule that x1=/=x2
      if (x1 == x2)
      {
         System.out.println("Slope: \"undefined\"");
      }
      
      else
      {
      
      // Calculate the slope, x intercept, and y intercept
         double slope = ((y2 - y1) / (x2 - x1));
         double yIntercept = (y1 - slope * x1);
         double xIntercept = (-1 * (yIntercept / slope));
         
         // Add rule for when y1==y2
         if (y1 == y2)
         {
            System.out.println("Slope: " + slope);
            System.out.println("Y intercept: " + yIntercept);
            System.out.println("X intercept: \"undefined\"");  
         }
         
         // Print the slope and x and y intercepts
         else
         { 
            System.out.println("Slope: " + slope);
            System.out.println("Y intercept: " + yIntercept);
            System.out.println("X intercept: " + xIntercept);
         }
      }
      
   }
}