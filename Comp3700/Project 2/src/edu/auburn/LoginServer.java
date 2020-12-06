package edu.auburn;

import java.io.PrintWriter;
import java.net.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Scanner;

public class LoginServer {
    public static void main(String[] args) {
        HashMap<Integer, String> loginUsers = new HashMap<>();

        int port = 1000;
        try {
            ServerSocket server = new ServerSocket(port);

            while (true) {
                Socket pipe = server.accept();
                PrintWriter out = new PrintWriter(pipe.getOutputStream(), true);
                Scanner in = new Scanner(pipe.getInputStream());

                String command = in.nextLine();
                if (command.equals("LOGIN")) {
                    String username = in.nextLine();
                    String password = in.nextLine();

                    System.out.println("Login with username = " + username + " password = " + password);

                    if (checkUser(username, password)) {
                        int accessToken = username.hashCode();
                        out.println(accessToken);
                        loginUsers.put(accessToken, username); // add this user into the Table!
                    } else {
                        out.println(0); // access denied
                        break;
                    }
                }

                if (command.equals("LOGOUT")) {
                    int token = in.nextInt();

                    System.out.println("Logout with token = " + token);

                    if (loginUsers.containsKey(token))
                        loginUsers.remove(token); // remove this user
                    out.println(1); // logout successful!
                } else {
                    out.println(0); // logout unsuccessful!
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static boolean checkUser(String username, String password) {
        Connection conn = null;
        try {
            String url = "jdbc:sqlite:" + "/Users/hadenstuart/IdeaProjects/StoreManager/Database/store.db";
            conn = DriverManager.getConnection(url);

            String sql = "SELECT * FROM Users WHERE Username = " + "\"" + username + "\""
                    + " AND  Password = " + "\"" + password + "\"";
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);

            if (rs.next()) {
                conn.close();
                return true;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

}