import java.text.DecimalFormat;
/**
* Creates jumping bunny information.
* 
* Project 11
* @author Haden Stuart
* @version 4/20/18
*/
public class JumpingBunny extends Bunny {

// Variables

   private double trainingCost;

/** Constant value. **/
   public static final double BASE_COST = 2.50;

//Constructor

/**
* Get the name, breed, weight, and trainingCost.
*
* @param nameIn set name
* @param breedIn set breed
* @param weightIn set weight
* @param trainingCostIn set trainingCost
* @throws NegativeValueException check sign
*/
   public JumpingBunny(String nameIn, String breedIn,
       double weightIn, double trainingCostIn) throws NegativeValueException {
       
      super(nameIn, breedIn, weightIn);
      
      if (trainingCostIn < 0) {
         throw new NegativeValueException(trainingCostIn);
      }
      else {
         trainingCost = trainingCostIn;
      }
   }

// Methods

/**
* Get the training cost.
*
* @return trainingCost
*/
   public double getTrainingCost() {
      return trainingCost;
   }

/**
* Set the training cost.
*
* @param trainingCostIn get the training cost
*/
   public void setTrainingCost(double trainingCostIn) {
      trainingCost = trainingCostIn;
   }

/**
* Estimate the cost.
*
* @return cost
*/
   public double estimatedMonthlyCost() {
      double cost = BASE_COST * weight + trainingCost;
      return cost;
   }

/**
* Set the string.
*
* @return string
*/   
   public String toString() {
      DecimalFormat fmt = new DecimalFormat("##0.00");
      
      String training = "$" + fmt.format(trainingCost);
      
      return super.toString() + " (includes " + training + " for training)";
   }
}