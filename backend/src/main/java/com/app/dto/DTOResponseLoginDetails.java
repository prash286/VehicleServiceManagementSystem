package com.app.dto;

import com.app.pojos.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class DTOResponseLoginDetails {
     
	private int id;
	private String userName;
	private String email;
	private Role userRole;
	private String mobileNo;
	private boolean isActive;
}
