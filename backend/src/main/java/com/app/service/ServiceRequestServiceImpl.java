package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IServiceRequestRepository;
import com.app.dao.IUserRepository;
import com.app.pojos.ServiceRequest;
import com.app.pojos.User;

@Service
@Transactional
public class ServiceRequestServiceImpl implements IServiceRequestService{
      
	@Autowired
	private IServiceRequestRepository requestRepo;
	@Autowired
	private IUserRepository userRepo;

	@Override
	public String addCustomerServiceRequest(ServiceRequest request, int customerId) {
		  
		User user= userRepo.findById(customerId);
		request.setUser(user);
		requestRepo.save(request);
		return "Your request has been submitted..!! Please check 'Service Request Status' for the response";
	}

	@Override
	public List<ServiceRequest> getServiceRequestStatus(int customerId) {
		  
		return requestRepo.getServiceRequestsStatusByCustId(customerId);
	}

	//admin part
	@Override
	public List<ServiceRequest> getAllServiceRequest() {
		return requestRepo.getAllServiceRequest();
	}
//admin part
	@Override
	public String sendReponseToCustomerServiceRequest(LocalDate response, int requestId) {
		
		    requestRepo.updateServiceRequest(response, requestId);
	    	 return "Response has been sent to customer successfully..";    
	}
	
	
}
