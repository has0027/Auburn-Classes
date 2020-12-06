/**
 * Demonstrates the use of a static fields in class with 
 * the main method. Constrasts static variables and 
 * local variables with same name.
 */
public class StaticExample 
{
   private int k;
   private static int i = 9;
   private static int j = 999;

   /**
    * @param args not used.
    */
   public static void main(String[] args) {
   
      //StaticExample se = new StaticExample();
      System.out.println("i = " + i);
      System.out.println("j = " + j);
      int i = 2;
      {
         int j = 3;
         double k = 20;
         System.out.println("local block double k = " + k);
         System.out.println("i + j = " + (i + j));
         System.out.println("static j = " + StaticExample.j);
      }
      {
         int k = 10;
         System.out.println("local block int k = " + k);
      }
      
      System.out.println("i = " + i);
   
      System.out.println("j = " + j);
   }
}
