package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*uid int PRIMARY KEY auto_increment,email ,mobile_no ,name ,password ,role */

@Entity
@Table(name = "users_tbl")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User extends BaseEntity {
	@Pattern(regexp = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
			+ "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$", message = "Blank or Invalid Email Id : must contain '@' like abc@gmail.com")
	@Column(length = 60, unique = true)
	private String email;
	@NotEmpty(message = "Mobile no is Mandetory")
	@Length(min = 10, max = 13, message = "Mobile no must contain 10 digit")
	@Column(length = 20)
	private String mobileNo;
	@NotEmpty(message = "UserName is Mandetory")
	@Column(name = "user_name", length = 40)
	private String userName;
	@Pattern(regexp = "^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*#).*$", message = "Blank or Invalid password: min length must be 8 character & must contain at least 1 Capital letter, 1 small letter, 1 numeric value & 1 '#' symbol")
	@Column(length = 60)
	private String password;
	@NotNull(message = "Role is mandetory..")
	@Column(name = "user_role")
	@Enumerated(EnumType.STRING)
	private Role userRole;
	private boolean isActive;
	
	
	public User(String userName,int id) 
	{
		super(id);
		this.userName = userName;
	}
	
	}
