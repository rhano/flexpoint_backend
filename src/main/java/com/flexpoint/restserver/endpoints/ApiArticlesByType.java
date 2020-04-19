package com.flexpoint.restserver.endpoints;

import java.io.*;
import java.util.*;
import java.util.stream.Collectors;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import com.flexpoint.restserver.http.JsonHttpServlet;
import com.flexpoint.restserver.sql.DbContext;
import com.google.gson.Gson;
import com.flexpoint.restserver.models.*;

@WebServlet("/api/articlesbytype")
public class ApiArticlesByType extends JsonHttpServlet {
    public Object handleRequest(HttpServletRequest request) throws Exception {
        var modeId = Integer.parseInt(request.getParameter("mode"));
        try (var ctx = new DbContext()) {
            return ctx.getArticles().stream().filter((art) -> art.modeId == modeId).collect(Collectors.toList());
        }
    }
}
