package com.app.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.pojos.CustomerEnquiry;

public interface ICustomerEnquiryService {
            
	//add a method to store customer enquiry
	String addEnquiry(CustomerEnquiry enquiry,int customerId);
	
	//add a method to get enquiryStatus
	List<CustomerEnquiry> getEnquiryStatus(int customerId);
	
	//add a method to send list of enquries to admin
	List<CustomerEnquiry> getAllCustomerEnquries();
	
	//add a method to send respone to customer enquiry given admin
	
	String sendResponseToCustomerEnquiry(String enquiryResponse, int enquiryId);
}
