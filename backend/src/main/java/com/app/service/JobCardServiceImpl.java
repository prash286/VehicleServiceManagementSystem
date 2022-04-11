package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IInvoiceRepository;
import com.app.dao.IJobCardRepository;
import com.app.dao.IUserRepository;
import com.app.dto.DTOAddJobCard;
import com.app.pojos.Invoice;
import com.app.pojos.JobCard;
import com.app.pojos.User;

@Service
@Transactional
public class JobCardServiceImpl implements IJobCardService{
     
	//add a jobcard dependency
	@Autowired
	private IJobCardRepository jobRepo;
   //add user dependency
	@Autowired
	private IUserRepository userRepo;
	
	@Autowired
	private IInvoiceRepository invoiceRepo;

	@Override
	public String addNewJobCardDetails(DTOAddJobCard card) {	
		String mechanicName=userRepo.findMechanicNameById(card.getMechanicId());
		JobCard newCard=new JobCard(card.getCustName(), card.getCustEmail(), card.getMobileNo(), card.getDate(), 
				                        card.getVehicleModel(), card.getVehicleNo(), card.getChasisNo(), card.getServiceType(), card.getSuggestedWork(), mechanicName,false);
		jobRepo.save(newCard);
		return " Job Card added successfully";
	}

	@Override
	public List<JobCard> getAllJobCardDetails() {
	    
		return jobRepo.findAll();
	}

	@Override
	public List<User> getAllMechanicsDetails() {
		  
		return userRepo.findMechanicDetails();
	}

	@Override
	public List<JobCard> getAllJobCardsAssignedToMechanic(String mechanicName) {
		return jobRepo.getAllJobCardsAssignedToMechanic(mechanicName);
	}
	
	@Override
	public List<JobCard> getVehicleServiceStatusPending(String custEmail) {
		return jobRepo.getVehicleServiceStatusPending(custEmail);
	}

	//mechanic part
	@Override
	public String addInvoiceAndServiceStatusDone(Invoice invoice, int jobid) {
		    JobCard card=jobRepo.findById(jobid);
		    card.setActive(true);//change service status done
		    jobRepo.save(card);
		    invoice.setJobcard(card);
		    invoiceRepo.save(invoice);
		return "Invoice & Response  to the customer send successfully ";
	}
	
	
	
}
