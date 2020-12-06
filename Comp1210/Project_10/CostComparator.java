import java.util.Comparator;
/**
* Compares the cost of bunnies.
*
* Project 10
* @author Haden Stuart
* @version 4/13/18
*/
public class CostComparator implements Comparator<Bunny> { 

/**
* Compare the cost of the bunnies.
*
* @param b1 object to compare
* @param b2 object to compare
* @return the value according
*/
   public int compare(Bunny b1, Bunny b2) {
   
      if (b1.estimatedMonthlyCost() < b2.estimatedMonthlyCost()) {
         return -1;
      }
      else if (b1.estimatedMonthlyCost() > b2.estimatedMonthlyCost()) {
         return 1;
      }
      else {
         return 0;
      }
   }
}