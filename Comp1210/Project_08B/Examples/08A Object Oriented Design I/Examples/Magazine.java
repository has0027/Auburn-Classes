/**
 * Represents a magazine with a title & # of pages. A count 
 * of the number of magazine objects created is maintained.
 */
public class Magazine {

   private String title = new String("none");
   private int pages = 0;
   private static int count = 0; 
   
   /**
    * Constructor sets title and pages; increments count.
    * @param theTitle for title
    * @param thePages for pages
    */
   public Magazine(String theTitle, int thePages) 
   {
      title = theTitle;
      pages = thePages;
      count++;  
   }
   
   /**
    * @return count for Magazine objects created.
    */
   public static int getCount()
   {
      return count; 
   }
   
   /**
    * resets count to zero.
    */
   public static void resetCount() {
      count = 0;
   }

   /**
    * @return description of the Magazine object.
    */
   public String toString()
   {
      return ("\nTitle: " + title + "\nPages: " 
         + pages + "\nCount: " + count);
   }
}
