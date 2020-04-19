package com.flexpoint.restserver.models;

public class ArticleComponent {
    public int id;

    public boolean isImage;

    public String paragraphText;
    
    public String imageUrl;

    public int articleId;

    public static ArticleComponent createParagraph(String text) {
        var comp = new ArticleComponent();
        comp.isImage = false;
        comp.paragraphText = text;
        return comp;
    }
    
    public static ArticleComponent createImage(String imageUrl) {
        var comp = new ArticleComponent();
        comp.isImage = true;
        comp.imageUrl = imageUrl;
        return comp;
    }
}
