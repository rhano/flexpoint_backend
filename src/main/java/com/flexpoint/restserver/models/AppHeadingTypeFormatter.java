package com.flexpoint.restserver.models;

public class AppHeadingTypeFormatter {
    public static enum ArticleType {
        GeneralPopulation,
        PotentiallyExposed,
        PotentiallyInfectious,
        AdvancedCare,
        RoadToRecovery
    }
    
    public static enum ArticleGroup {
        DiseaseInfo,
        EmotionalMentalHealth
    }

    private static String articleGroupToString(ArticleGroup articleGroup) {
        switch (articleGroup) {
            case DiseaseInfo:
                return "DI";
            case EmotionalMentalHealth:
                return "EM";
            default:
                throw new UnsupportedOperationException();
        }
    }

    private static String articleTypeToString(ArticleType articleType) {
        switch (articleType) {
            case GeneralPopulation:
                return "GP";
            case PotentiallyExposed:
                return "PE";
            case PotentiallyInfectious:
                return "PI";
            case AdvancedCare:
                return "AC";
            case RoadToRecovery:
                return "RR";
            default:
                throw new UnsupportedOperationException();
        }
    }

    private ArticleType articleType = ArticleType.GeneralPopulation;

    private ArticleGroup articleGroup = ArticleGroup.DiseaseInfo;

    private boolean update = false;

    public AppHeadingTypeFormatter(ArticleType articleType, ArticleGroup articleGroup, boolean update) {
        this.articleType = articleType;
        this.articleGroup = articleGroup;
        this.update = update;
    }

    public String toString() {
        String updateStr = update ? "T" : "F";
        String group = articleGroupToString(this.articleGroup);
        String type = articleTypeToString(this.articleType);
        return String.format("%s%s%s", type, group, updateStr);
    }
}