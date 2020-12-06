/**
 * Demonstrates the use of a static field in class Magazine2.
 * Also has a field of type Publisher which means that  
 * Magazine2 has an aggregation relationship with Publisher.  
 */
public class Magazine2 
{
   private String title;
   private int pages;
   private Publisher publisher;
   private static int count = 0; 

   /**
    * Constructor sets title, pages, and thePublisher, 
    * and then increments count. Demonstrates the use 
    * of the reserved word this, which means this object.
    * @param title for this.title
    * @param pages for this.pages
    * @param thePublisher used to create Publisher
    * @param theCity used to create Publisher
    */
   public Magazine2(String title, int pages, 
      String thePublisher, String theCity) {
      
      this.title = title;
      this.pages = pages;
      publisher = new Publisher(thePublisher, theCity);
      count++;  
   }

   /**
    * @return description of the Magazine2 object.
    */
   public String toString()
   {
      return ("Title: " + title 
            + "\nPages: " + pages 
            + publisher.toString());
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

}
