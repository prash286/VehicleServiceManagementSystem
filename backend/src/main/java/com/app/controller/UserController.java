package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.DTOCreateUserRequest;
import com.app.dto.DTOPasswordChange;
import com.app.dto.DTOUpdateUserProfile;
import com.app.dto.DTOUserLoginDetails;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.service.IUserService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/user")
public class UserController {
	//add dependency
	@Autowired
	private IUserService userService;
public UserController() {
	System.out.println("in constr of "+getClass());
}

//add a request handling method for registering New user  & validate it
@PostMapping("/register")
public ResponseEntity<?> registerNewUser(@RequestBody @Valid User user)
{	

	System.out.println("in add user method");
	if(user.getUserRole()==Role.ADMIN || user.getUserRole()==Role.CUSTOMER)
	{
		user.setActive(true);
	}	
	return new ResponseEntity<>(userService.addUserDetails(user),HttpStatus.OK); 
}

//add a request handling method for validate login & getDetails
@PostMapping("/login")
public ResponseEntity<?> validateAndGetDetails(@RequestBody @Valid DTOUserLoginDetails user )
{
	return userService.validateAndGetUserDetails(user);
}


//add a request handling method to update user profile
@PutMapping("/update/{uid}")
public ResponseEntity<?> updateUserProfile(@RequestBody @Valid DTOUpdateUserProfile updateUser,@PathVariable int uid)
{
     	return new ResponseEntity<>(userService.updateUserProfile(updateUser, uid),HttpStatus.OK);
}

//add a request handling method to delete user profile
@DeleteMapping("/delete/{uid}")
public ResponseEntity<?> removeUserProfile(@PathVariable int uid)
{
    return new ResponseEntity<>(userService.removeUserProfile(uid),HttpStatus.OK);	
}

//add a method to send link to email for change password
@GetMapping("/sendemail/{email}")
public ResponseEntity<?> sendMail(@PathVariable String email)
{
	userService.sendMail(email);
	return new ResponseEntity<>("Mail Sent Successfully",HttpStatus.OK);
	
}

//add a request handling method to change password
@PostMapping("/changepass")
public String changePassword(@RequestBody @Valid DTOPasswordChange change)
{
	      String email=change.getEmail();
	      String password=change.getPassword();
       return userService.changePassword(email, password);	
}


}
