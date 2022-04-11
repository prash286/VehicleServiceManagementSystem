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

import com.app.dao.IVehiclePartsRepository;
import com.app.pojos.Invoice;
import com.app.service.IJobCardService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/mechanics")
public class MechanicController {
          
	@Autowired
	private IJobCardService jobService;
	@Autowired
	private IVehiclePartsRepository vehicleRepo;
	
	//add a request handling method to get all job cards assigned to specified mechanic
	@GetMapping("/{mechname}")
	public ResponseEntity<?> getAllAssignedJobCards(@PathVariable String mechname)
	{
		return new ResponseEntity<>(jobService.getAllJobCardsAssignedToMechanic(mechname),HttpStatus.OK);
	}
	
	//add a request handling method to get all available parts
	@GetMapping("/parts")
	public ResponseEntity<?> getAllAvailabeVehicleParts()
	{
		return new ResponseEntity<>(vehicleRepo.findAll(),HttpStatus.OK);
	}
	
	//add a request handling method to add invoice & make vehicle service status done(isAcvtive=true)
	@PostMapping("/invoicesubmit/{jobid}")
	public ResponseEntity<?>addInvoiceAndChangeServiceStatus(@RequestBody @Valid Invoice invoice,@PathVariable int jobid)
	{
		return new ResponseEntity<>(jobService.addInvoiceAndServiceStatusDone(invoice, jobid),HttpStatus.OK);
	}
}
