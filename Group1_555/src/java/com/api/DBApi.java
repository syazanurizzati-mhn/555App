/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.api;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 *
 * @author acer
 */
public class DBApi {

    static Connection con;
    static ResultSet rs;

    public static JSONObject registerNewUser(String email, String password) {
        JSONObject jo = new JSONObject();
        int ada = 0;
        try {
            con = ConMan.getConnection();
            String sql = "select * from register where email = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, email);
            rs = ps.executeQuery();
            while (rs.next()) {
                ada = 1;
            }
            if (ada == 1) {//user already exists
                jo.put("status", 1);
            } else { //not yet exists, add user into table
                sql = "insert into register(email,password) values(?,?)";
                PreparedStatement ps2 = con.prepareStatement(sql);
                ps2.setString(1, email);
                ps2.setString(2, password);
                ps2.executeUpdate();
                jo.put("status", 0);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }

    public static JSONObject userAuthentication(String email, String pass) {
        JSONObject jo = new JSONObject();
        int ada = 0;
        try {
            con = ConMan.getConnection();
            String sql = "select * from register where email = ? and password = ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, email);
            ps.setString(2, pass);
            rs = ps.executeQuery();
            while (rs.next()) {
                ada = 1;
            }
            if (ada == 1) {//user already exists
                jo.put("status", 1);
            } else { //not yet exists, add user into table
                jo.put("status", 0);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }

    public static JSONArray getNotesDataByOwner(String email) {
        JSONArray ja = new JSONArray();
        int index = 0;
        int ada = 0;
        try {
            con = ConMan.getConnection();
            String sql = "select * from notes where owneremail= ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, email);
            rs = ps.executeQuery();
            while (rs.next()) {
                ada = 1;
                JSONObject jo = new JSONObject();
                jo.put("id", rs.getString("id"));
                jo.put("nickname", rs.getString("nickname"));
                jo.put("email", rs.getString("email"));
                jo.put("username", rs.getString("username"));
                jo.put("password", rs.getString("password"));
                jo.put("phone", rs.getString("phone"));
                jo.put("addedDate", rs.getString("addedDate"));
                ja.add(index++, jo);
            }
            if (ada == 1) {//ada data notes
                JSONObject jo = new JSONObject();
                jo.put("status", 1);
                ja.add(index++, jo);
            } else {//tiada data notes
                JSONObject jo = new JSONObject();
                jo.put("status", 0);
                ja.add(index++, jo);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return ja;
    }

    public static JSONObject addNotesData(String nickname, String email, String username, String password, String phone, String owneremail) {
        JSONObject jo = new JSONObject();
        try {
            con = ConMan.getConnection();
            String sql = "insert into notes(nickname,email,username,password,phone,owneremail) values (?,?,?,?,?,?)";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, nickname);
            ps.setString(2, email);
            ps.setString(3, username);
            ps.setString(4, password);
            ps.setString(5, phone);
            ps.setString(6, owneremail);
            ps.executeUpdate();
            jo.put("status", 1);

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }

    public static JSONObject getNotesDataById(String id) {
        JSONObject jo = new JSONObject();
        int index = 0;
        int ada = 0;
        try {
            con = ConMan.getConnection();
            String sql = "select * from notes where id= ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, id);
            rs = ps.executeQuery();
            while (rs.next()) {
                ada = 1;

                jo.put("id", rs.getString("id"));
                jo.put("nickname", rs.getString("nickname"));
                jo.put("email", rs.getString("email"));
                jo.put("username", rs.getString("username"));
                jo.put("password", rs.getString("password"));
                jo.put("phone", rs.getString("phone"));
                jo.put("addedDate", rs.getString("addedDate"));

            }
            if (ada == 1) {//ada data contacts
                jo.put("status", 1);
            } else {//tiada data contacts
                jo.put("status", 0);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }
    
     public static JSONObject updateNotesById(String nickname,String email,String username,String password,String phone,String contactid){
        JSONObject jo = new JSONObject();
        try {
            con = ConMan.getConnection();
            String sql = "update notes set nickname=?, email=?, username=?, password=?, phone=? where id=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, nickname);
            ps.setString(2, email);
            ps.setString(3, username);
            ps.setString(4, password);
            ps.setString(5, phone);
            ps.setString(6, contactid);
            ps.executeUpdate();
            jo.put("status", 1);

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }
    
    public static JSONObject delNotesById(String contactid){
    JSONObject jo = new JSONObject();
        try {
            con = ConMan.getConnection();
            String sql = "delete from notes where id=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, contactid);
            ps.executeUpdate();
            jo.put("status", 1);

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }
    
    //STUDIES
    
    public static JSONArray getStudiesDataByOwner(String email) {
        JSONArray ja = new JSONArray();
        int index = 0;
        int ada = 0;
        try {
            con = ConMan.getConnection();
            String sql = "select * from studies where owneremail= ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, email);
            rs = ps.executeQuery();
            while (rs.next()) {
                ada = 1;
                JSONObject jo = new JSONObject();
                jo.put("id", rs.getString("id"));
                jo.put("subject", rs.getString("subject"));
                jo.put("notes", rs.getString("notes"));
                ja.add(index++, jo);
            }
            if (ada == 1) {//ada data studies
                JSONObject jo = new JSONObject();
                jo.put("status", 1);
                ja.add(index++, jo);
            } else {//tiada data notes
                JSONObject jo = new JSONObject();
                jo.put("status", 0);
                ja.add(index++, jo);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return ja;
    }

    public static JSONObject addStudiesData(String subject, String notes, String owneremail) {
        JSONObject jo = new JSONObject();
        try {
            con = ConMan.getConnection();
            String sql = "insert into studies(subject, notes, owneremail) values (?,?,?)";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, subject);
            ps.setString(2, notes);
            ps.setString(3, owneremail);
            ps.executeUpdate();
            jo.put("status", 1);

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }

    public static JSONObject getStudiesDataById(String id) {
        JSONObject jo = new JSONObject();
        int index = 0;
        int ada = 0;
        try {
            con = ConMan.getConnection();
            String sql = "select * from studies where id= ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, id);
            rs = ps.executeQuery();
            while (rs.next()) {
                ada = 1;

                jo.put("id", rs.getString("id"));
                jo.put("subject", rs.getString("subject"));
                jo.put("notes", rs.getString("notes"));

            }
            if (ada == 1) {//ada data studies
                jo.put("status", 1);
            } else {//tiada data studies
                jo.put("status", 0);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }
    
     public static JSONObject updateStudiesById(String subject,String notes, String studiesid){
        JSONObject jo = new JSONObject();
        try {
            con = ConMan.getConnection();
            String sql = "update studies set subject=?, notes=? where id=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, subject);
            ps.setString(2, notes);
            ps.setString(3, studiesid);
            ps.executeUpdate();
            jo.put("status", 1);

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }
    
    public static JSONObject delStudiesById(String studiesid){
    JSONObject jo = new JSONObject();
        try {
            con = ConMan.getConnection();
            String sql = "delete from studies where id=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, studiesid);
            ps.executeUpdate();
            jo.put("status", 1);

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }
    
    //EXPENSES
    
    public static JSONArray getExpensesDataByOwner(String email) {
        JSONArray ja = new JSONArray();
        int index = 0;
        int ada = 0;
        try {
            con = ConMan.getConnection();
            String sql = "select * from expenses where owneremail= ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, email);
            rs = ps.executeQuery();
            while (rs.next()) {
                ada = 1;
                JSONObject jo = new JSONObject();
                jo.put("id", rs.getString("id"));
                jo.put("date", rs.getString("date"));
                jo.put("itemsprice", rs.getString("itemsprice"));
                jo.put("total", rs.getString("total"));
                ja.add(index++, jo);
            }
            if (ada == 1) {//ada data expenses
                JSONObject jo = new JSONObject();
                jo.put("status", 1);
                ja.add(index++, jo);
            } else {//tiada data expenses
                JSONObject jo = new JSONObject();
                jo.put("status", 0);
                ja.add(index++, jo);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return ja;
    }

    public static JSONObject addExpensesData(String date, String itemsprice, String total, String owneremail) {
        JSONObject jo = new JSONObject();
        try {
            con = ConMan.getConnection();
            String sql = "insert into expenses(date, itemsprice, total, owneremail) values (?,?,?,?)";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, date);
            ps.setString(2, itemsprice);
            ps.setString(3, total);
            ps.setString(4, owneremail);
            ps.executeUpdate();
            jo.put("status", 1);

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }

    public static JSONObject getExpensesDataById(String id) {
        JSONObject jo = new JSONObject();
        int index = 0;
        int ada = 0;
        try {
            con = ConMan.getConnection();
            String sql = "select * from expenses where id= ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, id);
            rs = ps.executeQuery();
            while (rs.next()) {
                ada = 1;

                jo.put("id", rs.getString("id"));
                jo.put("date", rs.getString("date"));
                jo.put("itemsprice", rs.getString("itemsprice"));
                jo.put("total", rs.getString("total"));

            }
            if (ada == 1) {//ada data expenses
                jo.put("status", 1);
            } else {//tiada data expenses
                jo.put("status", 0);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }
    
     public static JSONObject updateExpensesById(String date,String itemsprice, String total, String expensesid){
        JSONObject jo = new JSONObject();
        try {
            con = ConMan.getConnection();
            String sql = "update expenses set date=?, itemsprice=?, total=? where id=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, date);
            ps.setString(2, itemsprice);
            ps.setString(3, total);
            ps.setString(4, expensesid);
            ps.executeUpdate();
            jo.put("status", 1);

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }
    
    public static JSONObject delExpensesById(String expensesid){
    JSONObject jo = new JSONObject();
        try {
            con = ConMan.getConnection();
            String sql = "delete from expenses where id=?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, expensesid);
            ps.executeUpdate();
            jo.put("status", 1);

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;
    }
    
    //profile
    
     public static JSONArray getProfileDataByOwner(String email) {
        JSONArray ja = new JSONArray();
        int index = 0;
        int ada = 0;
        try {
            con = ConMan.getConnection();
            String sql = "select * from register where email= ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setString(1, email);
            rs = ps.executeQuery();
            while (rs.next()) {
                ada = 1;
                JSONObject jo = new JSONObject();
                jo.put("email", rs.getString("email"));
                jo.put("password", rs.getString("password"));
                ja.add(index++, jo);
            }
            if (ada == 1) {//ada data notes
                JSONObject jo = new JSONObject();
                jo.put("status", 1);
                ja.add(index++, jo);
            } else {//tiada data notes
                JSONObject jo = new JSONObject();
                jo.put("status", 0);
                ja.add(index++, jo);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return ja;
    }
}
