import java.util.ArrayList;
import java.util.Scanner;
import java.io.FileNotFoundException;
/**
* Create a menu with eight options for the user.
* 
* Project 6
* @author Haden Stuart
* @version 3/2/18
*/ 
public class ConicalFrustumListMenuApp
{
/**
* Get the result.
*
* @param args not used
* @throws FileNotFoundException outputs error 
*/
   public static void main(String[] args) throws FileNotFoundException
   {
      String opListName = "no list name";
      ArrayList<ConicalFrustum> cfList = new ArrayList<ConicalFrustum>();
      ConicalFrustumList opList = new ConicalFrustumList(opListName, cfList);
      String opFileName = "no file name";
   
      String label;
      double radius1, radius2, height;
      String input = "";
      Scanner scan = new Scanner(System.in);
      
      System.out.println("ConicalFrustum List System Menu\n"
         + "R - Read File and Create ConicalFrustum List\n" 
         + "P - Print ConicalFrustum List\n" 
         + "S - Print Summary\n"
         + "A - Add ConicalFrustum\n"
         + "D - Delete ConicalFrustum\n"
         + "F - Find ConicalFrustum\n"
         + "E - Edit ConicalFrustum\n"
         + "Q - Quit");
   
      do
      {
         System.out.print("Enter Code [R, P, S, A, D, F, E, or Q]: ");
         input = scan.nextLine();
         if (input.length() == 0)
         {
            continue;
         }   
         input = input.toUpperCase();
         char inputLetter = input.charAt(0);
         switch (inputLetter)
         {
            case 'R': //Read file and create list
               System.out.print("File name: ");
               opFileName = scan.nextLine();
               opList = opList.readFile(opFileName);
               System.out.println("File read in and " 
                  + "ConicalFrustum List created\n");
               break;
         
            case 'P': //Print list
               System.out.println("\n" + opList);
               break;
         
            case 'S': //Print summary
               System.out.println("\n" + opList.summaryInfo() + "\n");
               break;
         
            case 'A': //Add conical frustum
               System.out.print("\tLabel: ");
               label = scan.nextLine();
               System.out.print("\tRadius1: ");
               radius1 = Double.parseDouble(scan.nextLine());
               System.out.print("\tRadius2: ");
               radius2 = Double.parseDouble(scan.nextLine());
               System.out.print("\tHeight: ");
               height = Double.parseDouble(scan.nextLine());
               
               opList.addConicalFrustum(label, radius1, radius2, height);
              
               System.out.println("*** ConicalFrustum added ***");
               break;
               
            case 'D': //Delete conical frustum
               System.out.print("\tLabel: ");
               label = scan.nextLine();
               
               ConicalFrustum deleted = opList.deleteConicalFrustum(label);
               
               if (deleted != null)
               {
                  System.out.println("\t\"" + label + "\"" + " deleted\n");
               }
               else
               {
                  System.out.println("\t\"" + label + "\"" + " not found\n");
               }
               
               break;
               
            case 'F': //Find conical frustum
               System.out.print("\tLabel: ");
               label = scan.nextLine();
               
               ConicalFrustum found = opList.findConicalFrustum(label);
               
               if (found != null)
               {
                  System.out.println(opList.findConicalFrustum(label) + "\n");
               }
               else
               {
                  System.out.println("\t\"" + label + "\"" + " not found\n");
               }
               break;
         
            case 'E': //Edit conical frustum
               System.out.print("\tLabel: ");
               label = scan.nextLine();
               System.out.print("\tRadius1: ");
               radius1 = Double.parseDouble(scan.nextLine());
               System.out.print("\tRadius2: ");
               radius2 = Double.parseDouble(scan.nextLine());
               System.out.print("\tHeight: ");
               height = Double.parseDouble(scan.nextLine());
               
               boolean edited = opList.editConicalFrustum(label,
                  radius1, radius2, height);
               
               if (edited)
               {
                  System.out.println("\t\"" + label + "\"" 
                     + " successfully edited");
               }
               else
               {
                  System.out.println("\t\"" + label + "\"" + " not found");
               }
               
               break;
         
            case 'Q': //Quit
               break;
         
            default : //Loop again
               System.out.println("\t*** invalid code ***\n");
               break;
         }
      
      } while (!input.equalsIgnoreCase("Q"));
   }
}