package com.app.dto;

import com.app.pojos.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class DTOAllUsersDetails {
        private String userName;
        private String mobileNo;
        private String email;
	    private Role userRole;
	    private boolean isActive;
}
