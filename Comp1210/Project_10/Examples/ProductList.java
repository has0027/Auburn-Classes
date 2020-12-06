import java.util.ArrayList;
import java.util.Collections;
   
public class ProductList {
   
   public static void main(String[] args) {
      
      ArrayList<Product> list = new ArrayList<Product>();
      list.add(new Product("Table", 60));
      list.add(new FoodProduct("Steak", 16.2));
      list.add(new FoodProduct("Lettuce", 2.21));
      list.add(new FoodProduct("Swiss Chard", 2.90));
      list.add(new ClothingProduct("Hat", 7.30, "S"));
      	
      System.out.println("UnSorted:");
      for (Product listItem : list) {
         System.out.println(listItem);
      }
         
      Collections.sort(list);
         
      System.out.println("\n\nSorted:");
      for (Product listItem : list) {
         System.out.println(listItem);
      }
   }
}