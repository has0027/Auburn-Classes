import java.util.*;

public class TrianglesCopyCheck {

   public static void main(String[] args) {
      Triangle[] t = {new Triangle(3, 4, 5), new Triangle(7, 7, 7)};
      Triangle[] t2 = java.util.Arrays.copyOf(t, t.length);
      
      //Arrays.copyOf(t);
   }
}