// Haden Stuart
// has0027
// hw2_has0027.cpp
// This program will show the amortization table
// for the given inputs.
// I used http://www.cplusplus.com/reference/cstdio/printf/ 
// as a reference for the correct implementation for printf().

#include <iostream>
#include <cmath>
#include <stdio.h>
using namespace std;

int main() {

// Declare input variables
   double loanIn = -1;
   double interestIn = -1;
   double paymentsIn = -1;
   int months = 0;

// Get inputs 
   cout << "Loan Amount: ";
   cin >> loanIn;
   cout << "Interest Rate (% per year): ";
   cin >> interestIn;
   cout << "Monthly Payments: ";
   cin >> paymentsIn;

// Amortization table header
   cout << "\n******************************************************\n" 
      << "                Amortization Table\n"
      << "******************************************************\n";
   cout << "Month   Balance   Payment   Rate  Interest  Principal\n"; 

   printf("%-7d $%-10.2f %-7s %-7s %-9s %s\n",
      months, loanIn, "N/A", "N/A", "N/A", "N/A");


// Variables used in loop
   double balance = loanIn;
   double payments = paymentsIn;
   double rate = interestIn / 12.00;
   double rateActual = rate / 100;
   double interestSum = 0;
   bool result = true;
   bool special = false;

// Loop for table values
   for (int i = 1; balance > 0; i++) {	
      double interest = balance * rateActual;
      months = i;
   
   // Normal table values
      if (result){
         double principal = payments - interest;	
         balance = balance - principal;
      
         printf("%-7d $%-8.2f $%-9.2f", months, balance, payments); 
         printf("%-6.1f $", rate); 
         printf("%-8.2f $%.2f\n", interest, principal);
      }
      
      // Last table value
      else {
         payments = balance + interest;
         double principal = balance;
         balance = 0.00;
      
         printf("%-7d $%-8.2f $%-9.2f", months, balance, payments); 
         printf("%-6.1f $", rate); 
         printf("%-8.2f $%.2f\n", interest, principal);
      }
   
   // Stop program if interest is greater than payments
      if (interest > payments) {
         special = true;
         break;
      }
   
   // Tell the loop to create last value
      if (balance < payments) {
         result = false;
      }
   
   // Get the total interest paid
      interestSum += interest;
   }

// Conclusion if special
   if (special) {
      cout << "\nThe interest is more than the monthly payment!" << endl;
   }
   
   // Conclusion if normal
   else {
      cout << "******************************************************\n\n";
      cout << "It takes " << months << " months to pay off the loan.\n";
      cout << "Total interest paid is: ";
      printf("$%.2f", interestSum);
      cout << endl;
   }


   return 0;
}
