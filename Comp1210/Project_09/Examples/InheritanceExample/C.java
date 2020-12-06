public class C extends B
{
   private int z;
   
   C()
   {
      z = 30;
      x = 60;
      super.x = 1000;
      System.out.println("Class C's constructor called");
   }
   
   public String compute()
   {
      return Integer.toString(x + y + z);
   }


}
