/**
* Create an item list array.
* 
* Activity 10
* @author Haden Stuart
* @version 4/9/18
*/
public class ItemsList {

// Variables

   private InventoryItem[] inventory;
   private int count;

// Constructor

/** 
* Set the array length.
*
*/
   public ItemsList() {
   
      inventory = new InventoryItem[20];
      count = count++;
   }

// Methods

/** 
* Add an item to the array.
*
* @param itemIn get the item to be added
*/
   public void addItem(InventoryItem itemIn) {
   
      inventory[count] = itemIn;
      count++;
   }

/** 
* Calculate the total.
*
* @param electronicsSurcharge get the charge
* @return total
*/
   public double calculateTotal(double electronicsSurcharge) {
      double total = 0;
   
      for (int i = 0; i < count; i++) {
      
         if (inventory[i] instanceof ElectronicsItem) {
            total += inventory[i].calculateCost() + electronicsSurcharge;
         }
         else {
            total += inventory[i].calculateCost();
         }
      }
      
      return total;
   }
   
/** 
* Get the toString.
*
* @return string
*/
   public String toString() {
      String output = "All inventory: \n\n";
   
      for (int i = 0; i < count; i++) {
         output += inventory[i] + "\n";
      }
   
      return output;
   }
}