package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Role;
import com.app.pojos.User;

public interface IUserRepository extends JpaRepository<User, Integer>{
//add a method to get user details (using inherited method of JPARepo)
	Optional<User> findByEmail(String email);
	
// add a method to get list of mechanic name 
//	List<User> findByUserRole(Role role);
	@Query("select new com.app.pojos.User(userName,id) from User u where u.userRole='MECHANIC' and u.isActive=true")
	List<User>findMechanicDetails();
	
	//add a method to find mechanic name by id
	@Query("select userName from User u where u.id=:mid")
	String findMechanicNameById(@Param("mid") int mechanicId);
	
	//add a method to find user Details by id
	User findById(int id);
	
	//add a method to get list of User(Mechanic & service Advisor) for approval 
	@Query("select u from User u where u.isActive=false")
	List<User> getUsersForApproval();
	
	//add a method to approve user by updating user details
	@Modifying
	@Query("update User u set u.isActive=true where u.id=:userId")
	int acceptUserApproval(@Param ("userId") int userId);
	
	//add a method to count no of customers
	@Query("select count(u) from User u where u.userRole='CUSTOMER'")
	int countNoOfCustomers();
	//add a method to count no of Mechanics
	@Query("select count(u) from User u where u.userRole='MECHANIC'")
	int countNoOfMechanics();
	//add a method to count no of service advisor
	@Query("select count(u) from User u where u.userRole='SERVICEADVISOR'")
	int countNoOfServiceAdvisors();
	
	//add a method to find customer by email
	User findUserByEmail(String email);
}
