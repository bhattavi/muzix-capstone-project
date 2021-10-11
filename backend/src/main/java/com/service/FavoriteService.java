package com.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.dao.FavRepo;
import com.model.Favorite;

@Service
public class FavoriteService {
	
	@Autowired
	private FavRepo favRepo;
	
	

	public FavoriteService(FavRepo favRepo) {
		this.favRepo = favRepo;
	}

	//List<Favorite> al = new ArrayList<Favorite>();
	
	
	public List<Favorite> findByUserId(String userId) {
		// TODO Auto-generated method stub
		List<Favorite> al = new ArrayList<Favorite>();
		for(Favorite fav:favRepo.findAll()) {
			if(fav.getUserId().equals(userId)) {
				al.add(fav);
			}
		}
		return al;
	}
	
	public void insertDataIntoFavorites(Favorite fav) {
		favRepo.insert(fav);
	}

}
