package com.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.Favorite;
import com.model.Login;
import com.model.User;
import com.service.FavoriteService;
import com.service.UserServiceImpl;



@RestController
@RequestMapping("/mainapp")
@CrossOrigin(origins = "http://localhost:4200")
public class AppController {

	@Autowired
	private UserServiceImpl uservice;
	
	@Autowired
	private FavoriteService favservice;

	@PostMapping("/saveuser")
	public ResponseEntity saveBlog(@RequestBody User user) {

		

		return uservice.saveUser(user);

	}

	@GetMapping("/loadall")
	public ResponseEntity loadAll() {
		return uservice.getAllUser();
	}

	@GetMapping("/getuserbyid/{id}")
	public ResponseEntity findUser(@PathVariable("id") int id) {

		return uservice.getUserById(id);

	}

	@DeleteMapping("/deleteuser/{id}")
	public ResponseEntity deleteUser(@PathVariable("id") int id) {
		return uservice.deleteUser(id);

	}

	@PutMapping("/updateuser/{id}")
	public ResponseEntity updateUser(@PathVariable("id") int id, @RequestBody User user) {
		return uservice.updateUser(id, user);

	}
	
	@PostMapping("/login")
	public ResponseEntity saveBlog(@RequestBody Login login) {

		
		List<User> ul = uservice.getAllUsersList();
		for(User u : ul) {
			if(u.getEmail().equals(login.getEmail()) && u.getPassword().equals(login.getPassword())) {
				return new ResponseEntity<>(u, HttpStatus.OK);
			}
		}
		System.out.println(ul);
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);

	}
	
	@GetMapping("/favorite/{userId}")
	public List<Favorite> getFavorites(@PathVariable("userId")String userId){
		return favservice.findByUserId(userId);
	}
	
	@PostMapping("/favorite/add")
	public ResponseEntity addFavorite(@RequestBody Favorite fav) {
		favservice.insertDataIntoFavorites(fav);
		return new ResponseEntity<>(fav,HttpStatus.CREATED);
	}
	
	

}
