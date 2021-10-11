package com.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dao.AppDao;
import com.model.User;


@Service

public class UserServiceImpl implements UserService {
	@Autowired
	private AppDao appDao;

	@Override
	public ResponseEntity getUserById(int id) {
		// TODO Auto-generated method stub
		Optional<User> b = appDao.findById(id);

		if (b.isPresent()) {

			return new ResponseEntity<>(b, HttpStatus.OK);
		}

		return new ResponseEntity<>(b, HttpStatus.NOT_FOUND);
	}
	
	@Override
	public ResponseEntity saveUser(User user) {
		// TODO Auto-generated method stub
		appDao.insert(user);
		return new ResponseEntity<>(user, HttpStatus.CREATED);
	}

	@Override
	public ResponseEntity getAllUser() {
		// TODO Auto-generated method stub
		List<User> bl = new ArrayList<>();
		appDao.findAll().forEach(bl::add);
		return new ResponseEntity<>(bl, HttpStatus.OK);
	}

	@Override
	public ResponseEntity deleteUser(int id) {
		// TODO Auto-generated method stub
		appDao.deleteById(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@Override
	public ResponseEntity updateUser(int id, User user) {
		// TODO Auto-generated method stub
		Optional<User> op = appDao.findById(id);
		if (op.isPresent()) {

			appDao.save(user);
			return new ResponseEntity<>(HttpStatus.OK);
		}

		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	public List<User> getAllUsersList() {
		// TODO Auto-generated method stub
		List<User> bl = new ArrayList<>();
		appDao.findAll().forEach(bl::add);
		return bl;
	}
	
	public ResponseEntity updateFav(String id, int userId) {
		
		 
		 Optional<User> op = appDao.findById(userId);
			if (op.isPresent()) {
				User user = op.get();
				System.out.println(user.getUname());
				List<String> list = user.getFav();
				System.out.println(list);
				
				list.add(id);
				user.setFav(new ArrayList<>(list));
				appDao.delete(user);
				appDao.save(user);
				System.out.println(list);
				
				
				
				return new ResponseEntity<>(HttpStatus.OK);
			}

			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	
	
	public ResponseEntity getAllFav(int userId) {
		 Optional<User> op = appDao.findById(userId);
			if (op.isPresent()) {
				User user = op.get();
				
				return new ResponseEntity<>(user.getFav(), HttpStatus.OK);
			}

			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		 

}
