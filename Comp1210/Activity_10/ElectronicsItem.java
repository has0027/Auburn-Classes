/**
* Electronics item cost.
* 
* Activity 10
* @author Haden Stuart
* @version 4/9/18
*/
public class ElectronicsItem extends InventoryItem {

// Variables

   protected double weight;
   
   /** Set the shipping cost. **/
   public static final double SHIPPING_COST = 1.5;

// Constructor

/**
* Get the name, price, and weight.
*
* @param nameIn set name
* @param priceIn set price
* @param weightIn set weight
*/
   public ElectronicsItem(String nameIn, double priceIn, double weightIn) {
      super(nameIn, priceIn);
      weight = weightIn;
   }

// Methods

/** 
* Calculate the cost.
*
* @return cost
*/
   public double calculateCost() {
      return super.calculateCost() + (SHIPPING_COST * weight);
   }

}