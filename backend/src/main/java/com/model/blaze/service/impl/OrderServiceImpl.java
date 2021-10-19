package com.model.blaze.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.blaze.entity.Order;
import com.model.blaze.repository.OrderRepository;
import com.model.blaze.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {
	
	@Autowired
	OrderRepository repository;
	
	public Order save(Order entity) {
		return repository.save(entity);
	}
	
	public void delete(Order entity) {
			repository.delete(entity);
	}

	
	public Order findById(String number) {
		return repository.findById(number).orElse(null);
	}
	
	public List<Order>findAll() {
		return repository.findAll();
	}
}
