package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/*vid int PRIMARY KEY auto_increment,parts_name,qty_available,rate */
@Entity
@Table(name="vehicle_parts")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class VehicleParts extends BaseEntity{
	@Column(name="part_name",length=60)
	private String partName;
	private int qty;
	private double rate;
}
