public class B extends A
{
   protected int x; // usually not a good idea to override an inherited field
   protected int y;
   
   B()
   {
      x = 55;
      //super.x = 100;
      y = 20;
      System.out.println("Class B's constructor called");
   }
   
   int getX()
   {
      return x;
   }
   
   int getSuperX()
   {
      return super.x;
   }
   
   protected String compute()
   {
      return Integer.toString(x + y); 
   }

}
