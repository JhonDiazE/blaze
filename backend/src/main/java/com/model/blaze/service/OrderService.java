package com.model.blaze.service;

import java.util.List;

import com.model.blaze.entity.Order;

public interface OrderService {

	public Order save(Order entity) ;
	public void delete(Order entity);
	public Order findById(String number) ;
	public List<Order>findAll();

}
