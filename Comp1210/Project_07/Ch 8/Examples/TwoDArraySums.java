/**
 * Demonstrates finding the sum of the columns 
 * of a two-dimensional array of ints.
 *
 * @author J. Cross
 */
public class TwoDArraySums
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
      // Sum each column by traversing each row.
      for (int row = 0; row < table.length - 1; row++)
      {
         for (int col = 0; col < table[row].length; col++)
         {
            table[table.length - 1][col] += table[row][col];
         }
      }
      
      // Reset the last row to zeros in prepartion to sum again   
      for (int col = 0; col < table[3].length; col++) {
         table[table.length - 1][col] = 0;
      }
   
      // Sum each column by traversing each column.
      for (int col = 0; col < table.length; col++)
      {
         for (int row = 0; row < table[col].length - 1; row++)
         {
            table[table.length - 1][col] += table[row][col];
         }
      }
   
      // Print the table
      for (int row = 0; row < table.length; row++)
      {
         for (int col = 0; col < table[row].length; col++) {
            System.out.print(table[row][col] + "\t");
         }
         System.out.println();
      }
   }
}
