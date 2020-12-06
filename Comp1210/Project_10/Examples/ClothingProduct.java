public class ClothingProduct extends Product {

   private String size;
   //private static final double TAX = 0.08;

   public ClothingProduct(String nameIn, double priceIn, String sizeIn) {
      super(nameIn, priceIn);
      size = sizeIn;
   }
      
   public String toString() {
      return name + " (" + size + ") " + ": $" + price;
   }
}