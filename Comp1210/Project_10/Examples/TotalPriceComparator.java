import java.util.Comparator;
   
public class TotalPriceComparator implements Comparator<Product> {
   
   public int compare(Product p1, Product p2) {
   
      if (p1.totalPrice() > p2.totalPrice()) {
         return -1;
      }
      else if (p1.totalPrice() < p2.totalPrice()) {
         return 1;
      }
      else {
         return 0;
      }
   }
}