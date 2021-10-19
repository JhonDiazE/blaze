package com.model.blaze.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.blaze.entity.Product;
import com.model.blaze.repository.ProductRepository;
import com.model.blaze.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ProductRepository repository;
	
	public Product save(Product entity) {
		return repository.save(entity);
	}
	
	public void delete(Product entity) {
			repository.delete(entity);
	}

	
	public Product findById(String name) {
		return repository.findById(name).orElse(null);
	}
	
	public List<Product>findAll() {
		return repository.findAll();
	}
}
