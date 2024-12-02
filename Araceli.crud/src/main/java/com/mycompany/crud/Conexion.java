/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.crud;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author Araceli
 */
public class Conexion {
    String hostname = "mysql-33c7fdc9-vallegrande-7077.c.aivencloud.com";
    String jdbcUrl = "jdbc:mysql://" + hostname + ":10283/bdescuelas";
    String user = "avnadmin";
    String password = "AVNS_mdQVLibtuaZ4xEqBOQ8";
    
    Connection con;

  public Conexion(){
        try {
            con = DriverManager.getConnection(jdbcUrl,user,password);
            System.out.println("exito en la conexion");
        } catch (SQLException e) {
            System.out.println("error con la clase conexion: " + e);
        }
    }
    
    public Connection getConexion(){
         return con;
    }
}