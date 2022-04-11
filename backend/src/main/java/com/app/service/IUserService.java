package com.app.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.app.dto.DTOAllUsersDetails;
import com.app.dto.DTOUpdateUserProfile;
import com.app.dto.DTOUserLoginDetails;
import com.app.pojos.User;

public interface IUserService {
 //add a method to add userDetails
	String addUserDetails(User user);
	
//add method to to validate & get user login details
	ResponseEntity<?> validateAndGetUserDetails(DTOUserLoginDetails user);
	
 //add method to update UserProfile
	String updateUserProfile(DTOUpdateUserProfile user,int userId);
	
//add a method to remove user profile
	String removeUserProfile(int id);
	
	//add a method to get list of users (mechanic & service advisor) for getting approval from admin
	List<User> getAllUserWaitForApproval();
	
	//add a method to approve user (Mechanic or servise advisor)
	String approveUser(int userId);
	
	//add a method to get all no of customers
	int countNoOfCustomers();
	//add a method to get all no of Mechanics
	int countNoOfMechanics();
	//add a method to get all no of service advisors
	int countNoOfServiseAdvisors();
	
	//add a method to get all users Details
	List<DTOAllUsersDetails>getAllUsersDetails();
	
	//add a method to check whether Customer present or not in Db by email
	boolean checkCustomerInDb(String email);
	
	
	
	void sendMail(String email);
	public String changePassword(String email,String newPass);
	
}
