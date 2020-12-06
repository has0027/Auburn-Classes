import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;
import java.text.DecimalFormat;
/**
* Stores an arraylist of conical frustum objects.
* 
* Project 7
* @author Haden Stuart
* @version 3/9/18
*/
public class ConicalFrustumList2
{

// Instance variables

   private String listName;
   private ConicalFrustum[] objectList;
   private int cfNumber; 

// Constructor

/**
* Get the list name and object list.
*
* @param listNameIn set the list name
* @param objectListIn set the object list
* @param cfNumberIn set the number of cf's
*/
   public ConicalFrustumList2(String listNameIn, 
      ConicalFrustum[] objectListIn, int cfNumberIn)
   {
      listName = listNameIn;
      objectList = objectListIn;
      cfNumber = cfNumberIn;
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
      int numberOf = cfNumber;
      
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
      
      while (index < cfNumber)
      {
         total += objectList[index].totalSurfaceArea();
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
      
      while (index < cfNumber)
      {
         total += objectList[index].volume();
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
      String result = listName + "\n";
      int index = 0;
      while (index < cfNumber)
      {
         result += "\n" + objectList[index] + "\n";
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
   
   
   // New additions below
   
      
/**
* Get the list.
*
* @return set the list
*/
   public ConicalFrustum[] getList()
   {
      return objectList;
   }
    
/**
* Read the file.
*
* @param fileNameIn get the file
* @return set the list object
* @throws FileNotFoundException gives an error
*/ 
   public ConicalFrustumList2 readFile(String fileNameIn)
      throws FileNotFoundException
   {
      Scanner fileInput = new Scanner(new File(fileNameIn));
      ConicalFrustum[] cfList = new ConicalFrustum[100];
      String opListName = "";
      int number = 0;
   
      listName = fileInput.nextLine();
      
      while (fileInput.hasNext())
      {
         String label = fileInput.nextLine();
         double radius1 = Double.parseDouble(fileInput.nextLine());
         double radius2 = Double.parseDouble(fileInput.nextLine());
         double height = Double.parseDouble(fileInput.nextLine());
         
         ConicalFrustum conicalInfo = new ConicalFrustum(label, 
            radius1, radius2, height);
         cfList[number] = conicalInfo;
         number++;
      } 
      
      ConicalFrustumList2 conicalList = new ConicalFrustumList2(listName,
          cfList, number);
     
      return conicalList;
   }  
   
/**
* Add four new params to the object list.
*
* @param labelIn get the label
* @param radius1In get the radius1
* @param radius2In get the radius2
* @param heightIn get the height 
*/
   public void addConicalFrustum(String labelIn, double radius1In,
      double radius2In, double heightIn)
   {
      ConicalFrustum extra = new ConicalFrustum(labelIn,
         radius1In, radius2In, heightIn);
   
      objectList[cfNumber] = extra;
      cfNumber++;
   }
   
/**
* Finds the corresponding item in the list.
*
* @param labelIn check the label
* @return return the item 
*/ 
   public ConicalFrustum findConicalFrustum(String labelIn) 
   {
      ConicalFrustum result = null;
      labelIn = labelIn.toLowerCase();
      
      for (ConicalFrustum label : objectList)
      { 
         if (label == null)
         {
            result = null;
            break;
         } 
         else {
            String myLabel = label.getLabel();
            if (label != null)
            {
               if (label.getLabel().toLowerCase().equals(labelIn))
               {
                  result = label;
                  break;
               }
            }
         }
      }
      
      return result;
   }
   
/**
* Returns the object if found and deleted.
*
* @param labelIn get the label
* @return delete the item
*/
   public ConicalFrustum deleteConicalFrustum(String labelIn)
   {
      ConicalFrustum result = null;
      labelIn = labelIn.toLowerCase();
      boolean found = false;
      ConicalFrustum extra = null;
   
      for (int i = 0; i < cfNumber - 1; i++) {
         extra = objectList[i];
         if (extra != null) 
         {
            if (!found) 
            {
               if (extra.getLabel().toLowerCase().equals(labelIn)) 
               {
                  found = true;
                  result = extra;
                  objectList[i] = objectList[i + 1];
                  break;
               }
            } else {
               objectList[i] = objectList[i + 1];
            }
         }
      }
      objectList[cfNumber - 1] = null;
      cfNumber--;
      return result;
   }

/**
* Check the object for the params.
*
* @param labelIn get the label
* @param radius1In get the radius1
* @param radius2In get the radius2
* @param heightIn get the height
* @return the status of the params
*/
   public boolean editConicalFrustum(String labelIn,
      double radius1In, double radius2In, double heightIn)
   {
      boolean result = false;
      labelIn = labelIn.toLowerCase();
      
      for (ConicalFrustum edit : objectList) {
         if (edit == null)
         {
            result = false;
            break;
         }
         else {
            String myLabel = edit.getLabel();
            if (myLabel != null) 
            {
               if (edit.getLabel().toLowerCase().equals(labelIn)) 
               {
                  edit.setRadius1(radius1In);
                  edit.setRadius2(radius2In);
                  edit.setHeight(heightIn);
                  result = true;
                  break;
               }
            } 
         }
      }
      return result;
   }
}