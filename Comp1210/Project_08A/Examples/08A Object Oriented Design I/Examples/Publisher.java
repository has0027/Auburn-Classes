/** 
 * Used by Magazine2 class to declare an instance field.
 */
public class Publisher
{
   private String name = new String("none");
   private String city = new String("none");
   
   /**
    * Constructor sets name and city fields.
    * @param theName for name
    * @param theCity for city
    */
   public Publisher(String theName, String theCity)
   {
      name = theName;
      city = theCity;
   }
   
   /**   
    * @return desciption of Publisher object
    */
   public String toString()
   {
      return ("\nPublisher: " + name 
               + "\nCity: " + city);
   }
}
