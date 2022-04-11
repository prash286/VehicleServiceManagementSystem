package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.pojos.ServiceRequest;

public interface IServiceRequestService {
           
	   //add a method to add service request of customer
	String addCustomerServiceRequest(ServiceRequest request,int customerId);
	
	//add a method to get serviceRequest status
	 List<ServiceRequest> getServiceRequestStatus(int customerId);
	 
	 //add a method to get all sevice request
	 List<ServiceRequest> getAllServiceRequest();
	 
	 //add a method to send response to customer service request
	 String sendReponseToCustomerServiceRequest(LocalDate response, int customerId);
}
