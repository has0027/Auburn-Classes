// Haden Stuart
// has0027
// hw4_has0027.cpp
// This program will take two input arrays and 
// combine them into a sorted sorted array.
// I recieved no help other than the information provided in the specs.

#include <iostream>
#include <fstream>
#include <cstdlib>
#include <assert.h> 
using namespace std;


// Read the input files
int readfile(int inputArray[], ifstream& inStream) {
   int index = 0;
   
   if (inStream.fail()) {
      cout << "Input file opening failed\n";
      exit(1);
   } 
   
   while (! inStream.eof()) {
      inStream >> inputArray[index];
      index++;
   }
      
   return index;
}
 
 
 // Combine and sort the input files
int sort(int inputArray1[], int inputArray1_size,
   int inputArray2[], int inputArray2_size, int combinedArray[]) {
 
   int size = inputArray1_size + inputArray2_size;
 
   copy(inputArray1, inputArray1 + inputArray1_size, combinedArray);
   copy(inputArray2, inputArray2 + inputArray2_size, combinedArray + inputArray1_size);
   
   // Sort combined array (ugly but works)
   for (int i = 0; i < size - 1; i++) {
      for (int j = 0; j < size - 1 - i; j++) {
         if (combinedArray[j + 1] < combinedArray[j]) {
            int temp = combinedArray[j];
            combinedArray[j] = combinedArray[j + 1];
            combinedArray[j + 1] = temp;
         }
      }
   }
   
   return size;
}


// Create the output file
void writefile(int combinedArray[], int combinedArray_size) {
   ofstream output;
   output.open("output.txt");

   for (int i = 0; i < combinedArray_size; i++) {
      output << combinedArray[i] << endl;
   }
   
   output.close();
}


// Main
int main() {
   ifstream inStream1;
   ifstream inStream2;
   int inputArray1[100];
   int inputArray2[100];
   char filename1[50];
   char filename2[50];
   int data1;
   int data2;

   cout << "*** Welcome to Haden Stuart's sorting program ***\n";
   
   
   /*----- First input -----*/
   cout << "Enter the first input filename: ";
   cin >> filename1;
 
   // Read file and put in array
   inStream1.open(filename1);
   int inputArray1_size =  readfile(inputArray1, inStream1);
   inStream1.close();
   cout << "The list of " << inputArray1_size << " numbers in file " << filename1 << " is:\n";
   
   // Print out values
   for (int i = 0; i < inputArray1_size; i++) {
      cout << inputArray1[i] << endl;
   }
   
   
   /*----- Second input -----*/
   cout << "\nEnter the second input filename: ";
   cin >> filename2;
   
   // Read file and put in array
   inStream2.open(filename2);
   int inputArray2_size =  readfile(inputArray2, inStream2);
   inStream2.close();
   cout << "The list of " << inputArray2_size << " numbers in file " << filename2 << " is:\n";
   
   // Print out values
   for (int j = 0; j < inputArray2_size; j++) {
      cout << inputArray2[j] << endl;
   }
   
   
   /*----- Combine inputs -----*/
   int* combinedArray = new int[inputArray1_size + inputArray2_size];
   
   int combinedArray_size = sort(inputArray1, inputArray1_size,
      inputArray2, inputArray2_size, combinedArray);
      
   cout << "\nThe sorted list of " << combinedArray_size << " numbers is: ";
   
   for (int k = 0; k < combinedArray_size; k++) {
      cout << combinedArray[k] << " ";
   }
   
   cout << endl;     
    
    
   /*----- Output file -----*/ 
   writefile(combinedArray, combinedArray_size);
   return 0;
} 
