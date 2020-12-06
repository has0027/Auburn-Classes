public class PolygonCheck {

   public static void main(String[] args) {
   
      double[] sides1 = {5.4, 2.3, 5.7, 4.5};
      Polygon shape = new Polygon(sides1);
      double[] sides2 = shape.getSides();
      sides2[0] = -1;
      double[] sides3 = shape.getSides();
      double s = sides3[0];
      double r = shape.getSides()[0];
   }
}