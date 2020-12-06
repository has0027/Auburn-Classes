package edu.auburn;

import java.net.*;

public class PriceServer {
    public static void main(String[] args) {
        int port = 1000;
        try {
            ServerSocket server = new ServerSocket(port);
            Socket pipe = server.accept();

            int x = pipe.getInputStream().read();

            System.out.println(x);

            pipe.getOutputStream().write(x + 1);
            pipe.getOutputStream().flush();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
