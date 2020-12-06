import java.util.Scanner;
/**
* Create a ConicalFrustumApp class.
* 
* Project 4
* @author Haden Stuart
* @version 2/9/18
*/
public class AnotherTry
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
      ConicalFrustum shapeLabel = new ConicalFrustum(label, 0, 0, 0);
      shapeLabel.setLabel(label);
      
   // Prompt user for radius1
      System.out.print("\tradius1: ");
      double radius1 = userInput.nextDouble();
      ConicalFrustum shapeRadius1 = new ConicalFrustum(label, radius1, 0, 0); 
      shapeRadius1.setRadius1(radius1);
      
      if (radius1 < 0)
      {
         System.out.print("Error: radius1 must be non-negative.");
      }
      else
      {
      // Prompt user for radius2
         System.out.print("\tradius2: ");
         double radius2 = userInput.nextDouble();
         ConicalFrustum shapeRadius2 = new ConicalFrustum(label, radius1, radius2, 0);
         shapeRadius2.setRadius2(radius2);
         
         if (radius2 < 0)
         {
            System.out.print("Error: radius2 must be non-negative.");
         }
         else
         {  
         // Prompt user for height
            System.out.print("\theight: ");
            double height = userInput.nextDouble(); 
            ConicalFrustum shapeHeight = new ConicalFrustum(label, radius1, radius2, height);
            shapeHeight.setHeight(height);
         
            if (height < 0)
            {
               System.out.print("Error: height must be non-negative.");
            }
            else
            {
               ConicalFrustum shapeTotal = new ConicalFrustum(label, radius1, radius2, height);
               System.out.print(shapeTotal);
            }
         }
      }           
      
   }
}