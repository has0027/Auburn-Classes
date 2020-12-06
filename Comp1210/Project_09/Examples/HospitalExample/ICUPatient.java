/**
 * Represents an ICU patient in a hospital with name, 
 * room number for location, year of birth, and a status 
 * (stable, urgent, or critical).
 */
public class ICUPatient extends Patient {
   protected int status = CRITICAL;
   public static final int STABLE = 0, URGENT = 1, CRITICAL = 2;
 
   public ICUPatient(String firstName, String lastName, 
                     int roomNumIn, int yearOfBirth) {
      super(firstName, lastName, "Room " + roomNumIn, yearOfBirth);
   }
   
   public void setStatus(int statusIn) {
      if (isValidStatus(statusIn)) {
         status = statusIn;
      } 
   }
   
   public static boolean isValidStatus(int statusIn) {
      if (statusIn == STABLE || statusIn == URGENT
            || statusIn == CRITICAL) {
         return true;
      } 
      return false;
   }
	
   public String toString() {
      String output = super.toString() + "\r\n  Status: ";
      switch (status) {
         case STABLE:
            return output + "Stable";
         case URGENT:
            return output + "Urgent";
         case CRITICAL:
            return output + "CRITICAL";
         default:
            return output + "Unknown Status";
      }
   }
}