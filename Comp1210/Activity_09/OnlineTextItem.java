/**
* Online text item cost.
* 
* Activity 9
* @author Haden Stuart
* @version 4/2/18
*/
public abstract class OnlineTextItem extends InventoryItem {

// Constructor 
   public OnlineTextItem(String nameIn, double priceIn) {
      super(nameIn, priceIn);
   }

// Methods
   public double calculateCost() {
      return price;
   }

}
