package com.model.blaze.entity;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "order")
@Data
public class Order implements Serializable {

	private static final long serialVersionUID = 2330289880871451994L;
	
	@Id
	private String number;
	private String status; // (pending, completed, rejected)
	private String dateOrder;
	private String  client;
	private Double taxAmounts;
	private Double totalTaxes;
	private Double totalQuantity;
	private List<OrderDetail> details;
	
	

	
}
