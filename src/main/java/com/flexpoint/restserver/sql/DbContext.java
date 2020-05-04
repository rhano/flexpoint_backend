package com.flexpoint.restserver.sql;

import com.flexpoint.restserver.Configuration;
import com.flexpoint.restserver.models.*;

import java.util.*;
import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class DbContext implements AutoCloseable {
    private Connection connection;

    public DbContext() throws SQLException {
        this.initConnection();
    }

    public void close() throws Exception {
        this.connection.close();
    }

    public Optional<Account> accountByUsername(String username) throws SQLException {
        try (var stmt = connection.prepareStatement("SELECT id, is_admin, county, state, username, password_hash FROM Account WHERE username=?")) {
            stmt.setString(1, username);
            var rs = stmt.executeQuery();
            if (rs.next()) {
                var acc = new Account();
                acc.id = rs.getInt(1);
                acc.isAdmin = rs.getBoolean(2);
                acc.countyCode = rs.getString(3);
                acc.stateCode = rs.getString(4);
                acc.username = rs.getString(5);
                acc.passwordHash = rs.getString(6);
                return Optional.of(acc);
            } else {
                return Optional.empty();
            }
        }
    }

    public boolean isAdmin(String username) throws SQLException {
        var account = accountByUsername(username);
        return account.isPresent() && account.get().isAdmin;
    }

    public Input createInput(Input input) throws SQLException {
        try (var stmt = connection.prepareStatement("INSERT INTO Input (mode_id, source, name, agroup, icon_url, question, input_type, threshold_type, alert_call_health_provider, alert_call_state_help, alert_call_suicide_help, seek_emergency_care, above_value, below_value,Disease_General_Population_FLAG,Disease_Exposed_FLAG,Disease_Infected_FLAG,Disease_Need_Urgent_Help_FLAG,Disease_Recovered_FLAG) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", Statement.RETURN_GENERATED_KEYS)) {
            stmt.setInt(1, input.modeId);
            stmt.setString(2, input.source);
            stmt.setString(3, input.name);
            stmt.setString(4, input.group);
            stmt.setString(5, input.iconUrl);
            stmt.setString(6, input.question);
            stmt.setString(7, input.inputType);
            stmt.setString(8, input.thresholdType);
            stmt.setBoolean(9, input.alertCallHealthProvider);
            stmt.setBoolean(10, input.alertCallStateHelp);
            stmt.setBoolean(11, input.alertCallSuicideHelp);
            stmt.setBoolean(12, input.alertCallEmergencyCare);
            stmt.setInt(13, input.aboveValue);
            stmt.setInt(14, input.belowValue);
            stmt.setBoolean(15, input.diseaseGeneralPopulationFlag);
            stmt.setBoolean(16, input.diseaseExposedFlag);
            stmt.setBoolean(17, input.diseaseInfectedFlag);
            stmt.setBoolean(18, input.diseaseNeedUrgentHelpFlag);
            stmt.setBoolean(19, input.diseaseRecoveredFlag);
            stmt.executeUpdate();
            var rs = stmt.getGeneratedKeys();
            if (rs.next()) {
                input.id = rs.getInt(1);
                return input;
            } else {
                throw new SQLException("Failed to insert input");
            }
        }
    }

    public void updateInput(Input input) throws SQLException {
        try (var stmt = connection.prepareStatement("UPDATE Input SET mode_id=?, source=?, name=?, agroup=?, icon_url=?, question=?, input_type=?, threshold_type=?, alert_call_health_provider=?, alert_call_state_help=?, alert_call_suicide_help=?, seek_emergency_care=?, above_value=?, below_value=?,Disease_General_Population_FLAG=?,Disease_Exposed_FLAG=?,Disease_Infected_FLAG=?,Disease_Need_Urgent_Help_FLAG=?,Disease_Recovered_FLAG=? WHERE id=?")) {
            stmt.setInt(1, input.modeId);
            stmt.setString(2, input.source);
            stmt.setString(3, input.name);
            stmt.setString(4, input.group);
            stmt.setString(5, input.iconUrl);
            stmt.setString(6, input.question);
            stmt.setString(7, input.inputType);
            stmt.setString(8, input.thresholdType);
            stmt.setBoolean(9, input.alertCallHealthProvider);
            stmt.setBoolean(10, input.alertCallStateHelp);
            stmt.setBoolean(11, input.alertCallSuicideHelp);
            stmt.setBoolean(12, input.alertCallEmergencyCare);
            stmt.setInt(13, input.aboveValue);
            stmt.setInt(14, input.belowValue);
            stmt.setBoolean(15, input.diseaseGeneralPopulationFlag);
            stmt.setBoolean(16, input.diseaseExposedFlag);
            stmt.setBoolean(17, input.diseaseInfectedFlag);
            stmt.setBoolean(18, input.diseaseNeedUrgentHelpFlag);
            stmt.setBoolean(19, input.diseaseRecoveredFlag);
            stmt.setInt(20, input.id);
           
            stmt.execute();
        }
    }

    public void deleteInput(int id) throws SQLException {
        try (var stmt = connection.prepareStatement("DELETE FROM Input WHERE id=?")) {
            stmt.setInt(1, id);
            stmt.execute();
        }
    }

    public List<Input> getInputs() throws SQLException {
        var result = new ArrayList<Input>();
        try (var stmt = connection.prepareStatement("SELECT mode_id, source, name, agroup, icon_url, question, input_type, threshold_type, alert_call_health_provider, alert_call_state_help, alert_call_suicide_help, seek_emergency_care, above_value, below_value, id, Disease_General_Population_FLAG, Disease_Exposed_FLAG, Disease_Infected_FLAG, Disease_Need_Urgent_Help_FLAG, Disease_Recovered_FLAG FROM Input ORDER BY id ASC")) {
            var rs = stmt.executeQuery();
            while (rs.next()) {
                var input = new Input();
                input.modeId = rs.getInt(1);
                input.source = rs.getString(2);
                input.name = rs.getString(3);
                input.group = rs.getString(4);
                input.iconUrl = rs.getString(5);
                input.question = rs.getString(6);
                input.inputType = rs.getString(7);
                input.thresholdType = rs.getString(8);
                input.alertCallHealthProvider = rs.getBoolean(9);
                input.alertCallStateHelp = rs.getBoolean(10);
                input.alertCallSuicideHelp = rs.getBoolean(11);
                input.alertCallEmergencyCare = rs.getBoolean(12);
                input.aboveValue = rs.getInt(13);
                input.belowValue = rs.getInt(14);
                input.id = rs.getInt(15);
                input.diseaseGeneralPopulationFlag = rs.getBoolean(16);
                input.diseaseExposedFlag = rs.getBoolean(17);
                input.diseaseInfectedFlag = rs.getBoolean(18);
                input.diseaseNeedUrgentHelpFlag = rs.getBoolean(19);
                input.diseaseRecoveredFlag = rs.getBoolean(20);
                if(input.diseaseGeneralPopulationFlag && input.diseaseExposedFlag && input.diseaseInfectedFlag
                	&&	input.diseaseNeedUrgentHelpFlag	&& input.diseaseRecoveredFlag 	)
                {
                	input.diseasSelectAll=true;
                }
                else
                {
                	input.diseasSelectAll=false;
                }
                result.add(input);
            }
        }
        return result;
    }

    public Article createArticle(Article article) throws SQLException {
        try (var stmt = connection.prepareStatement("INSERT INTO Article (name, description, icon_url, mode_id, agroup, source,Disease_General_Population_FLAG,Disease_Exposed_FLAG,Disease_Infected_FLAG,Disease_Need_Urgent_Help_FLAG,Disease_Recovered_FLAG) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", Statement.RETURN_GENERATED_KEYS)) {
            stmt.setString(1, article.name);
            stmt.setString(2, article.description);
            stmt.setString(3, article.iconUrl);
            stmt.setInt(4, article.modeId);
            stmt.setString(5, article.group);
            stmt.setString(6, article.source);
            stmt.setBoolean(7, article.diseaseGeneralPopulationFlag);
            stmt.setBoolean(8, article.diseaseExposedFlag);
            stmt.setBoolean(9, article.diseaseInfectedFlag);
            stmt.setBoolean(10, article.diseaseNeedUrgentHelpFlag);
            stmt.setBoolean(11, article.diseaseRecoveredFlag);
            stmt.executeUpdate();
            var rs = stmt.getGeneratedKeys();
            if (rs.next()) {
                article.id = rs.getInt(1);
                return article;
            } else {
                throw new SQLException("Failed to insert article");
            }
        }
    }

    public List<Article> getArticles() throws SQLException {
        var result = new ArrayList<Article>();
        try (var stmt = connection.prepareStatement("SELECT id, name, description, icon_url, mode_id, agroup, source,Disease_General_Population_FLAG,Disease_Exposed_FLAG,Disease_Infected_FLAG,Disease_Need_Urgent_Help_FLAG,Disease_Recovered_FLAG FROM Article ORDER BY id ASC")) {
            var rs = stmt.executeQuery();
            while (rs.next()) {
                var article = new Article();
                article.id = rs.getInt(1);
                article.name = rs.getString(2);
                article.description = rs.getString(3);
                article.iconUrl = rs.getString(4);
                article.modeId = rs.getInt(5);
                article.group = rs.getString(6);
                article.source = rs.getString(7);
                article.diseaseGeneralPopulationFlag = rs.getBoolean(8);
                article.diseaseExposedFlag = rs.getBoolean(9);
                article.diseaseInfectedFlag = rs.getBoolean(10);
                article.diseaseNeedUrgentHelpFlag = rs.getBoolean(11);
                article.diseaseRecoveredFlag = rs.getBoolean(12);
                if(article.diseaseGeneralPopulationFlag && article.diseaseExposedFlag && article.diseaseInfectedFlag
                    	&&	article.diseaseNeedUrgentHelpFlag	&& article.diseaseRecoveredFlag 	)
                {
                	article.diseasSelectAll=true;
                }
                else
                {
                	article.diseasSelectAll=false;
                }
                result.add(article);
            }
        }
        return result;
    }

    public Article updateArticle(Article article) throws SQLException {
        try (var stmt = connection.prepareStatement("UPDATE Article SET name=?, description=?, icon_url=?, mode_id=?, agroup=?, source=?,Disease_General_Population_FLAG=?,Disease_Exposed_FLAG=?,Disease_Infected_FLAG=?,Disease_Need_Urgent_Help_FLAG=?,Disease_Recovered_FLAG=? WHERE id=?"))
        {
            stmt.setString(1, article.name);
            stmt.setString(2, article.description);
            stmt.setString(3, article.iconUrl);
            stmt.setInt(4, article.modeId);
            stmt.setString(5, article.group);
            stmt.setString(6, article.source);
            
            stmt.setBoolean(7, article.diseaseGeneralPopulationFlag);
            stmt.setBoolean(8, article.diseaseExposedFlag);
            stmt.setBoolean(9, article.diseaseInfectedFlag);
            stmt.setBoolean(10, article.diseaseNeedUrgentHelpFlag);
            stmt.setBoolean(11, article.diseaseRecoveredFlag);
            stmt.setInt(12, article.id);
            stmt.execute();
            return article;
        }
    }

    public void deleteArticle(int articleId) throws SQLException {
        try (var stmt = connection.prepareStatement("DELETE FROM Article WHERE id=?")) {
            stmt.setInt(1, articleId);
            stmt.execute();
        }
    }

    public List<AppHeading> allAppHeadings() throws SQLException {
        var result = new ArrayList<AppHeading>();
        try (var stmt = connection.prepareStatement("SELECT mode, type, headingText FROM AppHeading")) {
            var resultSet = stmt.executeQuery();
            while (resultSet.next()) {
                var heading = new AppHeading();
                heading.modeId = resultSet.getInt(1);
                heading.type = resultSet.getString(2);
                heading.headingText = resultSet.getString(3);
                result.add(heading);
            }
        }
        return result;
    }

    public void updateAppHeading(int mode, String type, String text) throws SQLException {
        try (var stmt = connection.prepareStatement("UPDATE AppHeading SET headingText = ? WHERE mode = ? and type = ?")) {
            stmt.setString(1, text);
            stmt.setInt(2, mode);
            stmt.setString(3, type.trim().toUpperCase());
            stmt.executeUpdate();
        }
    }

    public Optional<Account> validLogin(String username, String password) throws SQLException {
        if (username == null) {
            throw new IllegalArgumentException("Username cannot be null");
        }
        if (password == null) {
            throw new IllegalArgumentException("Password cannot be null");
        }
        if (Configuration.SERVICE_ACCOUNT_ENABLED) {
            if (username.equals("admin") && password.equals("Testing1234!")) {
                var acc = new Account();
                acc.username = "admin";
                acc.passwordHash = "";
                acc.stateCode = "NC";
                acc.countyCode = "Guilford";
                acc.isAdmin = true;
                acc.id = -1;
                return Optional.of(acc);
            }
        }
        var acc = accountByUsername(username);
        if (acc.isPresent()) {
            if (acc.get().passwordHash.equals(Account.passwordHash(password))) {
                return acc;
            }
        }
        return Optional.empty();
    }

    public Account createAccount(Account account) throws SQLException {
        try (var stmt = connection.prepareStatement("INSERT INTO Account (is_admin, county, state, username, password_hash) VALUES (?, ?, ?, ?, ?)", Statement.RETURN_GENERATED_KEYS)) {
            stmt.setBoolean(1, account.isAdmin);
            stmt.setString(2, account.countyCode);
            stmt.setString(3, account.stateCode);
            stmt.setString(4, account.username);
            stmt.setString(5, account.passwordHash);
            stmt.executeUpdate();
            var rs = stmt.getGeneratedKeys();
            if (rs.next()) {
                account.id = rs.getInt(1);
                return account;
            } else {
                throw new SQLException("Failed to insert account");
            }
        }
    }

    public AppMode createAppMode(AppMode appMode) throws SQLException {
        try (var stmt = connection.prepareStatement("INSERT INTO AppMode (name) VALUES (?)", Statement.RETURN_GENERATED_KEYS)) {
            stmt.setString(1, appMode.name);
            stmt.executeUpdate();
            var rs = stmt.getGeneratedKeys();
            if (rs.next()) {
                appMode.id = rs.getInt(1);
                return appMode;
            } else {
                throw new SQLException("Failed to insert app mode");
            }
        }
    }

    public void uninstall(boolean ignoreErrors) throws SQLException {
        var tableNames = new String[]{
            "AppMode", 
            "Account", 
            "AppHeading", 
            "Article", 
            "Patho_Settings",
            "Input"
        };
        for (var tableName : tableNames) {
            try (var stmt = connection.createStatement()) {
                stmt.execute("DROP TABLE " + tableName);
            } catch (Exception ex) {
                if (!ignoreErrors) {
                    throw ex;
                }
            }
        }
    }

    public PathogenSettings getPathogenSettings() throws SQLException {
        try (var stmt = connection.createStatement())
        {
            var rs = stmt.executeQuery("SELECT id, source, name, contagious_ranking, at_risk_1, at_risk_2, at_risk_3, at_risk_4, at_risk_5, touch_face_hands, respir_droplets, proximity_contact, touching_hard_surf, airborne, sex_contact, kissing, pets, wild_animals, gym, vaccine_yes, vaccine_no, in_trials, in_testing FROM Patho_Settings");
            if (rs.next()) {
                return new PathogenSettings(
                    rs.getInt(1),
                    rs.getString(2),
                    rs.getString(3),
                    rs.getInt(4),
                    rs.getString(5),
                    rs.getString(6),
                    rs.getString(7),
                    rs.getString(8),
                    rs.getString(9),
                    rs.getInt(10),
                    rs.getInt(11),
                    rs.getInt(12), // proximity contact
                    rs.getInt(13),
                    rs.getInt(14),
                    rs.getInt(15),
                    rs.getInt(16), // kissing
                    rs.getInt(17), // pets
                    rs.getInt(18),
                    rs.getInt(19),
                    rs.getBoolean(20),
                    rs.getBoolean(21),
                    rs.getBoolean(22),
                    rs.getBoolean(23)
                );
            }
        }
        throw new SQLException("Missing pathogen settings. Please install application correctly.");
    }

    public void setPathogenSettings(
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
            boolean inTrials) throws SQLException {
        try (var pstmt = connection.prepareStatement("UPDATE Patho_Settings SET source = ?, name = ?, contagious_ranking = ?, at_risk_1 = ?, at_risk_2 = ?, at_risk_3 = ?, at_risk_4 = ?, at_risk_5 = ?, touch_face_hands = ?, respir_droplets = ?, proximity_contact = ?, touching_hard_surf = ?, airborne = ?, sex_contact = ?, kissing = ?, pets = ?, wild_animals = ?, gym = ?, vaccine_yes = ?, vaccine_no = ?, in_testing = ?, in_trials = ? WHERE id=1")) {
            pstmt.setString(1, source);
            pstmt.setString(2, name);
            pstmt.setInt(3, contagiousRanking);
            pstmt.setString(4, atRisk1);
            pstmt.setString(5, atRisk2);
            pstmt.setString(6, atRisk3);
            pstmt.setString(7, atRisk4);
            pstmt.setString(8, atRisk5);
            pstmt.setInt(9, touchFaceHands);
            pstmt.setInt(10, respiratorDroplets);
            pstmt.setInt(11, proximityContact);
            pstmt.setInt(12, touchingHardSurface);
            pstmt.setInt(13, airborne);
            pstmt.setInt(14, sexualContact);
            pstmt.setInt(15, kissing);
            pstmt.setInt(16, pets);
            pstmt.setInt(17, wildAnimals);
            pstmt.setInt(18, gym);
            pstmt.setBoolean(19, vaccineYes);
            pstmt.setBoolean(20, vaccineNo);
            pstmt.setBoolean(21, inTesting);
            pstmt.setBoolean(22, inTrials);
            pstmt.execute();
        }
    }

    /**
     * For temporary usage. Should be removed eventually.
     * @throws SQLException
     */
    public void install() throws SQLException {
        // Create app mode
        var stmt = connection.createStatement();
        stmt.execute("CREATE TABLE AppMode (id SERIAL PRIMARY KEY, name VARCHAR(256))");
        stmt.close();
        // Create account
        // is_admin, county, state, username, password_hash
        var stmt2 = connection.createStatement();
        stmt2.execute("CREATE TABLE Account (id SERIAL PRIMARY KEY, is_admin BOOLEAN, county VARCHAR(256), state VARCHAR(16), username VARCHAR(512), password_hash VARCHAR(512))");
        stmt2.close();
        // Create AppHeading
        var stmt3 = connection.createStatement();
        stmt3.execute("CREATE TABLE AppHeading (mode INT, type VARCHAR(7), headingText VARCHAR(511))");
        stmt3.close();
        // Create Article
        var stmt4 = connection.createStatement();
        stmt4.execute("CREATE TABLE Article (id SERIAL PRIMARY KEY, mode_id INT, source VARCHAR(512), name VARCHAR(512), agroup VARCHAR(10), description VARCHAR(16384), icon_url VARCHAR(2048))");
        stmt4.close();
        // Create Input
        var stmtinp = connection.createStatement();
        stmtinp.execute("CREATE TABLE Input (id SERIAL PRIMARY KEY, mode_id INT, source VARCHAR(512), name VARCHAR(512), agroup VARCHAR(10), icon_url VARCHAR(2048), question VARCHAR(4096), input_type VARCHAR(128), threshold_type VARCHAR(128), alert_call_health_provider BOOLEAN, alert_call_state_help BOOLEAN, alert_call_suicide_help BOOLEAN, seek_emergency_care BOOLEAN, above_value INT, below_value INT)");
        stmtinp.close();
        // Create pathogen settings
        var psStmt = connection.createStatement();
        psStmt.execute("CREATE TABLE Patho_Settings (id SERIAL PRIMARY KEY, source VARCHAR(256), name VARCHAR(256), contagious_ranking INT, at_risk_1 VARCHAR(256), at_risk_2 VARCHAR(256), at_risk_3 VARCHAR(256), at_risk_4 VARCHAR(256), at_risk_5 VARCHAR(256), touch_face_hands INT, respir_droplets INT, proximity_contact INT, touching_hard_surf INT, airborne INT, sex_contact INT, kissing INT, pets INT, wild_animals INT, gym INT, vaccine_yes BOOLEAN, vaccine_no BOOLEAN, in_testing BOOLEAN, in_trials BOOLEAN)");
        psStmt.close();
        // Insert default app modes
        var stmt6 = connection.createStatement();
        stmt6.execute("INSERT INTO AppMode (name) VALUES ('GeneralPop'), ('Exposed'), ('Infected'), ('SeekUrgentCare'), ('Recovered')");
        stmt6.close();
        // Insert default app headings
        // AppMode is assigned to stmt7 in the order AppMode is inserted.
        var stmt7 = connection.createStatement();
        stmt7.execute("INSERT INTO AppHeading (mode, type, headingText) VALUES"
            + " (1, 'GPDIF', ''), (2, 'PEDIF', ''), (3, 'PIDIF', ''), (4, 'ACDIF', ''), (5, 'RRDIF', ''),"
            + " (1, 'GPEMF', ''), (2, 'PEEMF', ''), (3, 'PIEMF', ''), (4, 'ACEMF', ''), (5, 'RREMF', ''),"
            + " (1, 'GPDIT', ''), (2, 'PEDIT', ''), (3, 'PIDIT', ''), (4, 'ACDIT', ''), (5, 'RRDIT', ''),"
            + " (1, 'GPEMT', ''), (2, 'PEEMT', ''), (3, 'PIEMT', ''), (4, 'ACEMT', ''), (5, 'RREMT', '')");
        stmt7.close();
        // Insert default pathogen settings
        var stmt8 = connection.createStatement();
        stmt8.execute("INSERT INTO Patho_Settings (source, name, contagious_ranking, at_risk_1, at_risk_2, at_risk_3, at_risk_4, at_risk_5, touch_face_hands, respir_droplets, proximity_contact, touching_hard_surf, airborne, sex_contact, kissing, pets, wild_animals, gym, vaccine_yes, vaccine_no, in_testing, in_trials) VALUES ('', '', 1, '', '', '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, FALSE, FALSE, FALSE, FALSE)");
        stmt8.close();
    }

    private void initConnection() throws SQLException {
        try {
            var url = "jdbc:postgresql://flexpoint.cdpiusjizvlu.us-east-2.rds.amazonaws.com:5432/flexpoint";
            Class.forName("org.postgresql.Driver").newInstance();
            this.connection = DriverManager.getConnection(url, "jonathan", "j7652134");
        } catch (Exception ex) {
            throw new SQLException("Failed to initialize connection.", ex);
        }
    }
}
