// Haden Stuart
// has0027
// hw5_has0027.cpp
// This program will create a trivia quiz game and will
// distribute points based on the correctness of the user's answers.
// I used the links below as a reference for how to use the stated functions
// http://www.cplusplus.com/reference/string/string/getline/
// http://www.cplusplus.com/reference/istream/istream/ignore/

/* Uncomment the following for debug version */
// #define UNIT_TESTING

#include <iostream>
#include <assert.h>
#include <cstring>
using namespace std;
int numOfQuestions = 0;

// Create trivia node struct
struct triviaNode {
   string question;
   string answer;
   int points;
   triviaNode *next;
};

// Add nodes to trivia node linked list
void addNode(string question, string answer, int points, triviaNode *node) {

   triviaNode *temp = new triviaNode;
   temp->question = question;
   temp->answer = answer;
   temp->points = points;
   temp->next = NULL;
 
 // Find the last node of the linked list  
   triviaNode *find = node;
   while (find->next != NULL) {
      find = find->next;
   }
   
   find->next = temp;
   numOfQuestions++;
}

// Create default questions
void defQuestions(triviaNode *node) {

   triviaNode *firstQ = node;
   triviaNode *secondQ = new triviaNode;
   triviaNode *thirdQ = new triviaNode;

   firstQ->question = "How long was the shortest war on record? (Hint: how many minutes)";
   firstQ->answer = "38";
   firstQ->points = 100;
   firstQ->next = secondQ;
   numOfQuestions++;
   
   secondQ->question = "What was Bank of America's original name? (Hint: Bank of Italy or Bank of Germany)";
   secondQ->answer = "Bank of Italy";
   secondQ->points = 50;
   secondQ->next = thirdQ; 
   numOfQuestions++;
      
   thirdQ->question = "What is the best-selling video game of all time? (Hint: Minecraft or Tetris)";
   thirdQ->answer = "Tetris";
   thirdQ->points = 20;
   thirdQ->next = NULL;
   numOfQuestions++;
}

// Ask the user questions and check for correctness
int quiz(triviaNode *node) {
   string tmp;
   int currentPoints = 0;
  
  // Check if Trivia is empty 
   if (numOfQuestions == 0) {
      cout << "Warning - The number of trivia to be asked must be equal to or larger than one.\n";
      return 1;
   }
  
  // Ask each question in Trivia list 
   for (int i = 0; i < numOfQuestions; i++) {
      cout << "\nQuestion: " << node->question;
      cout << "\nAnswer: ";
      getline(cin, tmp);
   
   // Correct answer
      if (tmp.compare(node->answer) == 0) {
         cout << "Your answer is correct. You recieve " << node->points << " points.";
         currentPoints += node->points;
      }
      
      // Incorrect answer
      else {
         cout << "Your answer is wrong. The correct answer is: " << node->answer;
      }
   
      cout << "\nYour total points: " << currentPoints << endl;
      node = node->next;
   }

   return currentPoints;
}

#ifdef UNIT_TESTING

/********** Testing **********/
int main() {
   cout << "*** This is a debug version ***\n";

// Test1
   cout << "Unit Test Case 1: Ask no questions. The program should give a warning message.\n";
   triviaNode *emptyList = new triviaNode;
   quiz(emptyList);
   cout << "Case passed ...\n\n";
   
// Test2
   cout << "Unit Test Case 2: Initialize the hard coded questions.\n";
   triviaNode *defList = new triviaNode;
   defQuestions(defList);
   if (numOfQuestions == 3) {cout << "Case passed ...\n\n";}
   else {cout << "Case failed ...\n\n";}
   
// Test3
   cout << "Unit Test Case 3: Add a new node.\n";
   triviaNode *addedList = new triviaNode;
   numOfQuestions = 0;
   string testQ = "Does this test work?";
   string testA = "indeed";
   int testP = 50;
   addNode(testQ, testA, testP, addedList);
   if (numOfQuestions == 1) {cout << "Case passed ...\n\n";}
   else {cout << "Case failed ...\n\n";}

// Test4.1
   cout << "Unit Test Case 4.1: Ask one question. Answer correctly. (Correct answer is 38)";
   triviaNode *singleQ = new triviaNode;
   numOfQuestions = 0;
   singleQ->question = "How long was the shortest war on record? (Hint: how many minutes)";
   singleQ->answer = "38";
   singleQ->points = 100;
   singleQ->next = NULL;
   numOfQuestions++;
   if (quiz(singleQ) > 0) {cout << "Case passed ...\n\n";}
   else {cout << "Case failed ...\n\n";}

// Test4.2
   cout << "Unit Test Case 4.2: Ask one question. Answer incorrectly. (Answer any number other than 38)";
   if (quiz(singleQ) == 0) {cout << "Case passed ...\n\n";}
   else {cout << "Case failed ...\n\n";}
 
// End 
   cout << "*** End of the debug version ***\n";
   return 0;
}

#else

/********** Main **********/
int main() {

   triviaNode *Trivia = new triviaNode;
   defQuestions(Trivia);
   string questionIn;
   string answerIn;
   int pointsIn;
   string result;
   string yes = "Yes";
   
   /** Output **/
   cout << "*** Welcome to Haden's trivia quiz game ***";
  
   // Get user questions
   do { 
      cout << "\nEnter a question: ";
      getline(cin, questionIn);
      
      cout << "Enter an answer: ";
      getline(cin, answerIn);
      
      cout << "Enter award points: ";
      cin >> pointsIn;
      cin.ignore(1, '\n');
               
      cout << "Continue? (Yes/No): ";
      cin >> result;
      cin.ignore(1, '\n');
      
      addNode(questionIn, answerIn, pointsIn, Trivia);
   } while (result.compare(yes) == 0);
   
   // Let's play
   quiz(Trivia); 
  
   cout << "\n*** Thank you for playing the trivia quiz game. Goodbye! ***\n";
   
   return 0; 
}
#endif