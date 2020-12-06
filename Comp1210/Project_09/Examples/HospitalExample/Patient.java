public class Patient extends Person {
   protected int birthYear;
 
   public Patient(String firstName, String lastName, 
                  String location, int birthYearIn) {
      super(firstName, lastName, location);
      birthYear = birthYearIn;
   }
   
   public int getBirthYear() {
      return birthYear;
   }

	/** 
	 * A patient's id is their last name followed 
	 * by their year of birth in lower case.
	 *
	 * @return The id of the patient.
	 */ 
   public String getId() {
      return lastName.toLowerCase() + getBirthYear();
   }
   
   public String toString() {
      return super.toString() + "\n  Location: " + location;
   }
}
