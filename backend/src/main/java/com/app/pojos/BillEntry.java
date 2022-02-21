package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Embeddable
public class BillEntry {
	@Column(name="parts_replaced", length=60)
    private String partsReplaced;
	private int qty;
	private double rate;
}
