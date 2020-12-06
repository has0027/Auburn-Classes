import java.text.DecimalFormat;
/**
* Creates show bunny information.
* 
* Project 10
* @author Haden Stuart
* @version 4/13/18
*/
public class ShowBunny extends Bunny {

   // Variables

   private double groomingCost;

/** Constant value. **/
   public static final double BASE_COST = 2.75;

//Constructor

/**
* Get the name, breed, weight, and groomingCost.
*
* @param nameIn set name
* @param breedIn set breed
* @param weightIn set weight
* @param groomingCostIn set groomingCost
*/
   public ShowBunny(String nameIn, String breedIn,
       double weightIn, double groomingCostIn) {
       
      super(nameIn, breedIn, weightIn);
      groomingCost = groomingCostIn;
   }

// Methods

/**
* Get the grooming cost.
*
* @return groomingCost
*/
   public double getGroomingCost() {
      return groomingCost;
   }

/**
* Set the grooming cost.
*
* @param groomingCostIn get grooming cost
*/
   public void setGroomingCost(double groomingCostIn) {
      groomingCost = groomingCostIn;
   }

/**
* Estimate the cost.
*
* @return cost
*/
   public double estimatedMonthlyCost() {
      double cost = BASE_COST * weight + groomingCost;
      return cost;
   }

/**
* Set the string.
*
* @return string
*/   
   public String toString() {
      DecimalFormat fmt = new DecimalFormat("##0.00");
      
      String grooming = "$" + fmt.format(groomingCost);
      
      return super.toString() + " (includes " + grooming + " for grooming)";
   }
}