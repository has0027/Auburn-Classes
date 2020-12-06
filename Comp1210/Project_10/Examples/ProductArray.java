import java.util.Arrays;
   
public class ProductArray {
   
   public static void main(String[] args) {
      
      Product[] pArr = new Product[5];
      pArr[0] = new Product("Table", 60);
      pArr[1] = new FoodProduct("Steak", 16.2);
      pArr[2] = new FoodProduct("lettuce", 2.21);
      pArr[3] = new FoodProduct("Swiss Chard", 2.90);
      pArr[4] = new ClothingProduct("Hat", 7.30, "S");
      	
      System.out.println("UnSorted:");
      for (Product item : pArr) {
         System.out.println(item);
      }
         
      Arrays.sort(pArr);
         
      System.out.println("\n\nSorted:");
      for (Product item : pArr) {
         System.out.println(item);
      }
   }
}