/**
* Online article.
* 
* Activity 9
* @author Haden Stuart
* @version 4/2/18
*/
public class OnlineArticle extends OnlineTextItem {

// Variables
   private int wordCount;
   
 // Constructor
   public OnlineArticle(String nameIn, double priceIn) {
      super(nameIn, priceIn);
      wordCount = 0;
   }
   
 // Methods
   public void setWordCount(int wordCountIn) {
      wordCount = wordCountIn;
   }
}