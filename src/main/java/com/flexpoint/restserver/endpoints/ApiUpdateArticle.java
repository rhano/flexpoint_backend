package com.flexpoint.restserver.endpoints;

import com.flexpoint.restserver.http.JsonHttpServlet;
import com.flexpoint.restserver.models.Article;
import com.flexpoint.restserver.sql.DbContext;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;

@WebServlet("/api/updatearticle")
public class ApiUpdateArticle extends JsonHttpServlet {
    @Override
    public Object handleRequest(HttpServletRequest request) throws Exception {
        var a = new Article();
        a.id = Integer.parseInt(request.getParameter("a_id"));
        a.name = request.getParameter("a_name");
        a.iconUrl = request.getParameter("a_iconurl");
        a.description = request.getParameter("a_description");
        a.modeId = Integer.parseInt(request.getParameter("a_mode"));
        a.group = request.getParameter("a_group");
        a.source = request.getParameter("a_source");

        try (var ctx = new DbContext()) {
            return ctx.updateArticle(a);
        }
    }
}
