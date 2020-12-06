import java.text.DecimalFormat;
/**
* Checks bunny information.
* 
* Project 11
* @author Haden Stuart
* @version 4/20/18
*/
public abstract class Bunny implements Comparable<Bunny> {

// Variables

   protected String name;
   protected String breed;
   protected double weight;
   protected static int bunnyCount;

// Constructor

/**
* Get the name, breed, and weight.
*
* @param nameIn set name
* @param breedIn set breed
* @param weightIn set weight
* @throws NegativeValueException check sign
*/
   public Bunny(String nameIn, String breedIn, double weightIn)
       throws NegativeValueException {
       
      name = nameIn;
      breed = breedIn;
      
      if (weightIn < 0) {
         throw new NegativeValueException(weightIn);
      }
      else {
         weight = weightIn;
      }
      bunnyCount++;
   }

// Methods

/**
* Get the name.
*
* @return name
*/
   public String getName() {
      return name;
   }

/**
* Set the name.
*
* @param nameIn get name
*/
   public void setName(String nameIn) {
      name = nameIn;
   }

/**
* Get the breed.
*
* @return breed
*/
   public String getBreed() {
      return breed;
   }

/**
* Set the breed.
*
* @param breedIn get the breed
*/
   public void setBreed(String breedIn) {
      breed = breedIn;
   }

/**
* Get the weight.
*
* @return weight
*/
   public double getWeight() {
      return weight;
   }

/**
* Set the weight.
*
* @param weightIn get the weight
*/
   public void setWeight(double weightIn) {
      weight = weightIn;
   }

/**
* Get the bunny count.
*
* @return bunnyCount
*/
   public static int getBunnyCount() {
      return bunnyCount;
   }

/**
* Reset the bunny count.
*
*
*/
   public static void resetBunnyCount() {
      bunnyCount = 0;
   }
  
/**
* Estimate the cost.
*
* @return nothing
*/
   public abstract double estimatedMonthlyCost();
   
/**
* Set the string.
*
* @return output
*/
   public String toString() {
   
      DecimalFormat fmt = new DecimalFormat("##0.00");
      
      String output = name + " (" + this.getClass().getName() + ")";
      output += "   Breed: " + getBreed();
      output += "   Weight: " + getWeight();
      output += "\nEstimated Monthly Cost: $"; 
      output += fmt.format(estimatedMonthlyCost());
      return output;
   }

/**
* Compare objects.
*
* @param obj object
* @return if object is the same
*/
   public boolean equals(Object obj) {
   
      if (!(obj instanceof Bunny)) {
         return false;
      }
      else {
         Bunny b = (Bunny) obj;
         return (name.equalsIgnoreCase(b.getName()) 
            && breed.equalsIgnoreCase(b.getBreed())
            && Math.abs(weight - b.getWeight()) < .000001);
      }
   }

/**
* Set the hashcode.
*
* @return 0
*/
   public int hashCode() {
      return 0;
   }
   
/**
* Compares bunny weight.
*
* @param obj bunny value
* @return compare value
*/ 
   public int compareTo(Bunny obj) {
   
      return this.name.compareTo(obj.name);
   }
}