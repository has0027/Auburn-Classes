public class ClothingProduct extends Product {

   private String size;

   public ClothingProduct(String nameIn, double priceIn, String sizeIn) {
      super(nameIn, priceIn); 
      // name = nameIn; 
      // price = priceIn;
      size = sizeIn;
   }
   
   public void setSize(String sizeIn) {
      size = sizeIn;
   }

   public String toString() {
      return name + " (" + size + ") " + "\n$ " + price;
   } 
}