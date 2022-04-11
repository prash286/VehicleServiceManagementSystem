package com.app.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.ServiceRequest;

public interface IServiceRequestRepository extends JpaRepository<ServiceRequest, Integer>
{
	    @Query("select r from ServiceRequest r join fetch r.user where r.user.id=:custId")
         List<ServiceRequest> getServiceRequestsStatusByCustId(@Param(value="custId") int customerId);
	    
	     //add a method to get All customer service request
	    @Query("select r from ServiceRequest r join fetch r.user where r.date=NULL")
	    List<ServiceRequest> getAllServiceRequest();
	    
	    //add a method to update customer Service Request
		  @Modifying
		  @Query("update ServiceRequest a set a.date=:response where a.id=:rid") 
		  int updateServiceRequest(@Param(value="response") LocalDate serviceResponse, @Param(value="rid") int requestId);
		 
	    
		
}
