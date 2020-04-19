package com.flexpoint.restserver.endpoints;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;

import com.flexpoint.restserver.http.JsonHttpServlet;
import com.flexpoint.restserver.sql.DbContext;

@WebServlet("/api/getpathogensettings")
public class ApiGetPathogenSettings extends JsonHttpServlet {

    @Override
    public Object handleRequest(HttpServletRequest request) throws Exception {
        try (var ctx = new DbContext()) {
            return ctx.getPathogenSettings();
        }
    }
    
}