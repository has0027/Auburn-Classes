// Haden Stuart
// has0027
// hw1_has0027.cpp
// This program will calculate the fatal amount of diet coke.
// I recieved no help at all.

#include <iostream>
#include <cmath>
using namespace std;

int main() {
   
   const double sweetenerPercent = 0.001;
   double mouseWeight;
   double fatalAmountMouse;
   double friendWeight;

   // Get each input value

   cout << "Please input the weight of the mouse in kg: ";
   cin >> mouseWeight;

   cout << "Please input the fatal amount of sweetener for the mouse in kg: ";
   cin >> fatalAmountMouse;

   cout << "Please input the weight of your dear friend in kg: ";
   cin >> friendWeight;
   
   // Calculate the fatal human amount

   double top  = (fatalAmountMouse * friendWeight);
   double bottom = (mouseWeight * sweetenerPercent);
   int fatalHumanAmount = (top / bottom);
   
   cout << "The fatal amount of coke for your friend is " << fatalHumanAmount << " kg" << endl;

   return 0;
}
