/**
* Online book cost.
* 
* Activity 10
* @author Haden Stuart
* @version 4/9/18
*/
public class OnlineBook extends OnlineTextItem {

// Variables 
   protected String author;

// Constructor

/**
* Get the name and price.
*
* @param nameIn set name
* @param priceIn set price
*/
   public OnlineBook(String nameIn, double priceIn) {
      super(nameIn, priceIn);
      author = "Author Not Listed";
   }

// Methods 

/** 
* Set the author.
*
* @param authorIn get the author
*/
   public void setAuthor(String authorIn) { 
      author = authorIn;
   }

/** 
* Set the toString.
*
* @return string
*/
   public String toString() {
      return name + " - " + author + ": $" + price; 
   }
   
}