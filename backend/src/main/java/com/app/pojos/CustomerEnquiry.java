package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*eid int PRIMARY KEY auto_increment,response ,cust_id ,customer_name ,description ,subject */
//(customer)(non-owning side,inverse side)1-->*m(customer_enquiry)/owning side.....Unidirection linking
@Entity
@Table(name = "customer_enquiry")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class CustomerEnquiry extends BaseEntity {
	@Column(name = "cust_name", length = 30)
	private String custName;
	@NotEmpty(message = "Subject should not be blank")
	@Column(length = 30)
	private String subject;
	@NotEmpty(message="Description should not be blank")
	@Column(length = 100)
	private String description;
	@Column(length = 100)
	private String response;
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	@JoinColumn(name = "cust_id")
	private User user;
}
