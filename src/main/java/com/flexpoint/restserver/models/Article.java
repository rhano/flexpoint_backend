package com.flexpoint.restserver.models;

public class Article {
    public int id;

    public String name;

    public String description;

    public String iconUrl;

    public int modeId;

    public String group;

    public String source;
    
    public boolean diseaseGeneralPopulationFlag;
    
    public boolean diseaseExposedFlag;
    
    public boolean diseaseInfectedFlag;
    
    public boolean diseaseNeedUrgentHelpFlag;
    
    public boolean diseaseRecoveredFlag;
    
    public boolean diseasSelectAll;

    
    
    public static Article create(int id, String name, String description, String iconUrl, int modeId, String group, String source,
			boolean diseaseGeneralPopulationFlag, boolean diseaseExposedFlag, boolean diseaseInfectedFlag,
			boolean diseaseNeedUrgentHelpFlag, boolean diseaseRecoveredFlag) {
    	 var article = new Article();
		article.id = id;
		article.name = name;
		article.description = description;
		article.iconUrl = iconUrl;
		article.modeId = modeId;
		article.group = group;
		article.source = source;
		article.diseaseGeneralPopulationFlag = diseaseGeneralPopulationFlag;
		article.diseaseExposedFlag = diseaseExposedFlag;
		article.diseaseInfectedFlag = diseaseInfectedFlag;
		article.diseaseNeedUrgentHelpFlag = diseaseNeedUrgentHelpFlag;
		article.diseaseRecoveredFlag = diseaseRecoveredFlag;
		return article;
	}
}
