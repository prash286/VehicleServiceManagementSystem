package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.JobCard;

public interface IJobCardRepository extends JpaRepository<JobCard, Integer>{
	
	//add a method to find all assigned job card to mechanic
	@Query("select j from JobCard j where j.mechanicAssigned=:mechName order by date desc" )
	List<JobCard> getAllJobCardsAssignedToMechanic(@Param("mechName") String mechanicName);
     
	//add a method to find job card whose status(isActive=false) is pending
	@Query("select j from JobCard j where j.custEmail=:custEmail")
	List<JobCard> getVehicleServiceStatusPending(@Param(value = "custEmail") String Email);
	
	//add a method to find job card by id
	JobCard findById(int jobId);
	
}
