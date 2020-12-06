import java.util.Scanner;

/**
 * Reads in a sentence and prints out words
 * in reverse order.
 */
public class ReverseWords2 {

   /**
    * Reads in a line of text, stores words in an array,
    * stores words in reverse order in another array,
    * prints the words.
    * @param args not used.
    */
   public static void main(String[]args) {
   	
      Scanner scan = new Scanner(System.in);
   
      System.out.println("Enter a line of text (max 20 words): ");
      //scan.useDelimiter("\\W");
      String[] words = new String[20];
      String[] wordsReverse = new String[20];
      int wc = 0;
      while (scan.hasNext()) {
         words[wc] = scan.next();
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