/**
 * Represents a Doctor in a hospital with
 * name, location, ID, speciality, & phone #. The title
 * of the doctor is always "Physician".
 */
public class Doctor extends Staff {
   protected String speciality = "General";
 
   public Doctor(String firstNameIn, String lastNameIn, 
                  String locationIn, String phoneIn) {
      super(firstNameIn, lastNameIn,  locationIn, "Physician", phoneIn);
   }
   
   public boolean setSpecialty(String specialityIn) {
      specialityIn = specialityIn.trim();
      if (specialityIn.length() > 0) {
         speciality = specialityIn;
         return true;
      }
      return false;
   }

	/** 
	 * A doctor's id is the same as a staff 
	 * member's id but it always ends with an asterick.
	 *
	 * @return The id of the doctor.
	 */ 
   public String getId() {
      return super.getId() + "*";
   }
   
   public String toString() {
      return "Name: Dr. " + firstName + " " + lastName 
         + " - " + speciality 
         + "\n  Phone: " + phone;
   }
}