import java.util.ArrayList;
import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;
/**
* Prints info about a conical frustum file.
* 
* Project 5
* @author Haden Stuart
* @version 2/23/18
*/
public class ConicalFrustumListApp
{

/**
* Get the result.
*
* @param args not used
* @throws FileNotFoundException outputs error 
*/
   public static void main(String[] args) throws FileNotFoundException
   {
      String filename;
      
      ArrayList<ConicalFrustum> conicalInput = new ArrayList<ConicalFrustum>();
   
      Scanner userInput = new Scanner(System.in);
      
      System.out.print("Enter file name: ");
      filename = userInput.nextLine();
      
      Scanner fileInput = new Scanner(new File(filename));
      
      String listName = fileInput.nextLine();
      
      while (fileInput.hasNext())
      {
         String label = fileInput.nextLine();
         double radius1 = Double.parseDouble(fileInput.nextLine());
         double radius2 = Double.parseDouble(fileInput.nextLine());
         double height = Double.parseDouble(fileInput.nextLine());
         
         ConicalFrustum conicalInfo = new ConicalFrustum(label, 
            radius1, radius2, height);
         conicalInput.add(conicalInfo);     
      }
      
      ConicalFrustumList conicalArray = new ConicalFrustumList(listName, 
         conicalInput);  
   
      System.out.println("\n" + conicalArray);
      System.out.println("\n" + conicalArray.summaryInfo());
   
   }
}