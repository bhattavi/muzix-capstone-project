package com.service;

import java.util.List;

import org.springframework.http.ResponseEntity;


import com.model.User;

public interface UserService {
	public ResponseEntity saveUser(User user);
	public ResponseEntity getAllUser();
	public ResponseEntity getUserById(int id);
	public ResponseEntity deleteUser(int id);
	public ResponseEntity updateUser(int id, User user);
	

}
