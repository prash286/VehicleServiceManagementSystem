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

import com.app.dao.IUserRepository;
import com.app.dto.DTOAddJobCard;
import com.app.pojos.JobCard;
import com.app.service.IJobCardService;
import com.app.service.IUserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/advisors")
public class ServiceAdvisorController {
	
	//add a dependency
	@Autowired
	private IJobCardService jobService;
	
	@Autowired
	private IUserService userService;
 
	 //add a request handling method for creating new jobCard
	@PostMapping("/create")
	public ResponseEntity<?> createNewJobCard(@RequestBody @Valid DTOAddJobCard card)
	{
		return new ResponseEntity<>(jobService.addNewJobCardDetails(card),HttpStatus.OK);
	}
	
	//add a request handling method to get previous job card details
	@GetMapping("/getdetails")
	public ResponseEntity<?> getAllJobCardDetails()
	{
		return new ResponseEntity<>(jobService.getAllJobCardDetails(),HttpStatus.OK);
	}
	
	//add a request handling method to get all mechanics name
	@GetMapping("/mechnames")
	public ResponseEntity<?> getAllMechanicsName()
	{
		return new ResponseEntity<>(jobService.getAllMechanicsDetails(),HttpStatus.OK);
	}
	
	//add a method to check customer present or not 
	@GetMapping("/checkcustomer/{email}")
	public ResponseEntity<?> checkCustomerPresence(@PathVariable(value = "email") String custEmail)
	{
		return new ResponseEntity<>(userService.checkCustomerInDb(custEmail),HttpStatus.OK);
	}
	
}
