package com.flexpoint.restserver.http;

import com.flexpoint.restserver.Configuration;
import com.google.gson.Gson;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.SQLException;

public abstract class JsonHttpServlet extends HttpServlet {
    public abstract Object handleRequest(HttpServletRequest request) throws Exception;

    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        doPost(request, response);
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) {
        try {
            var result = handleRequest(request);
            var resultString = new Gson().toJson(result);
            response.setContentType("application/json");
            var writer = response.getWriter();
            writer.print(resultString);
            writer.flush();
        } catch (Exception ex) {
            try {
                if (Configuration.AUTO_JSON_ERRORS) {
                    var writer = response.getWriter();
                    ex.printStackTrace(writer);
                    writer.flush();
                } else {
                    var writer = response.getWriter();
                    writer.println("{\"success\":false}");
                    writer.flush();
                }
            } catch (Exception ignore) {}
        }
    }
}
