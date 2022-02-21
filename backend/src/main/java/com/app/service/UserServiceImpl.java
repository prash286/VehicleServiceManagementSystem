package com.app.service;

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
import com.app.dto.DTOUpdateUserProfile;
import com.app.dto.DTOUserLoginDetails;
import com.app.exc_handler.UserExceptionHandler;
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
	public User addUserDetails(User user) {
		return userRepo.save(user);
	}

	//get user details
	@Override
	public ResponseEntity<?> validateAndGetUserDetails(DTOUserLoginDetails user) {
		User persistantUser=userRepo.findByEmail(user.getEmail()).orElseThrow(()->new UserExceptionHandler("User Not Found: Invalid emailId"));
		if(persistantUser.getPassword().equals(user.getPassword()))
	//user is valid
		return new ResponseEntity<>(persistantUser,HttpStatus.OK);
		else
			//user is invalid
			return new ResponseEntity<>("Invalid Password",HttpStatus.BAD_REQUEST);	
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
	public void sendMail(String email) {
//		User user=userRepo.findByEmail(email).orElseThrow(()->new RuntimeException("user not found"));
		MimeMessage msg = mailSend.createMimeMessage();
		try {
			MimeMessageHelper helper = new MimeMessageHelper(msg, true);
			helper.setTo(email);
			helper.setSubject("Click on the link for Password Change ");
			helper.setText("<h1>http://localhost:9090/user/change</h1>", true);
			 mailSend.send(msg);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}


	@Override
	public String changePassword(String email, String newPass) {
		System.out.println(email);
User user=userRepo.findByEmail(email).orElseThrow(()->new RuntimeException("user not found"));
	user.setPassword(newPass);
System.out.println(user);
		return "pass changed succssfully";
	}

	

	
	

}
