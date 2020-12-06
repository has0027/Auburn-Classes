public class A
{
   protected int x;
   
   A()
   {
      x = 10;
      System.out.println("Class A's constructor called");
   }
   
   int getX()
   {
      return x;
   }
   
   String compute()
   {
      return Integer.toString(x);
   }
            
   public boolean equals(A a) 
   {
      // Notice how the if-else commented out below 
      // can be simplified to:
      return x == a.x;
      
      // if (x == a.x) {
         // return true;
      // }
      // else {
         // return false;
      // }
   }

   public boolean equals(Object o) { // preferred version
   
      if (!(o instanceof A)) {
         return false;
      }
         
      A a = (A) o;
      return x == a.x;
   }
   
   public int hashCode() { // Checkstyle requires if equals is overridden
      return 0;
   }
}
