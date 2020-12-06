/**
 * Classifies a polygon based on its number of sides.
 * Sides lengths are provided via command-line arguments.
 */
public class PolygonClassifier {
   /**
	 * Classifies a polygon based on its number of sides.
	 * Sides lengths are provided via command-line arguments.
	 *
	 * @param args Side lengths provided by the user.
	 */
   public static void main(String[] args) {
      
   	// print sides to std output  
      System.out.println("\nYou entered the following sides as " 
                        + "comand line arguments: ");
      for (String side : args) {
         System.out.println(side);
      }
      
   	// convert to array of doubles
      double[] sideArray = new double[args.length];
      for (int i = 0; i < args.length; i++) {
         sideArray[i] = Double.parseDouble(args[i]); 
      }
      
   	// classify polygon
      Polygon shape = new Polygon(sideArray);
      System.out.println("\nThe polygon is a " + shape + ".\n");
   }
}
