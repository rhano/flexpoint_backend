package com.flexpoint.restserver.endpoints;

import com.flexpoint.restserver.WebTokenSerializer;
import com.flexpoint.restserver.http.JsonHttpServlet;
import com.flexpoint.restserver.models.LoginResponse;
import com.flexpoint.restserver.models.WebTokenBody;
import com.flexpoint.restserver.sql.DbContext;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@WebServlet("/api/admin/login")
public class ApiAdminLogin extends JsonHttpServlet {
    public Object handleRequest(HttpServletRequest request) throws Exception {
        try (var ctx = new DbContext()) {
            var username = request.getParameter("username");
            var password = request.getParameter("password");
            if (ctx.validLogin(username, password).isPresent()) {
                var body = new WebTokenBody(username);
                var token = WebTokenSerializer.getInstance().serialize(body);
                return LoginResponse.successResponse(username, token);
            } else {
                return Map.of("success", false);
            }
        }
    }
}
