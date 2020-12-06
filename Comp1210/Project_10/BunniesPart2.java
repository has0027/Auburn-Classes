import java.util.Scanner;
// import java.io.File;
import java.io.FileNotFoundException;
/**
* Get the file and print the info.
*
* Project 10
* @author Haden Stuart
* @version 4/13/18
*/
public class BunniesPart2 {

/**
* Get the file and print the list.
*
* @param args for file
* @throws FileNotFoundException outputs error 
*/  
   public static void main(String[] args)
      throws FileNotFoundException {
   
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
}