public class FoodProduct extends Product {
   
   private boolean isRefrigerated = false;
   
   public FoodProduct(String nameIn, double priceIn) {
      super(nameIn, priceIn);
   }
   
   public void setRefrigerated(boolean isRefrigeratedIn) {
      isRefrigerated = isRefrigeratedIn;
   }
   
   public double totalPrice() {
      return price;  // no tax is added; overrides the inherited method
   }
   
   public String toString() {
      String output = super.toString();
      if (isRefrigerated) {
         output += " (Refrigerated)";
      }
      return output;
   }
}