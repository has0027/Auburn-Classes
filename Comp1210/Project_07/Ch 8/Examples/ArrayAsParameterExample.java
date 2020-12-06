/**
 * Demonstrates the use of an initializer list
 * for an array of strings.
 */
public class ArrayAsParameterExample
{
   /**
    * Creates an array of int and pass as a paramter.
    * @param args not used.
    */
   public static void main(String[] args) 
   {
      int k = 688;
      printInt(k);
      int[] intList = {34, 45, 67, 78};
      printIntArray(intList);
   }
   
   /**
    * @param i to be printed.
    */
   static void printInt(int i)
   {
      System.out.println(i);
   }
   
   /**
    * @param list an array to be printed.
    */
   static void printIntArray(int[] list)
   {
      for (int i : list) {
         System.out.print(i + " ");
      }
   }
}
