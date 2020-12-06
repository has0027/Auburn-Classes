import java.text.DecimalFormat;
/**
* Stores conical frustum information.
* 
* Project 6
* @author Haden Stuart
* @version 3/2/18
*/
public class ConicalFrustum
{
/**
* Create a ConicalFrustum class.
*
* @param args command line arguments
*/

// Instance variables

   private String label = "";
   private double radius1;
   private double radius2;
   private double height;

// Constructor

  /**
   * Define the label, radius1, radius2, and height variables.
   *
   * @param labelIn set the label
   * @param radius1In set the radius1
   * @param radius2In set the radius2
   * @param heightIn set the height
   */
   public ConicalFrustum(String labelIn, double radius1In,
       double radius2In, double heightIn)
   {
      setLabel(labelIn);
      setRadius1(radius1In);
      setRadius2(radius2In);
      setHeight(heightIn);
   }
   
// Methods

  /**
   * Set the label variable.
   *
   * @param labelIn set label
   * @return print label
   */
   public boolean setLabel(String labelIn)
   {
      boolean labSet = false;
      if (labelIn != null)
      {
         label = labelIn.trim();
         labSet = true;
         return labSet;
      }
      else
      {
         return labSet;
      } 
   }

  /**
   * Return the label variable.
   *
   * @return print label
   */
   public String getLabel()
   {
      return label;
   }
   
   /**
   * Set the radius1 variable.
   *
   * @param radius1In set radius1
   * @return print radius1
   */
   public boolean setRadius1(double radius1In)
   {
      boolean rad1Set = true;
      if (radius1In > 0)
      {
         radius1 = radius1In;
         return rad1Set;
      }
      else
      {
         rad1Set = false;
         return rad1Set;
      }
   }
   
  /**
   * Return the radius1 variable.
   *
   * @return print label
   */
   public double getRadius1()
   {
      return radius1;
   }
   
   /**
   * Set the radius2 variable.
   *
   * @param radius2In set radius2
   * @return print radius2
   */
   public boolean setRadius2(double radius2In)
   {
      boolean rad2Set = true;
      if (radius2In > 0)
      {
         radius2 = radius2In;
         return rad2Set;
      }
      else
      {
         rad2Set = false;
         return rad2Set;
      }
   }
   
   /**
   * Return the radius2 variable.
   *
   * @return print radius2
   */
   public double getRadius2()
   {
      return radius2;
   }
   
  /**
   * Set the height variable.
   *
   * @param heightIn set height
   * @return print height
   */
   public boolean setHeight(double heightIn)
   {
      boolean heightSet = true;
      if (heightIn > 0)
      {
         height = heightIn;
         return heightSet;
      }
      else
      {
         heightSet = false;
         return heightSet;
      }
   }
   
  /**
   * Return the height variable.
   *
   * @return print height
   */
   public double getHeight()
   {
      return height;
   }
   
  /**
   * Create and return the volume variable.
   *
   * @return print volume
   */
   public double volume()
   {
      double volume = ((Math.PI * height) / 3) * (Math.pow(radius1, 2)
         + Math.pow(radius2, 2) + (radius1 * radius2));
      return volume;
   }
   
   /**
   * Create and return the slant height variable.
   *
   * @return print slant height
   */
   public double slantHeight()
   {
      double slantHeight = Math.sqrt(Math.pow((radius1 - radius2), 2)
         + Math.pow(height, 2));
      return slantHeight;
   }
   
   /**
   * Create and return the lateral surface area variable.
   *
   * @return print lateral surface area
   */
   public double lateralSurfaceArea()
   {
      double lateralSurfaceArea = Math.PI * (radius1 + radius2) * slantHeight();
      return lateralSurfaceArea;
   }
   
   /**
   * Create and return the total surface area variable.
   *
   * @return print total surface area
   */
   public double totalSurfaceArea()
   {
      double totalSurfaceArea = Math.PI * (Math.pow(radius1, 2)
         + Math.pow(radius2, 2) + (radius1 + radius2) * slantHeight());
      return totalSurfaceArea;
   }
   
  /** 
   * Return the information about the conical frustum.
   *
   * @return print full output 
   */
   public String toString()
   {
      DecimalFormat fmt = new DecimalFormat("#,##0.0##");
      
      String output = "ConicalFrustum \"" + label + "\"";
      output += " with radius1 = " + fmt.format(radius1) + ",";
      output += " radius2 = " + fmt.format(radius2) + ",";
      output += " and height = " + fmt.format(height) + " has:\n";
      output += "\tvolume = " + fmt.format(volume()) + " cubic units\n";
      output += "\tslant height = " + fmt.format(slantHeight()) + " units\n";
      output += "\tlateral surface area = " + fmt.format(lateralSurfaceArea())
         + " units\n"; 
      output += "\ttotal surface area = " + fmt.format(totalSurfaceArea()) 
         + " square units";
      
      return output;
   } 
  
    
}
