/**
 * Represents a maternity patient in a hospital with name, 
 * birth year, and days until due. Located in the maternity 
 * ward.
 */   
public class MaternityPatient extends Patient {
   protected int daysUntilDue;
 
   public MaternityPatient(String firstName, String lastName, 
      int birthYearIn, int daysTilDue) {
      super(firstName, lastName, "Maternity Ward", birthYearIn);
      setDaysUntilDue(daysTilDue);
   }
   
   public int getDaysUntilDue() {
      return daysUntilDue;
   }
   
   public void setDaysUntilDue(int daysUntilDueIn) {
      daysUntilDue = daysUntilDueIn;
   }
}