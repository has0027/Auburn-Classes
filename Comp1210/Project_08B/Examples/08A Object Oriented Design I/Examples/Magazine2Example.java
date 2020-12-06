/**
 * Demonstrates the use of a static field as well aggregation
 * in class Magazine2. 
 */
public class Magazine2Example
{
   /**
    * @param args not used.
    */
   public static void main(String[] args) 
   {
      Magazine2 magObj1 = new Magazine2("Java Magazine", 100, 
         "Oracle Inc", "Redwood Shores, CA");  
           
      Magazine2 magObj2 = new Magazine2("Database Journal", 1000, 
         "QuinStreet Inc", "Foster City, CA");   
   
      System.out.println(magObj1 + "\n");
      System.out.println(magObj2);
   }
}
