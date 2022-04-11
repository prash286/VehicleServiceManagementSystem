package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IUserRepository;
import com.app.dto.DTOAllUsersDetails;
import com.app.dto.DTOErrorResponse;
import com.app.dto.DTOResponseLoginDetails;
import com.app.dto.DTOUpdateUserProfile;
import com.app.dto.DTOUserLoginDetails;
import com.app.exc_handler.UserExceptionHandler;
import com.app.pojos.Role;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {
	
	// add dependency
	@Autowired
	private IUserRepository userRepo;
	@Autowired
	private JavaMailSender mailSend;

	//createNewUser
	@Override
	public String addUserDetails(User user) {
		 User user1=userRepo.findUserByEmail(user.getEmail());
		 if(user1!=null) {
			 return "User already registered with this email id, Try diffrent one";
		 }
		 else {
		 userRepo.save(user);
		 return "Your registration has been done successfully";
		 }
	}

	//get user details
	@Override
	public ResponseEntity<?> validateAndGetUserDetails(DTOUserLoginDetails user) {
		User persistantUser=userRepo.findByEmail(user.getEmail()).orElseThrow(()->new UserExceptionHandler("User Not Found: Invalid emailId"));
		if(persistantUser.getPassword().equals(user.getPassword()))
		{
			//user is valid
			DTOResponseLoginDetails response=new DTOResponseLoginDetails();
			response.setId(persistantUser.getId());
			response.setUserName(persistantUser.getUserName());
			response.setEmail(persistantUser.getEmail());
			response.setMobileNo(persistantUser.getMobileNo());
			response.setUserRole(persistantUser.getUserRole());
			response.setActive(persistantUser.isActive());
			System.out.println(response);
			return new ResponseEntity<>(response,HttpStatus.OK);
		}
	
		else
			//user is invalid
			return new ResponseEntity<>(new DTOErrorResponse("Invalid Password"),HttpStatus.UNAUTHORIZED);	
	}
	
	
	@Override
	public String updateUserProfile(DTOUpdateUserProfile transientUser,int userId) {
		   User persistentUser=userRepo.findById(userId);
		   persistentUser.setEmail(transientUser.getEmail());
		   persistentUser.setMobileNo(transientUser.getMobileNo());
		   persistentUser.setUserName(transientUser.getUserName());
		   userRepo.save(persistentUser);
		return "Your profile updated successfully..!!";
	}
	
	
	@Override
	public String removeUserProfile(int userId) {
		User user=userRepo.findById(userId);
		userRepo.delete(user);
		return "User profile deleted successfully..!!";
	}
	
	
	@Override
	public List<User> getAllUserWaitForApproval() {
		
		return userRepo.getUsersForApproval();
	}
	
	
	@Override
	public String approveUser(int userId) {
		userRepo.acceptUserApproval(userId);
		return "User has been Approved Successfully..";
	}
	
	@Override
	public int countNoOfCustomers() {
		return userRepo.countNoOfCustomers();
	}

	@Override
	public int countNoOfMechanics() {
		return userRepo.countNoOfMechanics();
	}
	
	@Override
	public int countNoOfServiseAdvisors() {
		return userRepo.countNoOfServiceAdvisors();
	}

	@Override
	public List<DTOAllUsersDetails> getAllUsersDetails() {
		DTOAllUsersDetails dtoUsers;
		List<DTOAllUsersDetails>list=new ArrayList<>();
		List<User>users=userRepo.findAll();
		
		for(int i=0;i<users.size();i++) {
			dtoUsers=new DTOAllUsersDetails();
			dtoUsers.setUserName(users.get(i).getUserName());
			dtoUsers.setEmail(users.get(i).getEmail());
			dtoUsers.setMobileNo(users.get(i).getMobileNo());
			dtoUsers.setUserRole(users.get(i).getUserRole());
			dtoUsers.setActive(users.get(i).isActive());
			list.add(dtoUsers);
		}
		return list;
	}

	
	@Override
	public boolean checkCustomerInDb(String email) {
		 User user=userRepo.findUserByEmail(email);
		 if(user!=null)
			 return true;
		return false;
	}
	
	@Override
	public void sendMail(String email) {
		User user=userRepo.findByEmail(email).orElseThrow(()->new UserExceptionHandler("user not found"));
		MimeMessage msg = mailSend.createMimeMessage();
		try {
			MimeMessageHelper helper = new MimeMessageHelper(msg, true);
			helper.setTo(email);
			helper.setSubject("Click on the link for Password Change ");
			helper.setText("<h1>http://localhost:3000/change/"+email+"</h1>", true);
			 mailSend.send(msg);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Override
	public String changePassword(String email, String newPass) {
//		System.out.println(email);
User user=userRepo.findByEmail(email).orElseThrow(()->new RuntimeException("user not found"));
	user.setPassword(newPass);
//System.out.println(user);
		return "password changed succssfully";
	}

	

	
	

}
