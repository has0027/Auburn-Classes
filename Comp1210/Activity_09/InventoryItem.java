/**
* Inventory item cost.
* 
* Activity 9
* @author Haden Stuart
* @version 4/2/18
*/
public class InventoryItem {

// Variables
   protected String name;
   protected double price;
   private static double taxRate = 0;

// Constructor
   public InventoryItem(String nameIn, double priceIn) {
      name = nameIn;
      price = priceIn;
   }

// Methods
   public String getName() {
      return name;
   }

   public double calculateCost() { 
      double cost = price * (1 + taxRate);
      return cost;
   }

   public static void setTaxRate(double taxRateIn) {
      taxRate = taxRateIn;
   }

   public String toString() {
      return name + ": $" + calculateCost();
   }

}