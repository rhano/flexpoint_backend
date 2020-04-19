package com.flexpoint.restserver;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.flexpoint.restserver.models.WebTokenBody;
import com.google.gson.Gson;

import java.security.*;
import java.security.interfaces.RSAPublicKey;
import java.util.Date;

public class WebTokenSerializer {
    private static WebTokenSerializer instance = null;

    public static WebTokenSerializer getInstance() {
        if (instance == null) {
            instance = new WebTokenSerializer();
        }
        return instance;
    }

    private byte[] secret;

    private Algorithm signingAlgo;

    private JWTVerifier verifier;

    public WebTokenSerializer() {
        generateSecret();
    }

    public String serialize(WebTokenBody body) {
        String token = JWT.create()
                .withClaim("username", body.username)
                .withIssuedAt(new Date())
                .withIssuer("flexpoint")
                .sign(signingAlgo);
        return token;
    }

    public WebTokenBody deserialize(String token) throws JWTVerificationException {
        var webToken = verifier.verify(token);
        var body = new WebTokenBody();
        body.username = webToken.getClaim("username").asString();
        return body;
    }

    private void generateSecret() {
        var rand = new SecureRandom();
        secret = rand.generateSeed(1024);
        signingAlgo = Algorithm.HMAC512(secret);
        verifier = JWT.require(signingAlgo)
                .withIssuer("flexpoint")
                .build();
    }
}
