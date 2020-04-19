package com.flexpoint.restserver.models;

public class PathogenSettings {
    public int id;
    public String source;
    public String name;
    public int contagiousRanking;
    public String atRisk1;
    public String atRisk2;
    public String atRisk3;
    public String atRisk4;
    public String atRisk5;
    public int touchFaceHands;
    public int respiratorDroplets;
    public int proximityContact;
    public int touchingHardSurface;
    public int airborne;
    public int sexualContact;
    public int kissing;
    public int pets;
    public int wildAnimals;
    public int gym;
    public boolean vaccineYes;
    public boolean vaccineNo;
    public boolean inTesting;
    public boolean inTrials;

    public PathogenSettings() {
        
    }

    public PathogenSettings(
            int id,
            String source,
            String name,
            int contagiousRanking,
            String atRisk1,
            String atRisk2,
            String atRisk3,
            String atRisk4,
            String atRisk5, 
            int touchFaceHands,
            int respiratorDroplets,
            int proximityContact,
            int touchingHardSurface,
            int airborne,
            int sexualContact,
            int kissing,
            int pets,
            int wildAnimals,
            int gym,
            boolean vaccineYes,
            boolean vaccineNo,
            boolean inTesting,
            boolean inTrials) {
        this.id = id;
        this.source = source;
        this.name = name;
        this.contagiousRanking = contagiousRanking;
        this.atRisk1 = atRisk1;
        this.atRisk2 = atRisk2;
        this.atRisk3 = atRisk3;
        this.atRisk4 = atRisk4;
        this.atRisk5 = atRisk5;
        this.touchFaceHands = touchFaceHands;
        this.respiratorDroplets = respiratorDroplets;
        this.proximityContact = proximityContact;
        this.touchingHardSurface = touchingHardSurface;
        this.airborne = airborne;
        this.sexualContact = sexualContact;
        this.kissing = kissing;
        this.pets = pets;
        this.wildAnimals = wildAnimals;
        this.gym = gym;
        this.vaccineYes = vaccineYes;
        this.vaccineNo = vaccineNo;
        this.inTrials = inTrials;
        this.inTesting = inTesting;
    }
}