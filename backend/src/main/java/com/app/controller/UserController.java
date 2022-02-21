package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
public ResponseEntity<?> registerNewUser(@RequestBody @Valid DTOCreateUserRequest user)
{	
	User userPojo= new User(user.getEmail(), user.getMobileNo(), user.getUserName(), user.getPassword(), user.getUserRole(),user.isActive());
	System.out.println("in add user method");
	if(userPojo.getUserRole()==Role.ADMIN || userPojo.getUserRole()==Role.CUSTOMER)
	{
		userPojo.setActive(true);
	}	
	return new ResponseEntity<>(userService.addUserDetails(userPojo),HttpStatus.OK); 
}

//add a request handling method for validate login & getDetails
@PostMapping("/login")
public ResponseEntity<?> validateAndGetDetails(@RequestBody @Valid DTOUserLoginDetails user )
{
	return userService.validateAndGetUserDetails(user);
}


//add a request handling method to update user profile
@PostMapping("/update/{uid}")
public ResponseEntity<?> updateUserProfile(@RequestBody @Valid DTOUpdateUserProfile updateUser,@PathVariable int uid)
{
     	return new ResponseEntity<>(userService.updateUserProfile(updateUser, uid),HttpStatus.OK);
}

//add a request handling method to delete user profile
@GetMapping("/delete/{uid}")
public ResponseEntity<?> removeUserProfile(@PathVariable int uid)
{
    return new ResponseEntity<>(userService.removeUserProfile(uid),HttpStatus.OK);	
}













@GetMapping("/sendmail")
public String sendMail(@RequestParam String email)
{
	userService.sendMail(email);
	return "Mail Sent Succesffuly";
	
}
@PostMapping("/change")
public String changePassword(@RequestBody @Valid DTOPasswordChange change)
{
	      String email=change.getEmail();
	      String password=change.getPassword();
       return userService.changePassword(email, password);	
}


}
