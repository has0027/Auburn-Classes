import java.util.Scanner;
/**
* Create a ConicalFrustumApp class.
* 
* Project 4
* @author Haden Stuart
* @version 2/9/18
*/
public class Main
{
/**
* Create a ConicalFrustumApp class.
*
* @param args command line arguments
*/
   public static void main(String[] args)
   {
   // Create the scanner
      Scanner userInput = new Scanner(System.in);
   
   // Print the first line
      System.out.println("Enter label, radius1, radius2,"
         + " and height for a conical frustum.");
       
   // Prompt user for label      
      System.out.print("\tlabel: ");
      String label = userInput.nextLine();
      label = label.trim(); 
      
   // Prompt user for radius1
      System.out.print("\tradius1: ");
      double radius1 = userInput.nextDouble();  
      
      if (radius1 < 0)
      {
         System.out.print("Error: radius1 must be non-negative.");
      }
      else
      {
      // Prompt user for radius2
         System.out.print("\tradius2: ");
         double radius2 = userInput.nextDouble();
        
         if (radius2 < 0)
         {
            System.out.print("Error: radius2 must be non-negative.");
         }
         else
         {
         // Prompt user for height
            System.out.print("\theight: ");
            double height = userInput.nextDouble();
            
            if (height < 0)
            {
               System.out.print("Error: height must be non-negative.");
            }
            else
            {
               ConicalFrustum shape = new ConicalFrustum(label, radius1, radius2, height);
               shape.setLabel(label);
               shape.setRadius1(radius1);
               shape.setRadius2(radius2);
               shape.setHeight(height);
               System.out.print(shape);
            }
         }
      }
   }
}