package com.model.blaze.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "product")
@Data
public class Product {

	@Id
	private String name;
	private String category;
	private Double price;
	private String status;
	
}
