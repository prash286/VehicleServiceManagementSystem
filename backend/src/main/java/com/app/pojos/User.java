package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

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
	@Column(length = 60, unique = true)
	private String email;
	@Column(length = 20)
	private String mobileNo;
	@Column(name = "user_name", length = 40)
	private String userName;
	@Column(length = 60)
	private String password;
	@Column(name = "user_role")
	@Enumerated(EnumType.STRING)
	private Role userRole;
	private boolean isActive;
	
}
