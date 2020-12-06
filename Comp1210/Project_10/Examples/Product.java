public class Product implements Comparable<Product> 
{  
   protected String name;
   protected double price;
   private static final double TAX = 0.08;
   
   public Product(String nameIn, double priceIn) {
      name = nameIn;
      price = priceIn;
   }
      
   public String getName() {
      return name;
   }
   	
   public double getPrice() {
      return price;
   }
      
   public double totalPrice() {
      return price * (1 + TAX);
   }
      
   public String toString() {
      return name + ": $" + price;
   }
      
   public int compareTo(Product other) {
      return name.toLowerCase()  
                 .compareTo(other.getName().toLowerCase());
   }
}