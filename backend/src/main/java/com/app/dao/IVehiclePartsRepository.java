package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.VehicleParts;

public interface IVehiclePartsRepository extends JpaRepository<VehicleParts, Integer>{
	 
}
