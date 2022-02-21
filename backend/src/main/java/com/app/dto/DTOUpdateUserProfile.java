package com.app.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class DTOUpdateUserProfile {

	@Pattern(regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
			+ "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$", message = "Blank or Invalid Email Id : must contain '@' & '.com' ")
	private String email;
	@NotEmpty(message = "Mobile no is Mandetory")
	@Length(min = 10, max = 13, message = "Mobile no must contain 10 digit")
	private String mobileNo;
	@NotEmpty(message = "UserName is Mandetory")
	private String userName;
}
