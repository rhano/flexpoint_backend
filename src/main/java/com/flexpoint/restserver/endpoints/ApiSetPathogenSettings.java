package com.flexpoint.restserver.endpoints;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;

import com.flexpoint.restserver.http.JsonHttpServlet;
import com.flexpoint.restserver.sql.DbContext;

@WebServlet("/api/setpathogensettings")
public class ApiSetPathogenSettings extends JsonHttpServlet {
    public Object handleRequest(HttpServletRequest request) throws Exception {
        var source = request.getParameter("source");
        var name = request.getParameter("name");
        var contagiousRanking = Integer.parseInt(request.getParameter("contagiousRanking"));
        var atRisk1 = request.getParameter("atRisk1");
        var atRisk2 = request.getParameter("atRisk2");
        var atRisk3 = request.getParameter("atRisk3");
        var atRisk4 = request.getParameter("atRisk4");
        var atRisk5 = request.getParameter("atRisk5");
        var touchFaceHands = Integer.parseInt(request.getParameter("touchFaceHands"));
        var respiratorDroplets = Integer.parseInt(request.getParameter("respiratorDroplets"));
        var proximityContact = Integer.parseInt(request.getParameter("proximityContact"));
        var touchingHardSurface = Integer.parseInt(request.getParameter("touchingHardSurface"));
        var airborne = Integer.parseInt(request.getParameter("airborne"));
        var sexualContact = Integer.parseInt(request.getParameter("sexualContact"));
        var kissing = Integer.parseInt(request.getParameter("kissing"));
        var pets = Integer.parseInt(request.getParameter("pets"));
        var wildAnimals = Integer.parseInt(request.getParameter("wildAnimals"));
        var gym = Integer.parseInt(request.getParameter("gym"));
        var vaccineYes = boolParameterValue(request, "vaccineYes");
        var vaccineNo = boolParameterValue(request, "vaccineNo");
        var inTesting = boolParameterValue(request, "inTesting");
        var inTrials = boolParameterValue(request, "inTrials");
        try (var ctx = new DbContext()) {
            ctx.setPathogenSettings(
                source, name, contagiousRanking, atRisk1, atRisk2, atRisk3, atRisk4, atRisk5, 
                touchFaceHands, respiratorDroplets, proximityContact, touchingHardSurface, 
                airborne, sexualContact, kissing, pets, wildAnimals, gym, 
                vaccineYes, vaccineNo, inTesting, inTrials);
            return ctx.getPathogenSettings();
        }
    }

    private boolean boolParameterValue(HttpServletRequest request, String key) {
        return request.getParameterMap().containsKey(key) && request.getParameter(key).equals("1");
    }
}