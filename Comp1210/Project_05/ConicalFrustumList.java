import java.util.ArrayList;
import java.text.DecimalFormat;
/**
* Stores an arraylist of conical frustum objects.
* 
* Project 5
* @author Haden Stuart
* @version 2/23/18
*/
public class ConicalFrustumList
{

// Instance variables

   private String listName;
   private ArrayList<ConicalFrustum> 
      objectList = new ArrayList<ConicalFrustum>();

// Constructor

/**
* Get the list name and object list.
*
* @param listNameIn set the list name
* @param objectListIn set the object list
*/
   public ConicalFrustumList(String listNameIn, 
      ArrayList<ConicalFrustum> objectListIn)
   {
      listName = listNameIn;
      objectList = objectListIn;
   }

// Methods

/**
* Get the listname.
*
* @return set the listname
*/
   public String getName()
   {
      return listName;
   }

/**
* Get the number of conical frustums.
*
* @return set the number
*/   
   public int numberOfConicalFrustums()
   {
      int numberOf = objectList.size();
      
      return numberOf;
   }
 
/**
* Get the total surface area.
*
* @return set the total
*/  
   public double totalSurfaceArea()
   {
      double total = 0;
      int index = 0;
      
      while (index < objectList.size())
      {
         total += objectList.get(index).totalSurfaceArea();
         index++;
      }
   
      return total;
   }

/**
* Get the total volume.
*
* @return set the volume
*/   
   public double totalVolume()
   {
      double total = 0;
      int index = 0;
      
      while (index < objectList.size())
      {
         total += objectList.get(index).volume();
         index++;
      }
      
      return total;
   }

/**
* Get the average surface area.
*
* @return set the average
*/
   public double averageSurfaceArea()
   {
      double avg;
      if (numberOfConicalFrustums() > 0)
      {
         avg = totalSurfaceArea() / numberOfConicalFrustums(); 
      }
      else
      {
         avg = 0;
      }
      return avg;
   }


/**
* Get the average volume.
*
* @return set the average
*/
   public double averageVolume()
   {
      double avg;
      if (numberOfConicalFrustums() > 0)
      {
         avg = totalVolume() / numberOfConicalFrustums();
      }
      else
      {
         avg = 0;
      }
      return avg;
   }

/**
* Get the result.
*
* @return set the result
*/
   public String toString()
   {
      String result = "" + listName + "\n";
      int index = 0;
      while (index < objectList.size())
      {
         result += "\n" + objectList.get(index) + "\n";
         index++;
      }
   
      return result;
   }

/**
* Get the result summary.
*
* @return set the summary
*/
   public String summaryInfo()
   {
      DecimalFormat fmt = new DecimalFormat("#,##0.0##");
      String result = "";
      result += "----- Summary for " + getName() + " -----";
      result += "\nNumber of ConicalFrustum Objects: " 
         + numberOfConicalFrustums();
      result += "\nTotal Surface Area: " + fmt.format(totalSurfaceArea());
      result += "\nTotal Volume: " + fmt.format(totalVolume());
      result += "\nAverage Surface Area: " + fmt.format(averageSurfaceArea());
      result += "\nAverage Volume: " + fmt.format(averageVolume());
   
      return result;
   }
}