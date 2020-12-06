/**
* Prints the arguments passed into the program from 
* the command line.
*/
public class CommandLineExample {
	
   /** 
    * Prints the arguments passed into the program from 
    * the command line.
    * @param args not used.
    */
   public static void main(String[] args) {
   
      if (args.length > 0) {
         for (int i = 0; i < args.length; i++) {
            System.out.print(args[i] + " ");
         }
         
         System.out.println("\nNumber of args: " + args.length);
         
         String smallest = args[0];
         for (int i = 1; i < args.length; i++) {
            if (args[i].compareToIgnoreCase(smallest) < 0) {
               smallest = args[i];
            }
         }
         System.out.println("Smallest: " + smallest);
      }
      else {
         System.out.println("No arguments");        
      }
   }
}
