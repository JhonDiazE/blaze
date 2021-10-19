package com.model.blaze.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.model.blaze.entity.Order;
import com.model.blaze.entity.Product;

@Repository
public interface ProductRepository extends MongoRepository<Product, String> {
	
}
