package edu.auburn;

public class CustomerModel {
    public int mCustomerID;
    public long mPhoneNumber;
    public String mName, mAddress, mPaymentInfo;

    public String toString() {
        StringBuilder sb = new StringBuilder("(");
        sb.append(mCustomerID).append(",");
        sb.append("\"").append(mName).append("\"").append(",");
        sb.append("\"").append(mAddress).append("\"").append(",");
        sb.append(mPhoneNumber).append(")");

        return sb.toString();
    }
}