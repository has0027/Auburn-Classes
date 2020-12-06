/**
* Get customer information.
*
* Activity 8B
* @author Haden Stuart
* @version 3/25/18
*/
public class Customer implements Comparable<Customer> {

// Instance variables

   private String name;
   private String location;
   private double balance;

// Constructor

/**
* Set the variables.
*
* @param nameIn set the name
*/
   public Customer(String nameIn) {
      name = nameIn;
      location = "";
      balance = 0;
   }

// Methods

/**
* Set location variable.
*
* @param locationIn gets location
*/
   public void setLocation(String locationIn) {
      location = locationIn;
   }
  
/**
* Set location variable.
*
* @param city gets city
* @param state gets state
*/   
   public void setLocation(String city, String state) {
      location = city + ", " + state;
   }

/**
* Add amount to balance.
*
* @param amount gets amount
*/
   public void changeBalance(double amount) {
      balance = balance + amount;
   }

/**
* Returns location.
*
* @return get location
*/
   public String getLocation() {
      return location;
   }

/**
* Returns balance.
*
* @return get balance
*/
   public double getBalance() {
      return balance;
   }
   
/**
* Returns output.
*
* @return total output
*/
   public String toString() {
      String output = name;
      output += "\n" + location;
      output += "\n$" + balance;
      return output;
   }
 
/**
* Compares customers.
*
* @param obj customer value
* @return compare value
*/ 
   public int compareTo(Customer obj) {
   
      if (Math.abs(this.balance - obj.getBalance()) < 0.000001) {
         return 0;
      }
      else if (this.balance < obj.getBalance()) {
         return -1;
      }
      else {
         return 1;
      }
   }  
}