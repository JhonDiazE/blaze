package com.model.blaze.service;

import java.util.List;

import com.model.blaze.entity.Product;

public interface ProductService {

	public Product save(Product entity) ;
	public void delete(Product entity);
	public Product findById(String name) ;
	public List<Product>findAll();

}
