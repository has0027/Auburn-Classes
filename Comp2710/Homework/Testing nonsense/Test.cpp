// Haden Stuart
// For testing purposes

#include <iostream>
#include <cmath>
#include <cstring>
#include <string>
#include <array>
#include <fstream>
#include <cstdlib>
#include <assert.h> 
using namespace std;

void moveOneDisk(string startPeg, string endPeg, int count);
void moveTower(int numDisks, string startPeg, string endPeg, string tempPeg, int count);
int mysteryAlgorithm(int array[], int n);
int Count(ifstream& inStream);


struct Node {
   string name;
   int number;
   Node* next;
};

int main() {
/*=========================Strings======================================*/  
   // string a = "test";
   // cout << a << endl;    
   // char b[15] = "test again";
   // cout << b << endl;    
   // cout << a.at(2); // should be "s"
/*=========================Structs======================================*/
   // struct book 
   // {
      // string author;
      // string title;
      // char description[50];
   // };
//    
   // book test = {"Haden", "Testing", "This is to test the struct"};
//    
   // cout << test.author << endl;
   // cout << test.title << endl;
   // cout << test.description << endl;
  
/*=======================Pointers=========================================*/
   
   // int x = 100;
   // int* p = &x;
//    
   // cout << "x = " << x << endl;
   // cout << "&x = " << &x << endl;
   // cout << "p = " << p << endl;

/*========================Nodes=========================================*/ 
   
   // Node* test = new Node;
   // Node* t1 = new Node;
   // Node* t2 = new Node;
//    
   // test->next = t1;
   // test->name = "Hero";
//    
   // t1->name = "Haden";
   // t1->number = 8;
   // t1-> next = t2;
//    
   // t2->name = "Stuart";
   // t2->number = 8;
   // t2-> next = NULL;
//    
   // for (int i = 0; i < 3; i++) {
      // cout << test->name << endl;
      // test = test->next;
   // }

/*========================Tower of Hanoi=========================================*/
   // int i = 0;
   // int* p = &i;
   // moveTower(10, "A", "C", "B", i);   
   // cout << "Number of steps is: " << i << endl;
/*========================MysteryAlgorithm===========================================*/
   // int array[] = {-1, 2, -3, 4, -5, 6, 7, -8, 9, -10};
   // int n = 10;
   // cout << mysteryAlgorithm(array, n);
/*=========================Dupe Numbers=============================================*/
   ifstream input;
   input.open("Dupes");
   cout << Count(input);
   input.close();

/*======================================================================*/

/*======================================================================*/

      
   return 0;
}



void moveOneDisk(string startPeg, string endPeg, int count) {  
   cout << "Move one disk from " << startPeg << " to " << endPeg << endl;
   count++;
}

void moveTower(int numDisks, string startPeg, string endPeg, string tempPeg, int count) {
   if  (numDisks == 1) {
      moveOneDisk(startPeg, endPeg, count);
   }
   else{
      moveTower (numDisks-1, startPeg, tempPeg, endPeg, count);  
      moveOneDisk(startPeg, endPeg, count);
   }
}

int mysteryAlgorithm(int array[], int n) {
   int sum = 0;
   int max = 0;

   for(int i = 1; i < (n + 1); i++) {
      sum = 0;
      for(int j = i; j < (n + 1); j++) {
         sum = sum + array[j];
         if (sum > max) {
            max = sum;
         }
      }
   }
   return max;
}

int Count(ifstream& inStream) {
   int i, j;
   int count = 0;
   if (inStream.fail()) {
      cout << "Input file opening failed\n";
      exit(1);
   } 
   while (!inStream.eof()) {
      inStream >> i;
      if (!inStream.eof()) {
         inStream >> j;
         if (i == j) {
            count++;
         }
      }
   }    
   return count;
}
