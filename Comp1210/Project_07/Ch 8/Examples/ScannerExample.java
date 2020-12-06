import java.util.Scanner;

/** ScannerExample - This example is intended to illustrate 
 *  the capabilities of the jGRASP viewers for the Scanner
 *  class and arrays.
 *  
 *  Click the "Run in Canvas" button on the toolbar. Then 
 *  on the canvas, click the "Play" button. **/
 
public class ScannerExample {

   /** Reads in a line of text, stores words in an array,
    *  stores words in reverse order in another array,
    *  prints the words.
    *  @param args is not used  
    */
   public static void main(String[]args) {
   	
      Scanner scan = new Scanner(System.in);
   
      System.out.println("Enter a line of text (max 20 words): ");
      String sentence = scan.nextLine();
      
      Scanner scanSentence = new Scanner(sentence); 
      scanSentence.useDelimiter("\\W");
      String[] words = new String[20];
      String[] wordsReverse = new String[20];
      
      int wc = 0;
      while (scanSentence.hasNext()) {
         words[wc] = scanSentence.next();
         wc++; 
      }
      
      int k = 0;
      for (int j = wc - 1; j >= 0; j--) {
         wordsReverse[k] = words[j];
         k++;
      }
   
      for (int j = wc - 1; j >= 0; j--) {
         System.out.print(words[j] + " ");
      }
   }
}