package com.app.pojos;

import java.time.LocalDate;

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

/*sid int PRIMARY KEY auto_increment,cust_id,customer_name,date date,mobile_no,model,vehicle_no,*/
//(customer)/non-owning side/inverse side 1-->*m(service req)/owning side.....Uni-Dir linking
@Entity
@Table(name = "service_request")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ServiceRequest extends BaseEntity {
	@Column(name = "cust_name", length = 30)
	private String custName;
	@Column(name = "mobile_no", length = 20)
	@NotEmpty(message = "Mobile no should not be blank")
	private String mobileNo;
	@NotEmpty(message = "Vehicle model should not be blank")
	@Column(name = "vehicle_model", length = 20)
	private String vehicleModel;
	@NotEmpty(message = "Vehicle no should not be blank")
	@Column(name = "vehicle_no", length = 20)
	private String vehicleNo;
	private LocalDate date;
	@ManyToOne(fetch = FetchType.LAZY)
	@JsonIgnore
	@JoinColumn(name = "cust_id")
	private User user;
}
