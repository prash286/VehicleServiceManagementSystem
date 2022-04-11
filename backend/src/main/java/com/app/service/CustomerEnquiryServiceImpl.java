package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ICustomerEnquiryRepository;
import com.app.dao.IJobCardRepository;
import com.app.dao.IUserRepository;
import com.app.pojos.CustomerEnquiry;
import com.app.pojos.JobCard;
import com.app.pojos.User;

@Service
@Transactional
public class CustomerEnquiryServiceImpl implements ICustomerEnquiryService {
          
	    @Autowired
	  private  ICustomerEnquiryRepository enquiryRepo;
	    @Autowired
	    private IUserRepository userRepo;
	 

		@Override
		public String addEnquiry(CustomerEnquiry enquiry,int customerId) {
			User user=userRepo.findById(customerId);
			enquiry.setUser(user);
			enquiryRepo.save(enquiry);
			return "Your enquiry has been submitted. Please check 'Enquiry Status option' for the response..!!";
		}

		@Override
		public List<CustomerEnquiry> getEnquiryStatus(int customerid) {
			      
			    List<CustomerEnquiry> enquiries=enquiryRepo.getCustomerEnquiryStatusByCustomerId(customerid);
			   	return enquiries;
		}

		//for admin part
		@Override
		public List<CustomerEnquiry> getAllCustomerEnquries() {
			return enquiryRepo.getAllCutomerEnquiry();
		}

		@Override
		public String sendResponseToCustomerEnquiry(String enquiryResponse,int enquiryId) {
			/*
			 * CustomerEnquiry enquiry=enquiryRepo.getCustomerEnquiryById(enquiryId);
			 * enquiry.setResponse(enquiryResponse); enquiryRepo.save(enquiry);
			 */
			   enquiryRepo.UpdateCustomerEnquiry(enquiryResponse, enquiryId);
			return "Response has sent to Customer";
		}

		
	    
	    
}
