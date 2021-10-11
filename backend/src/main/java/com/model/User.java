package com.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {
	@Id
 int userId;
  String uname;
  String email;
  String password;
 
  
public User(int userId, String uname, String email, String password) {
	super();
	this.userId = userId;
	this.uname = uname;
	this.email = email;
	this.password = password;
	
}
public User() {
	super();
	// TODO Auto-generated constructor stub
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
  
  

 
 
}
