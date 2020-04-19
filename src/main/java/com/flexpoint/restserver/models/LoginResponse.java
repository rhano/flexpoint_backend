package com.flexpoint.restserver.models;

public class LoginResponse {
    public static LoginResponse successResponse(String username, String token) {
        var response = new LoginResponse();
        response.username = username;
        response.token = token;
        response.success = true;
        return response;
    }

    public boolean success;

    public String username;

    public String token;

    public LoginResponse() {

    }
}
