import java.util.Arrays;
   
public class ProductArraySorts {
   
   public static void main(String[] args) {
      
      Product[] pArr = new Product[5];
      pArr[0] = new Product("Table", 60);
      pArr[1] = new FoodProduct("Steak", 16.2);
      pArr[2] = new FoodProduct("Lettuce", 2.21);
      pArr[3] = new FoodProduct("Swiss Chard", 2.90);
      pArr[4] = new ClothingProduct("Gloves", 15.99, "L");
      	
      System.out.println("UnSorted:");
      for (Product item : pArr) {
         System.out.println(item);
      }
         
      Arrays.sort(pArr);
      
      System.out.println("\n\nSort 1:");
      for (Product item : pArr) {
         System.out.println(item + " (base price = " 
               + item.getPrice() + ")");
      }
         
      Arrays.sort(pArr, new BasePriceComparator());
      
      System.out.println("\n\nSort 2:");
      for (Product item : pArr) {
         System.out.println(item + " (base price = " 
               + item.getPrice() + ")");
      }
         
      TotalPriceComparator totalComp = new TotalPriceComparator();
      Arrays.sort(pArr, totalComp);
      System.out.println("\n\nSort 3:");
      for (Product item : pArr) {
         System.out.println(item + " (total price = " 
               + item.totalPrice() + ")");
      }
   }
}