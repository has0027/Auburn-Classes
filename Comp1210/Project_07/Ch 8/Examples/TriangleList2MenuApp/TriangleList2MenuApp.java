import java.util.Scanner;
import java.io.FileNotFoundException;
/**  */
public class TriangleList2MenuApp
{
/**
 * 
 * @param args - is not used.
 * @throws FileNotFoundException from scanning input file.
 */
   public static void main(String[] args) throws FileNotFoundException
   {
      String tListName = "no list name";
      Triangle[] myList = new Triangle[20];
      TriangleList2 myTList = new TriangleList2(tListName, myList, 0);
      String fileName = "no file name";
      
      double s1, s2, s3;   
      
      String code = "";
   
      Scanner scan = new Scanner(System.in);
      
      System.out.println("TriangleList System Menu\n"
                       + "R - Read in File and Create TriangleList\n"
                       + "P - Print TriangleList\n" 
                       + "S - Print Smallest Perimeter\n"
                       + "L - Print Largest Perimeter\n"   
                       + "T - Print Total of Perimeters\n"   
                       + "A - Add Triangle Object\n"
                       + "D - Delete Triangle Object\n"
                       + "Q - Quit");
   
      do {
         System.out.print("Enter Code [R, P, S, L, T, A, D, or Q]: ");
         code = scan.nextLine();
         if (code.length() == 0) {
            continue;
         }
         code = code.toUpperCase();
         char codeChar = code.charAt(0);
         switch (codeChar) {
            case 'R':
               System.out.print("\tFile name: ");
               fileName = scan.nextLine();
            
               myTList = myTList.readFile(fileName);
            
               System.out.println("\tFile read in and "
                              + "TriangleList object created\n");
               break; 
                    
            case 'P':
               System.out.println(myTList);
               break;
               
            case 'S':
               System.out.println("\n\tSmallest Perimeter: " 
                                    + myTList.smallestPerimeter() + "\n");
               break;
               
            case 'L':
               System.out.println("\n\tLargest Perimeter: " 
                                    + myTList.largestPerimeter() + "\n");
               break;
         
            case 'T':
               System.out.println("\n\tTotal of Perimeters: " 
                                    + myTList.totalOfPerimeters() + "\n");
               break;
               
            case 'A':
               System.out.print("\tSide1: ");
               s1 = Integer.parseInt(scan.nextLine());
               System.out.print("\tSide2: ");
               s2 = Integer.parseInt(scan.nextLine());
               System.out.print("\tSide3: ");
               s3 = Integer.parseInt(scan.nextLine());
            
               myTList.addTriangle(s1, s2, s3);
               System.out.println("\tTriangle added\n");
               break;   
               
            case 'D':
               System.out.print("\tSide1: ");
               s1 = Integer.parseInt(scan.nextLine());
               System.out.print("\tSide2: ");
               s2 = Integer.parseInt(scan.nextLine());
               System.out.print("\tSide3: ");
               s3 = Integer.parseInt(scan.nextLine());
            
               if (myTList.deleteTriangle(s1, s2, s3)) {
                  System.out.println("\t\"" + s1 + ", " 
                                            + s2 + ", " 
                                            + s3 + "\" deleted\n");
               }
               else {
                  System.out.println("\t\"" + s1 + ", " 
                                            + s2 + ", " 
                                            + s3 
                                            + "\" not found\n");
               }
               break;   
                  
            case 'Q':
               break;
               
            default:
             // loop again
         }
      
      } while (!code.equalsIgnoreCase("Q"));   
      
      
   }
}