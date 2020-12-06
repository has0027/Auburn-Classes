/**
* Online book cost.
* 
* Activity 9
* @author Haden Stuart
* @version 4/2/18
*/
public class OnlineBook extends OnlineTextItem {

// Variables 
   protected String author;

// Constructor
   public OnlineBook(String nameIn, double priceIn) {
      super(nameIn, priceIn);
      author = "Author Not Listed";
   }

// Methods 
   public void setAuthor(String authorIn) { 
      author = authorIn;
   }

   public String toString() {
      return name + " - " + author + ": $" + price; 
   }
   
}