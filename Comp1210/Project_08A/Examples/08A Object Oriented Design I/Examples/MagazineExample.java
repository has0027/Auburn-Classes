/**
 * Demonstrates the use of a static field in class Magazine. 
 */
public class MagazineExample {

   /**
    * @param args not used.
    */
   public static void main(String[] args)
   {	
      System.out.println("Magazine count: " + Magazine.getCount());
      
      Magazine mag1 = new Magazine("Business Week", 122);
      System.out.println(mag1);
   
      Magazine mag2 = new Magazine("IEEE Software", 118);
      System.out.println(mag2);
      
      Magazine mag3 = new Magazine("ACM Computing Surveys", 152);
      System.out.println(mag3);
      
      System.out.println();
      System.out.println("Magazine count: " + Magazine.getCount());
   }
}
