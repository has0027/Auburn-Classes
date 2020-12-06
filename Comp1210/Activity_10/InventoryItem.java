/**
* Inventory item cost.
* 
* Activity 10
* @author Haden Stuart
* @version 4/9/18
*/
public class InventoryItem {

// Variables

   protected String name;
   protected double price;
   private static double taxRate = 0;

// Constructor

/**
* Get the name and price.
*
* @param nameIn set name
* @param priceIn set price
*/
   public InventoryItem(String nameIn, double priceIn) {
      name = nameIn;
      price = priceIn;
   }

// Methods

/** 
* Return the name.
*
* @return name
*/
   public String getName() {
      return name;
   }

/** 
* Calculate the cost.
*
* @return cost
*/
   public double calculateCost() { 
      double cost = price * (1 + taxRate);
      return cost;
   }

/** 
* Set the tax rate.
*
* @param taxRateIn set the taxRate
*/ 
   public static void setTaxRate(double taxRateIn) {
      taxRate = taxRateIn;
   }

/** 
* Set the toString.
*
* @return string
*/
   public String toString() {
      return name + ": $" + calculateCost();
   }

}