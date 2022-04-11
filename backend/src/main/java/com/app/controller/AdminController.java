package com.app.controller;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.CustomerEnquiry;
import com.app.service.ICustomerEnquiryService;
import com.app.service.IJobCardService;
import com.app.service.IServiceRequestService;
import com.app.service.IUserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/admin")
public class AdminController {
    
	@Autowired
	private IUserService userService;
	@Autowired
	private ICustomerEnquiryService enquiryService;;
	@Autowired
	private IJobCardService jobService;
	@Autowired
	private IServiceRequestService requestService;
	
	//add a request handling method to get list of user(mechanic & service advisor) wait for approval from admin
	@GetMapping("/approve")
  public ResponseEntity<?> getAllUserWaitForApproval()
	{
	    return new ResponseEntity<>(userService.getAllUserWaitForApproval(),HttpStatus.OK);	
	}
	
	//add a request handling method to approve user
	@GetMapping("/accepted/{uid}")
	public ResponseEntity<?> ApproveUser(@PathVariable("uid") int userId)
	{
		return new ResponseEntity<>(userService.approveUser(userId),HttpStatus.ACCEPTED);
	}
	
	//add a request handling method to get all customer enquries
	@GetMapping("/getenquries")
	public ResponseEntity<?> getListOfEnquries()
	{
		return new ResponseEntity<>(enquiryService.getAllCustomerEnquries(),HttpStatus.OK);
	}
	
	// add a request handling method to save response given by admin to customer enquiry  
	@PutMapping("/submitenquiry/{eid}")
	public ResponseEntity<?> submitResponseForEnquiry(@RequestBody String enquiryResponse,@PathVariable("eid") int enquiryId)
	{
		return new ResponseEntity<>(enquiryService.sendResponseToCustomerEnquiry(enquiryResponse,enquiryId),HttpStatus.OK);
	}
	
	//add a request handling method to get all job cards to Admin
	@GetMapping("/servicerecords")
	public ResponseEntity<?> getAllServiceRecords()
	{
		return new ResponseEntity<>(jobService.getAllJobCardDetails(),HttpStatus.OK);
	}
	
	//add a request handling method to get all customer service request
	@GetMapping("/getservicerequest")
    public ResponseEntity<?> getAllCustomerServiceRequest()
    {
		return new ResponseEntity<>(requestService.getAllServiceRequest(),HttpStatus.OK);
    }
	
	//add a request handling method to send reponse of admin to Customer service request
	@PutMapping("/updaterequest/{rid}")
	public ResponseEntity<?> sendResponseToCustomerServiceRequest(@RequestBody LocalDate serviceResponse,@PathVariable("rid") int requestId )
	{
		return new ResponseEntity<>(requestService.sendReponseToCustomerServiceRequest(serviceResponse, requestId),HttpStatus.OK);
	}
	
	//add a request handling method to get no of customer 
	@GetMapping("/countcustomer")
	public ResponseEntity<?> getNoOfCustomers()
	{
		return new ResponseEntity<>(userService.countNoOfCustomers(),HttpStatus.OK);
	}
	//add a request handling method to get no of customer 
		@GetMapping("/countmechanic")
		public ResponseEntity<?> getNoOfMechanics()
		{
			return new ResponseEntity<>(userService.countNoOfMechanics(),HttpStatus.OK);
		}
		
		//add a request handling method to get no of customer 
		@GetMapping("/countserviceadvisor")
		public ResponseEntity<?> getNoOfServiceAdvisor()
		{
			return new ResponseEntity<>(userService.countNoOfServiseAdvisors(),HttpStatus.OK);
		}
		
		//add a request handling method to get All users Details
		@GetMapping("/getusersdetails")
		public ResponseEntity<?>getAllUsersDetails(){
			return new ResponseEntity<>(userService.getAllUsersDetails(),HttpStatus.OK);
		}
}
