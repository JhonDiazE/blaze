package com.model.blaze.entity;

import java.io.Serializable;

import lombok.Data;

@Data
public class OrderDetail implements Serializable {

	private static final long serialVersionUID = 2330289880871451994L;
	
	private String product;

	private Double quantity;
	private Double unitPrice;
	private Double cost;
	
	
	
}
