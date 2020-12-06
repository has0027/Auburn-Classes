package edu.auburn;

public class TXTReceiptBuilder implements IReceiptBuilder {

    StringBuilder sb = new StringBuilder();

    @Override
    public void appendHeader(String header) {
        sb.append(header).append("\n");
    }

    @Override
    public void appendCustomer(CustomerModel customer) {
        sb.append("Customer ID: ").append(customer.mCustomerID).append("\n");
        sb.append("Customer Name: ").append(customer.mName).append("\n");
    }

    @Override
    public void appendProduct(ProductModel product) {

    }

    @Override
    public void appendPurchase(PurchaseModel purchase) {

    }

    @Override
    public void appendFooter(String footer) {
        sb.append(footer).append("\n");
    }
}
