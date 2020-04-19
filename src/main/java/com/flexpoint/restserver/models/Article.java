package com.flexpoint.restserver.models;

public class Article {
    public int id;

    public String name;

    public String description;

    public String iconUrl;

    public int modeId;

    public String group;

    public String source;

    public static Article create(String name, String description, String iconUrl, int modeId, String group, String source) {
        var article = new Article();
        article.name = name;
        article.iconUrl = iconUrl;
        article.description = description;
        article.modeId = modeId;
        article.group = group;
        article.source = source;
        return article;
    }
}
