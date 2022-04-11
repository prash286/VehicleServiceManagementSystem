package com.app.service;

import java.util.List;

import com.app.dto.DTOAddJobCard;
import com.app.pojos.Invoice;
import com.app.pojos.JobCard;
import com.app.pojos.User;

public interface IJobCardService {
           //add a method to add job card
	public String addNewJobCardDetails(DTOAddJobCard card);
	
	//add a method get all job card details
	public List<JobCard> getAllJobCardDetails();
	
	//add a method to get all Mechanics name & id
	public List<User> getAllMechanicsDetails();
	
	//add a method to get all Assigned JOb Cards to mechanic
	public List<JobCard> getAllJobCardsAssignedToMechanic(String mechanicName); 
	
	//add a method to get vehicle service status=pending
		List<JobCard> getVehicleServiceStatusPending(String custEmail);
		
	//add a method to add invoice & change vehicle service status (isActive=true)
		String addInvoiceAndServiceStatusDone(Invoice invoice,int jobid);
}
