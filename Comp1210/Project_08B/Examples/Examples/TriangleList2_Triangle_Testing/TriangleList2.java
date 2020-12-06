//import java.util.ArrayList;
import java.util.Scanner;
import java.io.File;
import java.io.IOException;
import java.text.DecimalFormat;

/**
 * Defines objects with a name and a list of Triangle objects.
 */
public class TriangleList2 {
   private String listName;
   private Triangle[] tList;
   private int numberOfTriangles;
   
   /**
    * Constuctor.
    * @param listNameIn for listName
    * @param tListIn for listIn
    * @param numberOfTrianglesIn for numberOfTriangles
    */
   public TriangleList2(String listNameIn, Triangle[] tListIn, 
                        int numberOfTrianglesIn) {
      listName = listNameIn;
      tList = tListIn;
      numberOfTriangles = numberOfTrianglesIn;
   }
   
   /**
    * Getter for listName.
    * @return listName
    */
   public String getListName() {
      return listName;
   }
   
   /**
    * @return the array of Triangle objects in the tList.
    */
   public Triangle[] getList() {
      return  tList;
   }


   /**
    * @return the number of Triangle objects in the tList.
    */
   public int numTriangles() {
      return  numberOfTriangles;
   }
   
   /**
    * Finds the total of the perimeters using a while loop.
    *
    * @return the sum of all perimeters in this TriangleList object;
    *         return 0 if list is empty.
    */
   public double totalOfPerimeters() {
      double total = 0;
      
      int index = 0;
      while (index < numberOfTriangles) {
         total += tList[index].perimeter();
         index++;  
      }   
      
      return total;
   }

   /**
    * Finds the total of the perimeters using a for loop.
    *
    * @return the sum of all perimeters in this TriangleList object;
    *         return 0 if list is empty.
    */
   public double totalOfPerimeters2() {
      double total = 0;
   
      for (int index = 0; index < numberOfTriangles; index++) {
         total += tList[index].perimeter();
      }   
      
      return total;
   }


   /**
    * @return the smallest perimeter of Triangle objects in the tList.
    */
   public double smallestPerimeter() {
   
      if (numberOfTriangles <= 0) {
         return 0;
      }
      
      double smallest = tList[0].perimeter();
      int index = 0;
      while (index < numberOfTriangles) {
         if (!(smallest < tList[index].perimeter())) {
            smallest = tList[index].perimeter();
         }
         index++;  
      }   
      
      return smallest;
   }

   /**
    * @return the largest perimeter of Triangle objects in the tList.
    */
   public double largestPerimeter() {
      double largest = 0;
      int index = 0;
      while (index < numberOfTriangles) {
         if (largest < tList[index].perimeter()) {
            largest = tList[index].perimeter();
         }
         index++;  
      }   
      
      return largest;
   }
   
   /**
    * @return  the smallest perimeter of Triangle objects in the tList
    *          along with the sides of the triangle.
    */
   public String largestPerimeterWithSides() {
      double largest = 0;
      int indexOfLargest = 0;
      int index = 0;
      while (index < numberOfTriangles) {
         if (tList[indexOfLargest].perimeter() 
               < tList[index].perimeter()) {
            indexOfLargest = index;
         }
         index++;  
      }   
      
      if (numberOfTriangles > 0) {
         return tList[indexOfLargest].perimeter()
            + " for sides "
            + tList[indexOfLargest].getS1() + ", " 
            + tList[indexOfLargest].getS2() + ", " 
            + tList[indexOfLargest].getS3();
      }
      else {
         return "No triangles in list";
      }
   }
   
   /**
    * @return the String representation of the TriangleList.
    */
   public String toString() {
      String result = "\n" + listName + "\n";
      int index = 0;
      while (index < numberOfTriangles) {
         result += "\n" + tList[index] + "\n"; 
         index++;  
      }   
      return result;
   }
   
   /**
    * @return the String representation of the TriangleList Summary.
    */
   public String summary() {
      DecimalFormat df = new DecimalFormat("#,##0.0##");
      String result = "";
      result += "----- Summary for " + getListName() + " -----"; 
      result += "\nNumber of Triangles: " + numTriangles();
      result += "\nSmallest Perimeter: " + smallestPerimeter(); 
      result += "\nLargest Perimeter: "  + largestPerimeterWithSides();
      result += "\nTotal of Perimeters: "  + totalOfPerimeters();
      
      return result;
   }


   //************************************************************
   //******************** Begin new methods *********************
   //************************************************************
   
  /**  
   * Reads in triangle data from file and creates a 
   * TriangleList object.
   *
   * @param fileNameIn for fileName to read
   * @return TriangleList
   * @throws IOException for file reading
   */   
   public TriangleList2 readFile(String fileNameIn) throws IOException {
            
      Scanner scanFile = new Scanner(new File(fileNameIn));
      Triangle[] myList = new Triangle[20];
      String tListName = "";
      int numTriangles = 0;
      double side1 = 0, side2 = 0, side3 = 0;
      
      listName = scanFile.nextLine();      
      while (scanFile.hasNext()) {
         side1 = Double.parseDouble(scanFile.nextLine());
         side2 = Double.parseDouble(scanFile.nextLine());
         side3 = Double.parseDouble(scanFile.nextLine());
         
         Triangle t = new Triangle(side1, side2, side3);
         myList[numTriangles] = t;
         numTriangles++;
         //myList.add(t);           
      }
      
      TriangleList2 tL = new TriangleList2(listName, myList, numTriangles);
      
      return tL;
   }
   
  /**  
   * Add a Triangle object to the list.
   * 
   * @param s1In Length of side 1.
   * @param s2In Length of side 2.
   * @param s3In Length of side 3.
   */   
   public void addTriangle(double s1In, double s2In, double s3In) {
       
      Triangle t = new Triangle(s1In, s2In, s3In);
      tList[numberOfTriangles] = t;
      numberOfTriangles++;
   }
   
   
  /**
   * Deletes a Triangle from the list.
   *   
   * @param s1In for side 1
   * @param s2In for side 2
   * @param s3In for side 3
   * @return true if deleted else return false
   */   
   public boolean deleteTriangle(double s1In, double s2In, double s3In) {
   
      boolean result = false;
      int index = -1;
      Triangle t = new Triangle(s1In, s2In, s3In);
      for (int i = 0; i < numberOfTriangles; i++) {
         if (tList[i].equals(t)) { // using equals method in place of if below
         // if (tList[i].getS1() == s1In 
         //    && tList[i].getS2() == s2In
         //    && tList[i].getS3() == s3In) {
         //    
            for (int j = i; j < numberOfTriangles - 1; j++) {
               tList[j] = tList[j + 1];
            }
            tList[numberOfTriangles - 1] = null; // overwrite duplicate at end
            numberOfTriangles--;
            result = true;
            break;
         }
      }
   
      return result;
      
   }
}
