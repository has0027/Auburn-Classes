/**
* Creates pet bunny information.
* 
* Project 10
* @author Haden Stuart
* @version 4/13/18
*/
public class PetBunny extends Bunny {

// Variables

   /** Constant value. **/
   public static final double BASE_COST = 1.85;

// Constructor

/**
* Get the name, breed, and weight.
*
* @param nameIn set name
* @param breedIn set breed
* @param weightIn set weight
*/
   public PetBunny(String nameIn, String breedIn, double weightIn) {
      super(nameIn, breedIn, weightIn);
   }

// Methods

/**
* Estimate the cost.
*
* @return cost
*/
   public double estimatedMonthlyCost() {
      double cost = BASE_COST * weight;
      return cost;
   }
   
/**
* Set the string.
*
* @return string
*/   
   public String toString() {
      
      return super.toString();
   }

}