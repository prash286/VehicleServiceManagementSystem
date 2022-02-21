package com.app.dto;

import javax.validation.constraints.Pattern;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class DTOUserLoginDetails {
	@Pattern(regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
			+ "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$", message = "Blank or Invalid Email Id : must contain '@' & '.com' ")
     private String email;
	@Pattern(regexp = "^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*#).*$", message = "Blank or Invalid password: min length must be 8 character & must contain at least 1 Capital letter, 1 small letter, 1 numeric value & 1 '#' symbol")
     private String password;
}
