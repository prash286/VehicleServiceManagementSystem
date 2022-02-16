package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/* jid int PRIMARY KEY auto_increment, chasis_no,customer_name,customer_email,
 * date,mechanic_assigned,mobile_no,model,service_type,suggested_work,vehicle_no */
@Entity
@Table(name = "job_card")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class JobCard extends BaseEntity {
	@Column(name="cust_name",length=30)
	private String custName;
	@Column(name="cust_email",length=20)
	private String custEmail;
	@Column(name="mobile_no",length=20)
	private String mobileNo;
	private LocalDate date;
	@Column(name="vehicle_model",length=10)
	private String vehicleModel;
	@Column(name="vehicle_no",length=10)
	private String vehicleNo;
	@Column(name="chasis_no",length=20)
	private String chasisNo;
	@Enumerated(EnumType.STRING)
	@Column(name="service_type")
	private Services serviceType;
	@Column(name="suggested_work",length=60)
	private String suggestedWork;
	@Column(name="mechanic_assigned",length=20)
	private String mechanicAssigned;
}
