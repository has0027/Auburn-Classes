public class Product {

   protected String name;
   protected double price;
   private static final double TAX = 0.08;

   public Product(String nameIn, double priceIn) {
      name = nameIn;
      price = priceIn;
   }
      
   public double totalPrice() {
      return price * (1 + TAX);
   }
   
   public String toString() {
      return name + "\n$" + price;
   }
}