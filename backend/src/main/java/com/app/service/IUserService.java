package com.app.service;

import org.springframework.http.ResponseEntity;

import com.app.dto.DTOUpdateUserProfile;
import com.app.dto.DTOUserLoginDetails;
import com.app.pojos.User;

public interface IUserService {
 //add a method to add userDetails
	User addUserDetails(User user);
	
//add method to to validate & get user login details
	ResponseEntity<?> validateAndGetUserDetails(DTOUserLoginDetails user);
	
 //add method to update UserProfile
	String updateUserProfile(DTOUpdateUserProfile user,int userId);
	
//add a method to remove user profile
	String removeUserProfile(int id);
	
	void sendMail(String email);
	public String changePassword(String email,String newPass);
	
}
