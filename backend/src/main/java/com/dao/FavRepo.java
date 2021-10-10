package com.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.model.Favorite;

@Repository
public interface FavRepo extends MongoRepository<Favorite,String>{

}
