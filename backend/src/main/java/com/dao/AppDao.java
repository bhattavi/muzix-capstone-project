package com.dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.model.User;





@Repository
public interface AppDao extends MongoRepository<User, Integer>{

}
