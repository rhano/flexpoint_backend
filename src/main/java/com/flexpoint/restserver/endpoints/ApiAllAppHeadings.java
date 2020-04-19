package com.flexpoint.restserver.endpoints;

import com.flexpoint.restserver.http.JsonHttpServlet;
import com.flexpoint.restserver.sql.DbContext;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;

@WebServlet("/api/allappheadings")
public class ApiAllAppHeadings extends JsonHttpServlet {
    @Override
    public Object handleRequest(HttpServletRequest request) throws Exception {
        try (var ctx = new DbContext()) {
            return ctx.allAppHeadings();
        }
    }
}
