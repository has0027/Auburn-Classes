/**
 * Demonstrates a simple search and replace for an
 * array.
 */
public class SearchArrayExample
{
   /**
    * Creates array of ints with a list initializer, does 
    * performs a search and replace using a static method. 
    * @param args not used.
    */
   public static void main(String[] args)
   {
   // Create arrays and print values.
      int[] myInts = {12, 34, 6, 34, 17};
      for (int i : myInts) {
         System.out.println(i);
      }
         
      System.out.println("\n****** After Search and Replace *****");
      searchAndReplace(myInts, 34, 999);
      for (int jj : myInts) {
         System.out.println(jj);
      }
   }
   
   static void searchAndReplace(int[] ia, int sVal, int rVal)
   {
      for (int i = 0; i < ia.length; i++) {
         if (ia[i] == sVal) {
            ia[i] = rVal;
         }
      }
   }
}
