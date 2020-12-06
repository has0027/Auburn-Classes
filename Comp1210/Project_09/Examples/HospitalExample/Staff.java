/**
 * Represents a Staff member in a hospital with
 * name, location, ID, title, & phone #.
 */
public class Staff extends Person {
   protected String title = "Staff", phone;
 
   public Staff(String firstNameIn, String lastNameIn, 
            String locationIn, String titleIn, String phoneIn) {
      super(firstNameIn, lastNameIn, locationIn);
      if (titleIn.trim().length() > 0) {
         title = titleIn;
      } 
      this.phone = phoneIn;
   }
   
   public String getTitle() {
      return title;
   }
   
   public String getPhone() {
      return phone;
   }
   
	/** 
	 * A staff member's id is the first 3 letters of their last
	 * name followed by the first three letters of their first 
	 * name (lower case).
	 * <br>Examples: 
	 *	<br>John Pi -> pi_joh
	 *	<br>Emily Smith -> smiemi
	 *
	 * @return The id of the staff member.
	 */ 
   public String getId() {
      String id = getLastName().toLowerCase();
      id = changeStrLength(id, 3);
      id += getFirstName().toLowerCase();
      id = changeStrLength(id, 6);
      return id;
   }
   
   private String changeStrLength(String str, int desiredLen) {
     
     // trim off characters from end of string if necessary
      if (str.length() > desiredLen) {
         str = str.substring(0, desiredLen);
      }
      // append underscores if length of str < desiredLen
      int underscoresNeeded = desiredLen - str.length();
      for (int i = 0; i < underscoresNeeded; i++) {
         str += "_";
      }
      return str;
   }
   
   public String toString() {
      return super.toString()
         + "\n  Title: " +  title 
         + "\n  Phone: " + phone;
   }
}