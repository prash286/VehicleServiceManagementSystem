package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.CustomerEnquiry;
import com.app.pojos.ServiceRequest;
import com.app.service.ICustomerEnquiryService;
import com.app.service.IInvoiceService;
import com.app.service.IJobCardService;
import com.app.service.IServiceRequestService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/customers")
public class CustomerController {
         
	//add a dependency
	@Autowired
	private ICustomerEnquiryService enquiryService;
	@Autowired
	private IServiceRequestService requestService;
	@Autowired
	private IJobCardService jobService;
	@Autowired
	private IInvoiceService invoiceService;
	
	//add a request handling method to store customer enquiry //customer part
	@PostMapping("/addenquiry/{cid}")
 public ResponseEntity<?> AddCustomerEnquiry(@RequestBody @Valid CustomerEnquiry enquiry,@PathVariable(value="cid") int customerId)
 {
		return new ResponseEntity<>(enquiryService.addEnquiry(enquiry,customerId),HttpStatus.ACCEPTED);
 }
  
   //add a request handling method to send response for customer enquiry  
	@GetMapping("/enquirystatus/{cid}")
	public ResponseEntity<?> sendResponseToCustomerEnquiry(@PathVariable(value="cid") int customerId)
	{
		return new ResponseEntity<>(enquiryService.getEnquiryStatus(customerId),HttpStatus.OK);
	}
	
	//add a request handling method to add service Request //customer part
	@PostMapping("/servicerequest/{cid}")
	public ResponseEntity<?> addServiceRequest(@RequestBody @Valid ServiceRequest request,@PathVariable(value="cid") int customerId)
	{
		return new ResponseEntity<>(requestService.addCustomerServiceRequest(request, customerId),HttpStatus.ACCEPTED);
	}
	
	//add a request handling method to get service request status //customer part
	@GetMapping("/requeststatus/{cid}")
	public ResponseEntity<?> getServiceRequestStatus(@PathVariable(value="cid") int customerId)
	{
		return new ResponseEntity<>(requestService.getServiceRequestStatus(customerId),HttpStatus.OK);
	}
	
	//add a request handling method for getting vehicle service status  //customer part
	@GetMapping("/servicestatus/{email}")
	public ResponseEntity<?> getVehicleServiceStatus(@PathVariable(value="email") String customerEmail)
	{
		return new ResponseEntity<>(jobService.getVehicleServiceStatusPending(customerEmail),HttpStatus.OK);
	}
	
	//add a request handling method to get Invoice by jobCardId
	@GetMapping("/getinvoice/{jid}")
	public ResponseEntity<?>getInvoiceByJobCardId(@PathVariable(value = "jid") int jobCardId)
	{
		return new ResponseEntity<>(invoiceService.getInvoiceByJobCardId(jobCardId),HttpStatus.OK);
	}
}
