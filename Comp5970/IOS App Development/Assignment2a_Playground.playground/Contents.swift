import UIKit
import PlaygroundSupport

// Payment = loan * interestRate * (1 + interestRate)^(payments) / ((1 + interestRate)^(payments) - 1)

func loanCalculator(_ loanIn: Int, _ paymentsIn: Int, _ interestRateIn: Double)->Double {
    var result: Double
    let loan = Double(loanIn)
    let payments = Double(paymentsIn)
    let interestRate = Double(interestRateIn / 100)

    // Monthly payments
    if (interestRateIn < 1) {
        let eq1 = loan * interestRate
        let eq2 = pow((1 + interestRate), payments)
        result = eq1 * (eq2 / (eq2 - 1))
    }
    // Annual payments
    else {
        let eq1 = loan * interestRate
        let eq2 = pow((1 + interestRate), payments/12)
        result = eq1 * (eq2 / (eq2 - 1))
    }
    return result
}
let loan: Int = 20000
let payments: Int = 72
let interestRateIn: String = "4.4/12"

let interestRateArray = interestRateIn.components(separatedBy: "/")
let newArray = interestRateArray.map {Double($0)!}
let interestRate = newArray[0] / newArray[1]

//loanCalculator()
loanCalculator(20000, 72, 4.4/12) // should be 316.56
loanCalculator(150000, 360, 5) // should be 9757.72
