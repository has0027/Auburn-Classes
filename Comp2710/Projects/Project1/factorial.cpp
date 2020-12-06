// C++ Program to find factorial of a number
// Factorial on n = 1*2*3*...*n
#include <iostream>
using namespace std;

int main() 
{
   int i, n, factorial = 1;

   cout << "Enter a positive integer: ";
   cin >> n;

   for (i = 1; i <= n; ++i) {
      factorial *= i;   // factorial = factorial * i;
   }

   cout<< "Factorial of "<<n<<" = "<<factorial;
   cout<<endl;
   return 0;
}
