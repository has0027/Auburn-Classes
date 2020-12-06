/**
 * Demonstrates finding the sum of the columns 
 * of a two-dimensional array of ints.
 */
public class TwoDArraySumElements
{
   /**
    * Creates a 2D array of ints, sums the columns,
    * then prints them out.
    * @param args not used.
    */
   public static void main(String[] args)
   {
      // Create and load the table with int value; 
      // reserve last row as zeros for column sums.
      int[][] table = 
         {
            {3, 7, 9, 11},
            {2, 4, 6, 8},
            {5, 10, 15, 20},
         };
      // Sum each element.
      int total = 0;
      for (int row = 0; row < table.length; row++) {
         for (int col = 0; col < table[row].length; col++) {
            total += table[row][col];
         }
      }
      
      // Print the table
      for (int row = 0; row < table.length; row++) {
         for (int col = 0; col < table[row].length; col++) {
            System.out.print(table[row][col] + "\t");
         }
         System.out.println();
      }
      
      System.out.println("\nTotal: " + total);
      
   }
}
