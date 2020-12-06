import java.util.Scanner;
// import java.io.File;
import java.io.FileNotFoundException;
/**
* Get the file and print the info.
*
* Project 11
* @author Haden Stuart
* @version 4/20/18
*/
public class BunniesPart3 {

/**
* Get the file and print the list.
*
* @param args for file
* 
*/  
   public static void main(String[] args) {
   
      try {
         Scanner userInput = new Scanner(System.in);
      
         System.out.print("Enter file name: ");
         String fileName = userInput.nextLine();
      
         BunnyList list = new BunnyList();
         list.readBunnyFile(fileName);
      
         System.out.println(list.summary());
         System.out.println(list.listByName());
         System.out.println(list.listByCost()); 
         System.out.println(list.excludedRecordsList());
      }
      
      catch (FileNotFoundException e) {
         System.out.println("*** File not found. \nProgram ending.");
      }
   }
}