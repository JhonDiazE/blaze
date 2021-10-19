package com.model.blaze.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.model.blaze.entity.Order;
import com.model.blaze.service.OrderService;

@RestController
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.PUT,RequestMethod.POST,RequestMethod.DELETE})
@RequestMapping(path = "/order")
public class OrderController {
	
	@Autowired
	OrderService orderService;
	
	@RequestMapping(value = "/", method = RequestMethod.POST, 
			consumes = MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Order save(@RequestBody Order entity) {
		return orderService.save(entity);
	}
	
	@RequestMapping(value = "/", method = RequestMethod.PUT, 
			consumes = MediaType.APPLICATION_JSON_VALUE, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Order update(@RequestBody Order entity) {
		return orderService.save(entity);
	}
	
	@RequestMapping(value = "/", method = RequestMethod.DELETE)
	public ResponseEntity<?> delete(@RequestBody Order entity) {
		 orderService.delete(entity);
		 return ResponseEntity.ok().build();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Order findByNumber(@PathVariable("number") String number) {
		return orderService.findById(number);
	}
	
	@RequestMapping(value = "/", method = RequestMethod.GET, 
			produces = MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody List<Order> findAll() {
		return orderService.findAll();
	}
}
