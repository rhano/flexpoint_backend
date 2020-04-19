package com.flexpoint.restserver.endpoints;

import com.flexpoint.restserver.http.JsonHttpServlet;
import com.flexpoint.restserver.sql.DbContext;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@WebServlet("/api/admin/update-app-heading")
public class ApiUpdateAppHeading extends JsonHttpServlet {
    @Override
    public Object handleRequest(HttpServletRequest request) throws Exception {
        var mode = Integer.parseInt(request.getParameter("mode"));
        var type = request.getParameter("type");
        var text = request.getParameter("heading_text");
        try (var ctx = new DbContext()) {
            ctx.updateAppHeading(mode, type, text);
        }
        return Map.of("success", true);
    }
}
