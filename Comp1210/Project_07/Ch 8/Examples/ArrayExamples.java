/**
 * Demonstrates the declaration of various arrays 
 * and the assigment of their values.
 */
public class ArrayExamples {

   /**
    * Creates array of various types then assigns 
    * some values as appropriate, then prints out 
    * the values.
    * @param args not used.
    */
   public static void main(String[] args) {
   
      int[] myInts = new int[5];
      char[] myChar = new char[5];
      boolean[] myBooleans = new boolean[5];
      double[] myDoubles = new double[5];
      String[] myStrings = new String[5];
      
      System.out.println("--------- myInts ---------");
      
      for (int i : myInts) {
         System.out.println(i);
      }
      
      System.out.println("--------- myChar ---------");
         
      for (char c : myChar) {
         System.out.println(c);
      }
      
      System.out.println("--------- myBooleans ---------");
             
      for (boolean b : myBooleans) {
         System.out.println(b);
      }
      
      System.out.println("--------- myDoubles ---------");
                  
      for (double d : myDoubles) {
         System.out.println(d);
      }
      
      System.out.println("--------- myStrings ---------");
      
      for (String s : myStrings) {
         System.out.println(s);
      }
      
      System.out.println("\n***** After some assignments *****");
      // Make array assignments.
      myInts[0] = 999;
      myChar[0] = 'a';
      myBooleans[1] = true;
      myDoubles[2] = 98.6; 
      myStrings[3] = "I'm not null!";
      int len = myStrings[3].length();
      //int len2 = myStrings[2].length(); // Careful here!
   	
      System.out.println(myStrings[3]);
      System.out.println(myStrings[3].toUpperCase());
      System.out.println();
     
     // Using for each loop: 
      System.out.println("--------- myInts ---------");
      
      for (int i : myInts) {
         System.out.println(i);
      }
      
      System.out.println("--------- myBooleans ---------");
      
      for (boolean b : myBooleans) {
         System.out.println(b);
      }
       
      System.out.println("--------- myDoubles ---------");
     
      for (double d : myDoubles) {
         System.out.println(d);
      }
      
      System.out.println("--------- myStrings ---------");
      
      for (String s : myStrings) {
         System.out.println(s);
      }
   
   // Using "standard" for loop : 
   
      System.out.println("--------- myInts ---------");
   
      for (int i = 0; i < myInts.length; i++) {
         System.out.println(myInts[i]);
      }
      
      System.out.println("--------- myBooleans ---------");
   
      for (int i = 0; i < myBooleans.length; i++) {
         System.out.println(myBooleans[i]);
      }
      
      System.out.println("--------- myDoubles ---------");
   
      for (int i = 0; i < myDoubles.length; i++) {
         System.out.println(myDoubles[i]);
      }
      
      System.out.println("--------- myStrings ---------");
   
      for (int i = 0; i < myStrings.length; i++) {
         System.out.println(myStrings[i]);
      }
   
   }
}
