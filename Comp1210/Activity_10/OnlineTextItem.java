/**
* Online text item cost.
* 
* Activity 10
* @author Haden Stuart
* @version 4/9/18
*/
public abstract class OnlineTextItem extends InventoryItem {

// Constructor 

/**
* Get the name and price.
*
* @param nameIn set name
* @param priceIn set price
*/
   public OnlineTextItem(String nameIn, double priceIn) {
      super(nameIn, priceIn);
   }

// Methods

/** 
* Calculate the cost.
*
* @return cost
*/
   public double calculateCost() {
      return price;
   }

}
