package edu.auburn;

public class UserModel {
    public static final int CUSTOMER = 0;
    public static final int CASHIER = 1;
    public static final int MANAGER = 2;
    public static final int ADMIN = 3;


    public String mUsername, mPassword, mFullname;
    public int mUserType;
    public int mCustomerID; // if usertype is CUSTOMER

    public String toString() {
        StringBuilder sb = new StringBuilder("(");
        sb.append("\"").append(mUsername).append("\"").append(",");
        sb.append("\"").append(mPassword).append("\"").append(",");
        sb.append("\"").append(mFullname).append("\"").append(",");
        sb.append(mUserType).append(")");
        return sb.toString();
    }

}
