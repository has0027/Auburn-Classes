/**
 * Demonstrates two-dimensional array of ints
 * with rows of different lengths 
 *
 * @author J. Cross
 */
   public class TwoDArrayRagged
   {
   /**
    * Creates a 2D array of ints with rows of 
    * different lengths, then prints them out.
    */
      public static void main (String[] args)
      {
      // Create and load the table with int value; 
         int[][] table = {
               					{3, 7},
               					{2, 4, 6, 8},
               					{5, 10, 15, 20, 9, 11},
               					{0, 0, 0, 0},
                              {0, 0, 0, 0, 0, 0, 0, 0, 0}
               			 };
      // Sum each column.
         // for (int row=0; row < table.length-1; row++)
         // {
            // for (int col=0; col < table[row].length; col++)
            // {
               // table[table.length-1][col] += table[row][col];
            // }
         // }
      //    
         // for (int col=0; col < table[3].length; col++)
            // table[table.length-1][col] = 0;
      
         // for (int col=0; col < table.length; col++)
         // {
            // for (int row=0; row < table[col].length-1; row++)
            // {
               // table[table.length-1][col] += table[row][col];
            // }
         // }
      
      // Print the table
         for (int row=0; row < table.length; row++)
         {
            for (int col=0; col < table[row].length; col++)
               System.out.print (table[row][col] + "\t");
            System.out.println();
         }
      }
   }
