package com.flexpoint.restserver.endpoints;

import com.flexpoint.restserver.http.JsonHttpServlet;
import com.flexpoint.restserver.models.Article;
import com.flexpoint.restserver.models.Input;
import com.flexpoint.restserver.sql.DbContext;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.util.ArrayList;

@WebServlet("/api/createinput")
public class ApiCreateInput extends JsonHttpServlet {
    @Override
    public Object handleRequest(HttpServletRequest request) throws Exception {
        var input = new Input();
        input.modeId = Integer.parseInt(request.getParameter("i_mode_id"));
        input.source = request.getParameter("i_source");
        input.name = request.getParameter("i_name");
        input.group = request.getParameter("i_group");
        input.iconUrl = request.getParameter("i_icon_url");
        input.question = request.getParameter("i_question");
        input.inputType = request.getParameter("i_input_type");
        input.thresholdType = request.getParameter("i_threshold_type");
        input.alertCallHealthProvider = isTrue(request, "i_alert_call_health_provider");
        input.alertCallStateHelp = isTrue(request, "i_alert_call_state_help");
        input.alertCallSuicideHelp = isTrue(request, "i_alert_call_suicide_help");
        input.alertCallEmergencyCare = isTrue(request, "i_alert_call_emergency_care");
        input.belowValue = Integer.parseInt(request.getParameter("i_below_value"));
        input.aboveValue = Integer.parseInt(request.getParameter("i_above_value"));
        input.diseaseGeneralPopulationFlag=isTrue(request, "i_Disease_General_Population_FLAG");
        input.diseaseExposedFlag=isTrue(request, "i_Disease_Exposed_FLAG");
        input.diseaseInfectedFlag=isTrue(request, "i_Disease_Infected_FLAG");
        input.diseaseNeedUrgentHelpFlag=isTrue(request, "i_Disease_Need_Urgent_Help_FLAG");
        input.diseaseRecoveredFlag=isTrue(request, "i_Disease_Recovered_FLAG");
        try (var ctx = new DbContext()) {
            return ctx.createInput(input);
        }
    }

    private boolean isTrue(HttpServletRequest request, String param) {
        return request.getParameterMap().containsKey(param) && request.getParameter(param).equals("1");
    }
}