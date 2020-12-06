//********************************************************************
//  TwoDArray.java       Author: J. Cross
//
//  Demonstrates the use of a two-dimensional array with Strings.
//********************************************************************

public class TwoDArrayStringsWithCopyOf
{
//-----------------------------------------------------------------
//  Creates a 2D array of Strings, fills it with various strings,
//  then prints them out.
//-----------------------------------------------------------------
   public static void main (String[] args)
   {
   // Create and load the table with sting values.
      String[][] table = {
            					{"zero:", "This", "is", "a", "test"},
            					{"one:", "of", "two", "dimensions", "nice!"},
            					{"two:", "Nice", "demo", "of", "viewer."}
            				 };
   
   // Print the table
      for (int row=0; row < table.length; row++)
      {
         for (int col=0; col < table[row].length; col++)
            System.out.print (table[row][col] + "\t");
         System.out.println();
      }
      
      table[0] = java.util.Arrays.copyOf(table[0], table[0].length - 1);
      table[0] = java.util.Arrays.copyOf(table[0], table[0].length - 1);
      table[0] = java.util.Arrays.copyOf(table[0], table[0].length - 1);
      
      table[0] = java.util.Arrays.copyOf(table[0], table[0].length + 1);
      table[0] = java.util.Arrays.copyOf(table[0], table[0].length + 1);
      table[0] = java.util.Arrays.copyOf(table[0], table[0].length + 1);
      table[0] = java.util.Arrays.copyOf(table[0], table[0].length + 1);
   
      table[2] = java.util.Arrays.copyOf(table[2], table[2].length + 1);
      table[2] = java.util.Arrays.copyOf(table[2], table[2].length + 1);
   }
}
