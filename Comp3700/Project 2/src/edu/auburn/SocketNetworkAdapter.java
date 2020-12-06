package edu.auburn;

import com.google.gson.Gson;

import java.io.PrintWriter;
import java.net.Socket;
import java.util.Scanner;

public class SocketNetworkAdapter implements INetworkAdapter {
    @Override
    public String exchange(String msg, String host, int port) throws Exception {
        Socket link = new Socket(host, port);
        Scanner input = new Scanner(link.getInputStream());
        PrintWriter output = new PrintWriter(link.getOutputStream(), true);

        output.println(msg);
        msg = input.nextLine();

        output.close();
        input.close();
        link.close();

        return msg;
    }

    @Override
    public MessageModel exchange(MessageModel msg, String host, int port) throws Exception {
        Gson gson = new Gson();
        return gson.fromJson(exchange(gson.toJson(msg), host, port), MessageModel.class);
    }
}
