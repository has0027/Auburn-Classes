/**
* Electronics item cost.
* 
* Activity 9
* @author Haden Stuart
* @version 4/2/18
*/
public class ElectronicsItem extends InventoryItem {

// Variables
   protected double weight;
   public static final double SHIPPING_COST = 1.5;

// Constructor
   public ElectronicsItem(String nameIn, double priceIn, double weightIn) {
      super(nameIn, priceIn);
      weight = weightIn;
   }

// Methods
   public double calculateCost() {
      return super.calculateCost() + (SHIPPING_COST * weight);
   }

}