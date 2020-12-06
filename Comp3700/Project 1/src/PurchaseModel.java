package edu.auburn;

public class PurchaseModel {
    public int mPurchaseID, mProductID, mCustomerID;
    public double mPrice, mQuantity, mCost, mTax, mTotal;
    public String mDate;

    public String toString() {
        StringBuilder sb = new StringBuilder("(");
        sb.append(mPurchaseID).append(",");
        sb.append(mCustomerID).append(",");
        sb.append(mProductID).append(",");
        sb.append("\"").append(mDate).append("\"").append(",");
        sb.append(mQuantity).append(",");
        sb.append(mCost).append(")");
        return sb.toString();
    }

}


