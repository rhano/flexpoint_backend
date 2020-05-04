package com.flexpoint.restserver.models;

public class Input {
    public int id;

    public int modeId;

    public String source;

    public String name;

    public String group;

    public String iconUrl;

    public String question;

    public String inputType;

    public String thresholdType;

    public boolean alertCallHealthProvider;

    public boolean alertCallStateHelp;

    public boolean alertCallSuicideHelp;

    public boolean alertCallEmergencyCare;

    public int belowValue;

    public int aboveValue;
    
    public boolean diseaseGeneralPopulationFlag;
    
    public boolean diseaseExposedFlag;
    
    public boolean diseaseInfectedFlag;
    
    public boolean diseaseNeedUrgentHelpFlag;
    
    public boolean diseaseRecoveredFlag;
    
    public boolean diseasSelectAll;

}