// Haden Stuart
// has0027
// hw3_has0027.cpp
// This program will run a duel simulator 10000 times to determine
// which strategy would be best for Aaron to use.
// I recieved no help other than the information provided in the specs.

# include <iostream> 
# include <stdlib.h> 
# include <assert.h> 
# include<ctime> 
using namespace std;

// Constants

const double Aaron_accuracy = (1.0 / 3.0); // Out of 100 this is ~33
const double Bob_accuracy = (1.0 / 2.0); // Out of 100 this is 50
const double Charlie_accuracy = 1.0; // Hits every time
const int times_attempted = 10000;

// Methods

bool at_least_two_alive(bool A_alive, bool B_alive, bool C_alive) {
   if (A_alive && B_alive) {
      return true;
   }
   else if (B_alive && C_alive) {
      return true;
   }
   else if (A_alive && C_alive) {
      return true;
   }
   else 
      return false; 
}

void Aaron_shoots1(bool& B_alive, bool& C_alive) {

   int shoot_target_result = rand()%100;
   
   if (shoot_target_result <= 33 && C_alive) {
      C_alive = false;
   }
      
   else if (shoot_target_result <= 33 && B_alive) {
      B_alive = false;
   } 
}

void Bob_shoots(bool& A_alive, bool& C_alive) {
	
   int shoot_target_result = rand()%100;
   
   if (shoot_target_result <= 50 && C_alive) {
      C_alive = false;
   }
      
   else if (shoot_target_result <= 50 && A_alive) {
      A_alive = false;
   }
}

void Charlie_shoots(bool& A_alive, bool& B_alive) {
	
   int shoot_target_result = rand()%100;
  
   if (B_alive) {
      B_alive = false;
   }
      
   else if (A_alive) {
      A_alive = false; 
   }      
}

void Aaron_shoots2(bool& B_alive, bool& C_alive) {
	
   int shoot_target_result = rand()%100;
   
   if (shoot_target_result <= 33 && C_alive) {
      C_alive = false;
   }
      
   else if (shoot_target_result <= 33 && B_alive) {
      B_alive = false;
   }       
}

// Testing

void test_at_least_two_alive(void) {
 
   cout << "Unit Testing 1: Function - at_least_two_alive()\n";
   
   cout << "\tCase 1: Aaron alive, Bob alive, Charlie alive\n";
   assert(true == at_least_two_alive(true, true, true));
   cout << "\tCase passed ...\n"; 
   
   cout << "\tCase 2: Aaron dead, Bob alive, Charlie alive\n";
   assert(true == at_least_two_alive(false, true, true));
   cout << "\tCase passed ...\n"; 
   
   cout << "\tCase 3: Aaron alive, Bob dead, Charlie alive\n";
   assert(true == at_least_two_alive(true, false, true));
   cout << "\tCase passed ...\n";
     
   cout << "\tCase 4: Aaron alive, Bob alive, Charlie dead\n";
   assert(true == at_least_two_alive(true, true, false));
   cout << "\tCase passed ...\n";  
     
   cout << "\tCase 5: Aaron dead, Bob dead, Charlie alive\n";
   assert(false == at_least_two_alive(false, false, true));
   cout << "\tCase passed ...\n";
   
   cout << "\tCase 6: Aaron dead, Bob alive, Charlie dead\n";
   assert(false == at_least_two_alive(false, true, false));
   cout << "\tCase passed ...\n"; 
   
   cout << "\tCase 7: Aaron alive, Bob dead, Charlie dead\n";
   assert(false == at_least_two_alive(true, false, false));
   cout << "\tCase passed ...\n";
   
   cout << "\tCase 8: Aaron dead, Bob dead, Charlie dead \n";
   assert(false == at_least_two_alive(false, false, false));
   cout << "\tCase passed ...\n"; 
       
}

// Let's play 

