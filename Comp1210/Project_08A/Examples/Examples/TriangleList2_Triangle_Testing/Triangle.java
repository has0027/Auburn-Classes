/** 
 * Represents a triangle with 3 sides and provides a classification
 * of the triangle (equilateral, scalene, not a triangle, or isosceles.
 */
public class Triangle
{
   private double s1; 
   private double s2; 
   private double s3;  

/** 
  * Initializes a Triangle object given the length of 
  * its 3 sides. 
  *
  * @param side1 Length of side 1.
  * @param side2 Length of side 2.
  * @param side3 Length of side 3.
  */
   public Triangle(double side1, double side2, double side3) 
   {
      s1 = side1;
      s2 = side2;    
      s3 = side3;  
   }
   
   /** 
	 * Getter for s1. 
    *
	 * @return s1
	 */                 
   public double getS1() {
      return s1;
   }
   
   /** 
	 * Getter for s2. 
    *
	 * @return s2
	 */                 
   public double getS2() {
      return s2;
   }

   /** 
	 * Getter for s3.
    *
	 * @return s3
	 */                 
   public double getS3() {
      return s3;
   }
    
   /** 
	 * Returns the classsification of the triangle based 
	 * on the length of its 3 sides. 
	 *
	 * @return classification of triangle
	 */    
   public String getClassification() { 
    
      String result;  
      
      if (s1 <= 0 || s2 <= 0 ||  s3 <= 0) {
         result = "not a triangle";
      }
      else if ((s1 >= s2 + s3) || (s2 >= s1 + s3) || (s3 >= s1 + s2)) {
         result = "not a triangle";
      }
      else if ((s1 == s2) && (s2 == s3)) {  
         result = "equilateral";   
      } 
      else if ((s1 != s2) && (s1 != s3) && (s2 != s3)) { 
         result = "scalene";
      } 
      else {
         result = "isosceles";
      }
       
      return result; 
   } 
   
   /** 
	 * Returns the perimeter of the triangle 
	 * (i.e., returns the sum of the lengths of the 3 sides). 
	 *
	 * @return perimeter of triangle
	 */
   public double perimeter() {  
      return s1 + s2 + s3; 
   } 

      /** 
	 * Determines of if corresponding sides are equal.  
    *
	 * @param o the triangle to compare
    * 
	 * @return true if all corresponding sides are equal
	 */
   public boolean equals(Object o) {
      if (!(o instanceof Triangle)) {
         return false;
      }
      Triangle t = (Triangle) o; 
      return (s1 == t.s1 && s2 == t.s2 && s3 == t.s3);
   }

   /** 
    * @return 0 for no hashcode
	 */
   public int hashCode() {
      return 0;
   }
   
   /** 
	 * Returns a String representation of the triangle 
	 * including the length of its 3 sides and its classification. 
	 *
	 * @return string representation of the triangle object
	 */
   public String toString() {  
      String output = "" + s1 + ", " + s2 + ", " + s3 
            + " (" + getClassification() + ")";
       
      return output; 
   } 
}
