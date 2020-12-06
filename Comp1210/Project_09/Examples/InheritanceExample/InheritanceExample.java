public class InheritanceExample
{
   public static void main(String[] args)
   {
      System.out.println("Creating an instance of A");
      A myA = new A();
      String a = myA.compute();
      
      System.out.println("\nCreating an instance of B");
      B myB = new B();
      String b = myB.compute();     
       
      System.out.println("\nCreating an instance of C");
      C myC = new C();
      String c = myC.compute();
            
      System.out.println("\nmyA.x: " + myA.getX());
      System.out.println("myB.x: " + myB.getX());
      System.out.println("myC.x: " + myC.getX());
     
      System.out.println("Done");
   }
}
