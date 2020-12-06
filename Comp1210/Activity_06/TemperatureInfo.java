import java.util.ArrayList;
import java.util.Scanner;
/**
* Store values representing daily temperatures.
* 
* Activity 6
* @author Haden Stuart
* @version 2/26/18
*/
public class TemperatureInfo
{
/**
* Get the temps.
*
* @param args not used
*/
   public static void main(String[] args)
   {
      Scanner userInput = new Scanner(System.in);
      ArrayList<Integer> tempsList = new ArrayList<Integer>();
      String tempInput = "";
      
      // Add each temperature to the array
      do
      {
         System.out.print("Enter a temperature (or nothing to end list): ");
         tempInput = userInput.nextLine().trim();
         if (!tempInput.equals(""))
         {
            tempsList.add(Integer.parseInt(tempInput));
         }
      } while (!tempInput.equals(""));
      
      Temperatures temps = new Temperatures(tempsList);
      
      // Create a user menu
      char choice = 'E';
      do
      {
         System.out.print("Enter choice - [L]ow temp," 
            + " [H]igh temp, [P]rint, [E]nd: : ");
         choice = userInput.nextLine().toUpperCase().charAt(0);
         switch(choice)
         {
            case 'L':
               System.out.println("\tLow is " + temps.getLowTemp());
               break;
         
            case 'H':
               System.out.println("\tHigh is " + temps.getHighTemp());
               break;
         
            case 'P':
               System.out.println(temps);
               break;
         
            case 'E':
               System.out.println("\tDone");
               break;
         
            default:
               System.out.println("\tInvalid choice");
         }
      } while (choice != 'E');  
   }
}