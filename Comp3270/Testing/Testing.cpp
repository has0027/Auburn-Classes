// Haden Stuart
// For testing purposes

#include <iostream>
#include <cmath>
#include <cstring>
#include <string>
#include <array>
#include <vector>
#include <fstream>
#include <cstdlib>
#include <assert.h> 
using namespace std;

void moveOneDisk(string startPeg, string endPeg, int count);
void moveTower(int numDisks, string startPeg, string endPeg, string tempPeg, int count);
void heapify(int arr[], int n, int i);
void heapSort(int arr[], int n);
void printArray(int arr[], int n);

struct Node {
   string name;
   int number;
   Node* next;
};

int main() {
   
/*========================Tower of Hanoi=========================================*/
   // int i = 0;
   // int* p = &i;
   // moveTower(10, "A", "C", "B", i);   
   // cout << "Number of steps is: " << i << endl;
/*=========================MysteryAlgorithm=========================================*/
   // int array[] = {-1, 2, -3, 4, -5, 6, 7, -8, 9, -10};
   // int n = 10;
   // cout << mysteryAlgorithm(array, n);
/*=========================Dupe Numbers=============================================*/
   // ifstream input;
   // input.open("Dupes");
   // cout << Count(input);
   // input.close();
/*==========================Induction============================================*/
   // cout << g(0) << endl;
   // cout << g(1) << endl;
   // cout << g(2) << endl;
   // cout << g(3) << endl;
   // cout << g(4) << endl;
/*==========================Heap Sort============================================*/
   int  A[] = {6, 8, 9, 10, 12, 16, 15, 13, 14, 19, 18, 17};
   heapSort(A, 6); 
  
   cout << "Sorted array is \n"; 
   printArray(A, 6); 
   
/*======================================================================*/
/*======================================================================*/
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
         if (i == j) {count++;}
      }
   }    
   return count;
}

int g(int n) {
   if (n <= 1) {
      return n;}
   else {
      return 5*g(n-1) - 6*g(n-2);
   }
}

void heapify(int arr[], int n, int i) 
{ 
   int largest = i; // Initialize largest as root 
   int l = 2*i + 1; // left = 2*i + 1 
   int r = 2*i + 2; // right = 2*i + 2 
  
    // If left child is larger than root 
   if (l < n && arr[l] > arr[largest]) 
      largest = l; 
  
    // If right child is larger than largest so far 
   if (r < n && arr[r] > arr[largest]) 
      largest = r; 
  
    // If largest is not root 
   if (largest != i) 
   { 
      swap(arr[i], arr[largest]); 
   
        // Recursively heapify the affected sub-tree 
      heapify(arr, n, largest); 
   } 
} 
  
// main function to do heap sort 
void heapSort(int arr[], int n) 
{ 
    // Build heap (rearrange array) 
   for (int i = n / 2 - 1; i >= 0; i--) 
      heapify(arr, n, i); 
  
    // One by one extract an element from heap 
   for (int i=n-1; i>=0; i--) 
   { 
        // Move current root to end 
      swap(arr[0], arr[i]); 
   
        // call max heapify on the reduced heap 
      heapify(arr, i, 0); 
   } 
} 
  
/* A utility function to print array of size n */
void printArray(int arr[], int n) 
{ 
   for (int i=0; i<n; ++i) 
      cout << arr[i] << " "; 
   cout << "\n"; 
} 
