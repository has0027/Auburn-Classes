/**
* Create a class that represents a grade.
* 
* Activity 4B
* @author Haden Stuart
* @version 2/9/18
*/
public class Grade
{
/**
* Create a grade class.
*
* @param args command line arguments
*/

// Instance variables

   private double exam1, exam2, finalExam;
   private double activityAvg;
   private double quizAvg;
   private double projectAvg;
   private String studentName;
   
   
   /**
   * Create the exam types.
   **/
   public static final int EXAM_1 = 1, EXAM_2 = 2, FINAL = 3;
   
   // Create the grade weights
   private static final double EXAM_WEIGHT = 0.15,
         FINAL_WEIGHT = 0.30, ACT_WEIGHT = 0.05,
         QUIZ_WEIGHT = 0.10, PROJ_WEIGHT = 0.25;

// Constructor

/**
* Set the student name.
*
* @param studentNameIn set the student name
**/
   public Grade(String studentNameIn)
   {
      studentName = studentNameIn;
   }

// Methods

/**
* Set the lab averages.
*
* @param activityAvgIn set the quiz average
* @param quizAvgIn set the activity average
**/
   public void setLabAverages(double activityAvgIn, double quizAvgIn)
   {
      activityAvg = activityAvgIn;
      quizAvg = quizAvgIn;
   }
   
/**
* Set the project average.
*
* @param projectAvgIn set the project average
**/

   public void setProjectAvg(double projectAvgIn)
   {
      projectAvg = projectAvgIn;
   }
  
/**
* Set the exam score by checking the type.
*
* @param examType set the exam type 
* @param examScoreIn set the exam score
**/
   public void setExamScore(int examType, double examScoreIn)
   {
      if (examType == EXAM_1)
      {
         exam1 = examScoreIn;
      }
      else if (examType == EXAM_2)
      {
         exam2 = examScoreIn;
      }
      else if (examType == FINAL)
      {
         finalExam = examScoreIn;
      }
   }

/**
* Calculate the grade.
*
* @return return the gade calculation
**/
   public double calculateGrade()
   {
      double grade = exam1 * EXAM_WEIGHT + exam2 * EXAM_WEIGHT
         + finalExam * FINAL_WEIGHT 
         + activityAvg * ACT_WEIGHT
         + quizAvg * QUIZ_WEIGHT
         + projectAvg * PROJ_WEIGHT;
      return grade;
   }

/**
* Return the name and grade.
*
* @return return the student name and final grade
**/
   public String toString()
   {
      return "Name: " + studentName + "\n"
         + "Course Grade: " + calculateGrade();
   }
}