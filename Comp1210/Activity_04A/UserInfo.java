/**
* Create a UserInfo class.
* 
* Activity 4A
* @author Haden Stuart
* @version 2/5/18
*/
public class UserInfo
{
/**
* Create a UserInfo class.
*
* @param args command line arguments
*/

// Instance variables
   private String firstName;
   private String lastName;
   private String location;
   private int age;
   private int status;
   private static final int OFFLINE = 0, ONLINE = 1;

// Constructor

  /** 
   * Set the firstName, lastName, location, age, and status variables.
   *
   * @param firstNameIn set first name
   * @param lastNameIn set last name
   */
   public UserInfo(String firstNameIn, String lastNameIn)
   {
      firstName = firstNameIn;
      lastName = lastNameIn;
      location = "Not specified";
      age = 0;
      status = OFFLINE;
   }

// Methods

  /** 
   * Print the firstName, lastName, location, age, and status values.
   *
   * @return print full output 
   */
   public String toString()
   {
   
      String output = "Name: " + firstName + " "
         + lastName + "\n";
      output += "Location: " + location + "\n";
      output += "Age: " + age + "\n";
      output += "Status: ";
      if (status == OFFLINE)
      {
         output += "Offline";
      }
      else
      {
         output += "Online";
      }
      
      return output;
   }
   
    /**
   * Declare the location variable.
   * 
   * @param locationIn set location variable 
   */
   public void setLocation(String locationIn)
   {
      location = locationIn;
   }
   
   /**
   * Set the age variable and print.
   *
   * @param ageIn set age
   * @return setAge print age
   */
   public boolean setAge(int ageIn)
   {
      boolean isSet = false; 
      if (ageIn > 0) 
      { 
         age = ageIn;
         isSet = true;
      }
      return isSet;
   }

   /**
   * Print the age variable.
   *
   * @return getAge print age
   */
   public int getAge()
   {
      return age;
   }

   /**
   * Print the location variable.
   *
   * @return getLocation print location
   */
   public String getLocation()
   {
      return location;
   }

   /**
   * Print the logoff status variable.
   *
   */
   public void logOff()
   {
      status = OFFLINE;
   }

   /**
   * Print the logon status variable.
   *
   */
   public void logOn()
   {
      status = ONLINE;
   }
}