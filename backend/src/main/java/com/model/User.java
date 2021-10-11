package com.model;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document
public class User {
	@Id
 int userId;
  String uname;
  String email;
  String password;
  List<String> fav;
 
  
public User(int userId, String uname, String email, String password) {
	super();
	this.userId = userId;
	this.uname = uname;
	this.email = email;
	this.password = password;
	this.fav = new ArrayList<>();
	
}


public User(int userId, String uname, String email, String password, List<String> fav) {
	super();
	this.userId = userId;
	this.uname = uname;
	this.email = email;
	this.password = password;
	this.fav = fav;
}


public User() {
	super();
	// TODO Auto-generated constructor stub
	this.fav = new ArrayList<>();
}
public int getUserId() {
	return userId;
}
public void setUserId(int userId) {
	this.userId = userId;
}
public String getUname() {
	return uname;
}
public void setUname(String uname) {
	this.uname = uname;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public List<String> getFav() {
	return fav;
}
public void setFav(List<String> fav) {
	this.fav = fav;
}

  

 
 
}
