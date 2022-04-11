package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Embeddable
public class BillEntry {
	@NotEmpty(message = "select part")
	@Column(name="parts_replaced", length=60)
    private String partsReplaced;
	@NotEmpty(message = "Enter quantity")
	private int qty;
	private double rate;
}
