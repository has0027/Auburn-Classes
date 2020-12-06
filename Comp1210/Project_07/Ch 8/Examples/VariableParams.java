/** 
 * Computes the average of integers passed to 
 * average method as variable length parameter list.
 */

public class VariableParams {

   /** 
     * @param args not used.
        */
   public static void main(String[] args)
   {
      System.out.println(average(12, 14, 16));
      System.out.println(average(12, 14, 16, 18, 20, 22));
      System.out.println(average(12, 14, 16, 23, 45, 67, 100));
      int[] ia = {3, 5, 7};
      System.out.println(average(ia));
   }
   
   /** 
    * @param list variable number of parameters.
    * @return average of values passed as parameters.
    */
   public static double average(int... list)
   {
      double result = 0.0;
   
      if (list.length != 0) {
         int sum = 0;
         for (int num : list) {
            sum += num;
         }
         result = (double) sum / list.length;
      }
   
      return result;
   }

}
