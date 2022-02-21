package com.app.dto;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import com.app.pojos.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*uid int PRIMARY KEY auto_increment,email ,mobile_no ,name ,password ,role */
//email validation:regexPattern = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@" 
//+ "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$";
/*
 * It allows numeric values from 0 to 9
*We allow both uppercase and lowercase letters from a to z
*Hyphen “-” and dot “.” isn't allowed at the start and end of the domain-part
*No consecutive dots
*/
//Password validation:/^(?=.{8,})(?=.*[A-Za-z])(?=.*[0-9])(?=.*#).*$/
/*
*character min length must be 8 or more 
*character must contain min 1 Capital letter, min 1small letter & min 1 numeric value
*character must contain min 1 '#' symbol()
 */

@NoArgsConstructor
@AllArgsConstructor
@Data
public class DTOCreateUserRequest {

	@Pattern(regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
			+ "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$", message = "Blank or Invalid Email Id : must contain '@' & '.com' ")
	private String email;
	@NotEmpty(message = "Mobile no is Mandetory")
	@Length(min = 10, max = 13, message = "Mobile no must contain 10 digit")
	private String mobileNo;
	@NotEmpty(message = "UserName is Mandetory")
	private String userName;
	@Pattern(regexp = "^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*#).*$", message = "Blank or Invalid password: min length must be 8 character & must contain at least 1 Capital letter, 1 small letter, 1 numeric value & 1 '#' symbol")
	private String password;
	@Enumerated(EnumType.STRING)
	@NotNull(message = "Role is mandetory..")
	private Role userRole;
	private boolean isActive;
}
