import java.text.DecimalFormat;
/**
* Checks bunny information.
* 
* Project 9
* @author Haden Stuart
* @version 4/3/18
*/
public abstract class Bunny {

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
*/
   public Bunny(String nameIn, String breedIn, double weightIn) {
      name = nameIn;
      breed = breedIn;
      weight = weightIn;
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
      String output = "";
      
      output += name + " (" + this.getClass().getName() + ")";
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
* Compares bunny name.
*
* @param obj bunny value
* @return compare value
*/ 
   public int compareTo(Bunny obj) {
   
      if (Math.abs(this.weight - obj.getWeight()) < 0.000001) {
         return 0;
      }
      else if (this.weight < obj.getWeight()) {
         return -1;
      }
      else {
         return 1;
      }
   }
}