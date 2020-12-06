/**
* Bank loan compute thing.
* 
* Activity 8A
* @author Haden Stuart
* @version 3/19/18
*/
public class BankLoan {
	
   // constant fields
   private static final int MAX_LOAN_AMOUNT = 100000;
   private static int loansCreated = 0;

   // Instance variables 
   private String customerName;
   private double balance, interestRate;
   
   
   // Constructor
   
/**
* Get the customer name and interest rate.
*
* @param customerNameIn get the customer name
* @param interestRateIn get the interest rate
**/
   public BankLoan(String customerNameIn, double interestRateIn) { 
      customerName = customerNameIn;
      interestRate = interestRateIn;
      balance = 0;
      loansCreated++;
   }

   // Methods
   
/**
* Get the loans.
*
* @return get the loans
**/
   public static int getLoansCreated() {
      return loansCreated;
   }
   
/**
* Reset the loans.
*
* 
**/
   public static void resetLoansCreated() {
      loansCreated = 0;
   }
  
/**
* Check the amount.
*
* @param amount the total amount 
* @return is the amount valid or not
**/ 
   public static boolean isAmountValid(double amount) {
      return amount >= 0;
   }
   
/**
* Check the debt.
*
* @param loan get the loans
* @return set if is in debt or not
**/
   public static boolean isInDebt(BankLoan loan) {
      if (loan.getBalance() > 0) {
         return true;
      }
      return false;
   }

/**
* Check the loans.
*
* @param amount the total amount
* @return the loan made
**/   
   public boolean borrowFromBank(double amount) {
      
      boolean wasLoanMade = false;
      
      if (balance + amount < MAX_LOAN_AMOUNT) {
         wasLoanMade = true;
         balance += amount;
      }
   
      return wasLoanMade;
   }

/**
* Set the balance.
*
* @param amountPaid the amount paid
* @return the balance
**/ 
   public double payBank(double amountPaid) {
      double newBalance = balance - amountPaid;
      if (newBalance < 0) {
         balance = 0;
         // paid too much, return the overcharge
         return Math.abs(newBalance);
      }
      else {
         balance = newBalance;
         return 0;
      }
   }
 
/**
* Get the balance.
*
* @return the balance
**/   
   public double getBalance() {
      return balance;
   }
   
/**
* Set the interest rate.
*
* @param interestRateIn the interest rate
* @return if the rate was set
**/    
   public boolean setInterestRate(double interestRateIn) {
   
      if (interestRateIn >= 0 && interestRateIn <= 1) {
         interestRate = interestRateIn;
         return true;
      }
      else {
         return false;
      }
   }
  
/**
* Get the interest rate.
*
* @return the interest rate
**/  
   public double getInterestRate() {
      return interestRate;
   }
   
/**
* Charge the interest.
*
**/ 
   public void chargeInterest() {
      balance = balance * (1 + interestRate);
   }
   
/**
* Set the toString.
*
* @return the output
**/ 
   public String toString() {
      String output = "Name: " + customerName + "\r\n" 
         + "Interest rate: " + interestRate + "%\r\n" 
         + "Balance: $" + balance + "\r\n";
      return output;
   }

}