int strat1() {
   int winner = -1;
   bool A_alive = true;
   bool B_alive = true;
   bool C_alive = true;
   
   while (at_least_two_alive(A_alive, B_alive, C_alive)) { 
      if (A_alive) {Aaron_shoots1(B_alive, C_alive);}
      if (B_alive) {Bob_shoots(A_alive, C_alive);}
      if (C_alive) {Charlie_shoots(A_alive, B_alive);}
   } 
   
   if (A_alive && !B_alive && !C_alive) {winner = 1;}      
   if (!A_alive && B_alive && !C_alive) {winner = 2;}
   if (!A_alive && !B_alive && C_alive) {winner = 3;}
    
   return winner;
}

 // Since Aaron intentionally misses first shot,
 // we can just say his first shot doesnt happen and move him to the back.  
int strat2() {
   int winner = -1;
   bool A_alive = true;
   bool B_alive = true;
   bool C_alive = true;
   
   while (at_least_two_alive(A_alive, B_alive, C_alive)) { 
      if (B_alive) {Bob_shoots(A_alive, C_alive);}
      if (C_alive) {Charlie_shoots(A_alive, B_alive);}
      if (A_alive) {Aaron_shoots2(B_alive, C_alive);}
   } 
   
   if (A_alive && !B_alive && !C_alive) {winner = 1;}      
   if (!A_alive && B_alive && !C_alive) {winner = 2;}
   if (!A_alive && !B_alive && C_alive) {winner = 3;}
    
   return winner;
}

// Main 

int main() {

   cout << "*** Welcome to the Duel Simulator ***\n";
   test_at_least_two_alive();
   cout << "Press Enter to continue..."; 
   cin.get();
   
   cout << "Ready to test strategy 1 (run 10000 times):\n";
   cout << "Press Enter to continue...";
   cin.get();
   
   srand(time(0));
   
   // Strategy 1 output
   
   int A_wins = 0;
   int B_wins = 0;
   int C_wins = 0;
   
   for (int i = 0; i < 10000; i++) {   
      int winner = strat1();
      switch(winner) {
         case 1: A_wins++;
            break;
         case 2: B_wins++;
            break;
         case 3: C_wins++;
            break;
         default: cout << "Error";
            break;
      }
   }  
   
   double A_percent = (A_wins / 10000.0) * 100.0;
   double B_percent = (B_wins / 10000.0) * 100.0;
   double C_percent = (C_wins / 10000.0) * 100.0;
   cout << "Aaron won " << A_wins << "/10000 duels or " << A_percent << "%\n";
   cout << "Bob won " << B_wins << "/10000 duels or " << B_percent << "%\n";
   cout << "Charlie won " << C_wins << "/10000 duels or " << C_percent << "%\n\n";
   
   // Strategy 2 output
   
   cout << "Ready to test strategy 2 (run 10000 times):\n";
   cout << "Press Enter to continue...";
   cin.get();
   
   int A_wins2 = 0;
   int B_wins2 = 0;
   int C_wins2 = 0;
   
   for (int i = 0; i < 10000; i++) {   
      int winner = strat2();
      switch(winner) {
         case 1: A_wins2++;
            break;
         case 2: B_wins2++;
            break;
         case 3: C_wins2++;
            break;
         default: cout << "Error";
            break;
      }
   }  
   
   double A_percent2 = (A_wins2 / 10000.0) * 100.0;
   double B_percent2 = (B_wins2 / 10000.0) * 100.0;
   double C_percent2 = (C_wins2 / 10000.0) * 100.0;
   cout << "Aaron won " << A_wins2 << "/10000 duels or " << A_percent2 << "%\n";
   cout << "Bob won " << B_wins2 << "/10000 duels or " << B_percent2 << "%\n";
   cout << "Charlie won " << C_wins2 << "/10000 duels or " << C_percent2 << "%\n\n";
   
   // Result 
   if (A_wins > A_wins2) {cout << "Strategy 1 is better than strategy 2.";}
   else {cout << "Strategy 2 is better than strategy 1.\n";}
   
   return 0;
}


