package com.app.dto;

import java.time.LocalDate;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Digits;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import com.app.pojos.Services;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/* jid int PRIMARY KEY auto_increment, chasis_no,customer_name,customer_email,
 * date,mechanic_assigned,mobile_no,model,service_type,suggested_work,vehicle_no */

@NoArgsConstructor
@AllArgsConstructor
@Data
public class DTOAddJobCard {
	@NotBlank(message = "Enter customer name")
	private String custName;
	@Pattern(regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
			+ "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$", message = "Blank or Invalid Email Id : must contain '@' & '.com' ")
	private String custEmail;
	@NotEmpty(message = "Mobile no is Mandetory")
	@Length(min = 10, max = 13, message = "Mobile no must contain 10 digit")
	private String mobileNo;
	@FutureOrPresent(message = "select present or future date")
	@NotNull(message ="select Date" )
	private LocalDate date;
	@NotEmpty(message = "Enter vehicle model")
	private String vehicleModel;
	@NotEmpty(message = "Enter vehicle no")
	private String vehicleNo;
	@NotEmpty(message = "Enter chasis no")
	private String chasisNo;
	@Enumerated(EnumType.STRING)
	private Services serviceType;
	@NotEmpty(message = "Enter  work  details")
	private String suggestedWork;
	@Digits(message = "Enter mechanic name", fraction = 0, integer = 300)
	private Integer mechanicId;
}
