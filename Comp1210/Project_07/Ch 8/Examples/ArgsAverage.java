/** 
 * Computes the average of integers passed into 
 * the program as command line arguments.
 */
class ArgsAverage 
{
   /**
    * @param args represent integers.
    */
   public static void main(String[] args)
   {
      int sum = 0;
   
      if (args.length > 0) {
         for (int i = 0; i < args.length; i++) {
            int tmp = Integer.parseInt(args[i]);
            System.out.print(tmp + " ");
            sum += tmp;
         }
         
         System.out.println("\nAvg: " + (double) sum / args.length);
      }
      else {
         System.out.println("No arguments");         
      }
   }
}
