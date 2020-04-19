package com.flexpoint.restserver.models;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

public class Account {
    private static String PASSWORD_SALT = "tempwpb128331djfkls";

    public static String passwordHash(String password) {
        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(password.getBytes(StandardCharsets.UTF_8));
            return (Base64.getEncoder().encodeToString(hash));
        } catch (NoSuchAlgorithmException ex) {
            // TODO: Shouldn't happen. Deal with later
            return null;
        }
    }

    public int id;

    public boolean isAdmin;

    public String countyCode;

    public String stateCode;

    public String username;

    public String passwordHash;

    public static Account newAccount(boolean isAdmin, String stateCode, String countyCode, String username, String password) {
        var acc = new Account();
        acc.isAdmin = isAdmin;
        acc.stateCode = stateCode;
        acc.countyCode = countyCode;
        acc.username = username;
        acc.passwordHash = passwordHash(password);
        return acc;
    }

}
