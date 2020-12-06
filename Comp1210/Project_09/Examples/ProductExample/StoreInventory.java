public class StoreInventory {

   public static void main(String[] args) {
   
      Product p1 = new Product("mower", 349.99);
      
      ClothingProduct p2 = new ClothingProduct("t-shirt", 12.49, "Large");
   
      FoodProduct p3 = new FoodProduct("ice cream", 3.88);
      p3.setRefrigerated(true);
      
      System.out.println(p1 + "\n\n" + p2 + "\n\n" + p3);
   }
}