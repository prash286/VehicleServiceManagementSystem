package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.CustomerEnquiry;

public interface ICustomerEnquiryRepository extends JpaRepository<CustomerEnquiry, Integer>{
       
	   //add a method to get customer Enquiry status
	@Query("select e from CustomerEnquiry e join fetch e.user where e.user.id=:custId")
   List<CustomerEnquiry> getCustomerEnquiryStatusByCustomerId(@Param("custId") int customerId);
	
	//add a method to get customer enquiry object
	@Query("select e from CustomerEnquiry e join fetch e.user where e.id=:eid")
	CustomerEnquiry getCustomerEnquiryById(@Param (value="eid") int enquiryId);
	
	//add a method to get all customer enquiry
	@Query("select e from CustomerEnquiry e join fetch e.user where e.response='' ")
	List<CustomerEnquiry> getAllCutomerEnquiry();
	
	//add a method to update customer enquiry
	@Modifying
	@Query("update CustomerEnquiry e set e.response=:response where e.id=:eid")
	int UpdateCustomerEnquiry(@Param ("response") String enquiryResponse, @Param ("eid") int enquiryId);
}
