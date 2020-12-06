/**
* Online article.
* 
* Activity 10
* @author Haden Stuart
* @version 4/9/18
*/
public class OnlineArticle extends OnlineTextItem {

// Variables
   private int wordCount;
   
 // Constructor
 
/**
* Get the name and price.
*
* @param nameIn set name
* @param priceIn set price
*/
   public OnlineArticle(String nameIn, double priceIn) {
      super(nameIn, priceIn);
      wordCount = 0;
   }
   
 // Methods
 
/** 
* Set the word count.
*
* @param wordCountIn get the wordcount
*/
   public void setWordCount(int wordCountIn) {
      wordCount = wordCountIn;
   }
}