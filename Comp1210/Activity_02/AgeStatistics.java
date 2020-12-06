import java.util.Scanner;
/**
* Prints the minutes and centuries of the user's age along
* with the user's max heart rate.
*
* Activity 2
* @author Haden Stuart
* @version 1/22/18
*/

public class AgeStatistics
{
   /**
   * Print the statistics of the users age.
   *
   * @param args Command line arguments (not used)
   */
   public static void main(String[] args)
   {
      Scanner userInput = new Scanner(System.in);
      String name = " ";
      int ageInYears = 0;
      int gender = 0;
      double maxHeartRate = 0;
   
   //Prompt the user for their name:
      System.out.print("Enter your name: ");
      name = userInput.nextLine();
   
   //Prompt the user for their age:
      System.out.print("Enter your age in years: ");
      ageInYears = userInput.nextInt();
   
   //Prompt the user for their gender
      System.out.print("Enter your gender (1 for female and 0 for male): ");
      gender = userInput.nextInt();
   
   //Convert the user's age:
      System.out.println("\tYour age in minutes is "
         + ageInYears * 525600 + " minutes.");
      System.out.println("\tYour age in centuries is "
         + (double) ageInYears / 100 + " centuries.");
         
   //Display the max heart rate
      System.out.print("Your max heart rate is ");
      if (gender == 1)
      {
      //Calculate female MHR
         maxHeartRate = (209 - (0.7 * ageInYears));
      } 
      else 
      {
      //Calculate male MHR
         maxHeartRate = (214 - (0.8 * ageInYears));
      } 
       
      System.out.println(maxHeartRate + " beats per minute.");   
   }
}