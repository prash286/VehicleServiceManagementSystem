package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.validation.constraints.Digits;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

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
	@FutureOrPresent(message="Date should be present or Future")
	private LocalDate date;
	@Column(name = "vehicle_model", length = 20)
	private String vehicleModel;
	@Enumerated(EnumType.STRING)
	@Column(name = "service_type", length = 20)
	private Services serviceType;
//	@Column(name = "parts_replaced", length = 60)
	/*
	 * private String partsReplaced; private int qty;
	 */
	@ElementCollection
	 @CollectionTable(name="bill_entry",joinColumns=@JoinColumn(name="invoice_id"))
	private List<BillEntry> billEntry=new ArrayList<>();
	private double labourCharge;
	private double totalAmount;
	@OneToOne
	@JsonIgnore
	@MapsId
	@JoinColumn(name="job_card_Id")
	private JobCard jobcard;
}
