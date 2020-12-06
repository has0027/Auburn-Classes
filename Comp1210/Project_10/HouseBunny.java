/**
* Creates house bunny information.
* 
* Project 10
* @author Haden Stuart
* @version 4/13/18
*/
public class HouseBunny extends PetBunny {

// Variables

   private double wearAndTear;
   
   /** Constant value. **/
   public static final double BASE_COST = 2.25;

// Constructor

/**
* Get the name, breed, weight, and wearAndTear.
*
* @param nameIn set name
* @param breedIn set breed
* @param weightIn set weight
* @param wearAndTearIn set wearAndTear
*/
   public HouseBunny(String nameIn, String breedIn,
       double weightIn, double wearAndTearIn) {
       
      super(nameIn, breedIn, weightIn);
      wearAndTear = wearAndTearIn;
   }

// Methods

/**
* Get the wear and tear.
*
* @return wearAndTear
*/
   public double getWearAndTear() {
      return wearAndTear;
   }

/**
* Set the wear and tear.
*
* @param wearAndTearIn get wearAndTear
*/
   public void setWearAndTear(double wearAndTearIn) {
      wearAndTear = wearAndTearIn;
   }

/**
* Estimate the cost.
*
* @return cost
*/
   public double estimatedMonthlyCost() {
      double cost = BASE_COST * weight * (1 + wearAndTear);
      return cost;
   }

/**
* Set the string.
*
* @return string
*/   
   public String toString() {
      
      String percent = wearAndTear * 100.0 + "%";
      
      return super.toString() + " (includes " + percent + " for wear and tear)";
   }

}