package com.flexpoint.restserver.endpoints;

import java.util.Map;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;

import com.flexpoint.restserver.http.JsonHttpServlet;
import com.flexpoint.restserver.sql.DbContext;

@WebServlet("/api/uninstall")
public class ApiUninstall extends JsonHttpServlet {

    @Override
    public Object handleRequest(HttpServletRequest request) throws Exception {
        try (var ctx = new DbContext()) {
            if (request.getParameterMap().containsKey("ignoreErr") && request.getParameter("ignoreErr").equals("1")) {
                ctx.uninstall(true);
            } else {
                ctx.uninstall(false);
            }
            return Map.of("success", true);
        }
    }
    
}