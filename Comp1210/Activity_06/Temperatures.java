import java.util.ArrayList;
/**
* Store values representing daily temperatures.
* 
* Activity 6
* @author Haden Stuart
* @version 2/26/18
*/

public class Temperatures
{
// Instance variables
   private ArrayList<Integer> temperatures;

// Constructor

/**
* Get the temperatures from Info.
*
* @param temperaturesIn set the temperatures
*/
   public Temperatures(ArrayList<Integer> temperaturesIn)
   {
      temperatures = temperaturesIn;
   }
   
// Methods

/**
* Get the low temperature.
*
* @return set the low
*/
   public int getLowTemp()
   {
      if (temperatures.isEmpty())
      {
         return 0;
      }
      int low = temperatures.get(0);
      for (int i = 0; i < temperatures.size(); i++)
      {
         if (temperatures.get(i) < low)
         {
            low = temperatures.get(i);
         }
      }
      return low;
   }

/**
* Get the high temperature.
*
* @return set the high
*/
   public int getHighTemp()
   {
      if (temperatures.isEmpty())
      {
         return 0;
      }
      int high = temperatures.get(0);
      for (Integer temp : temperatures)
      {
         if (temp > high)
         {
            high = temp;
         }
      }
      return high;
   }
  
/**
* Get the minimum temperature.
*
* @param lowIn get the low temp
* @return set the minimum
*/ 
   public int lowerMinimum(int lowIn)
   {
      return lowIn < getLowTemp() ? lowIn : getLowTemp();
   }
   
/**
* Get the maximum temperature.
*
* @param highIn get the high temp
* @return set the maximum
*/
   public int higherMaximum(int highIn)
   {
      return highIn > getHighTemp() ? highIn : getHighTemp();
   }
  
/**
* Set the temps.
*
* @return set temps
*/ 
   public String toString()
   {
      return "\tTemperatures: " + temperatures
         + "\n\tLow: " + getLowTemp()
         + "\n\tHigh: " + getHighTemp();
   }
   
}