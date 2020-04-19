package com.flexpoint.restserver.endpoints;

import java.util.Map;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;

import com.flexpoint.restserver.http.JsonHttpServlet;
import com.flexpoint.restserver.sql.DbContext;

@WebServlet("/api/deleteinput")
public class ApiDeleteInput extends JsonHttpServlet {
    @Override
    public Object handleRequest(HttpServletRequest request) throws Exception {
        var id = Integer.parseInt(request.getParameter("i_id"));
        try (var ctx = new DbContext()) {
            ctx.deleteInput(id);
        }
        return Map.of("success", true);
    }
}
