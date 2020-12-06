/**
 * Demonstrates the use of an initializer list
 * for an array of strings.
 */
public class InitializerListExample
{
   /**
    * Creates an array of instances of the String class,
    * fills it with various strings using an 
    * intializer list, then prints out the strings.
    * @param args not used.
    */
   public static void main(String[] args) 
   {
   // Create and load the array with String values.
      String[] list = {"This", "is", "a", "test",
         "of", "the", "intializer", "list."};
   
   // Print the list of strings.
      for (int index = 0; index < list.length; index++) {
         System.out.print(list[index] + " ");
      }
         
      System.out.println(); 
      
      for (String s : list) {
         System.out.print(s + " ");
      }
     
      System.out.println();
   
      for (String s : list) {
         s = "test";
         System.out.print(s + " ");
      }
      
      System.out.println();
   
      for (int index = list.length - 1; index >= 0; index--) {
         System.out.print(list[index] + " ");
      }
         
   }
}
