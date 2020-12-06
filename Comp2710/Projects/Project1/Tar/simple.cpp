// C++ Program to find the factorial of a number
// and the standard deviation of a set of posiive numbers
// Author: Haden Stuart, has0027
// Version: 1/24/19
#include <iostream>
#include <cmath>
using namespace std;
float calculateSD(float nums[], int n);

int main() {

   int n = 1;
   bool check = false;
   
      // Check if number is less than 10
   
   while (check == false) {
      cout << "How many positive numbers (less than 10) do you want to calculate: ";
      cin >> n;
      if (n < 10) {
         check = true;
      }

   }
   
   float nums[n];
      
      // Calculate factorial
      
   int i, factorial = 1;

   for (i = 1; i <= n; ++i) {
      factorial *= i;   // factorial = factorial * i;
   }
   
      // Get the elements

   cout << "Enter " << n << " elements: ";
   for(i = 0; i < n; ++i)
      cin >> nums[i];
      
      // Output

   cout << endl;
   cout << "Factorial of "<<n<<" = "<<factorial;
   cout << endl << "Standard Deviation = " << calculateSD(nums, n) << endl;
   cout << endl;
   return 0;
}

// Calculate standard deviation

float calculateSD(float nums[], int n)
{
   float sum = 0.0, mean, standardDeviation = 0.0;

   int i;

   for(i = 0; i < n; ++i)
   {
      sum += nums[i];
   }

   mean = sum/n;

   for(i = 0; i < n; ++i)
      standardDeviation += pow(nums[i] - mean, 2);

   return sqrt(standardDeviation / n);
}
