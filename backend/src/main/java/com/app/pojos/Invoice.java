package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/* id int PRIMARY KEY auto_increment,customer_name,date,mobile_no,model,service_type,parts_replaced,labour_charge,qty,amount*/
/*1(job card)/parent side/non-owning side/inverse side-->1(invoice)/owning side/child side
 *  //use PK of job card as PK& FK in invoice*/ 
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Invoice extends BaseEntity {
	@Column(name = "cust_name", length = 30)
	private String custName;
	@Column(name = "mobile_no", length = 20)
	private String mobileNo;
	private LocalDate date;
	@Column(name = "vehicle_model", length = 20)
	private String vehicleModel;
	@Enumerated(EnumType.STRING)
	@Column(name = "service_type", length = 20)
	private Services serviceType;
	@Column(name = "parts_replaced", length = 60)
	private String partsReplaced;
	private int qty;
	private double labourCharge;
	private double totalAmount;
	@OneToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	@MapsId
	@JoinColumn(name="job_card_Id")
	private JobCard jobcard;
}
