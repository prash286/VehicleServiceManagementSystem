package com.app.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class DTOErrorResponse {
private String message;
private LocalDateTime date=LocalDateTime.now();

 public DTOErrorResponse(String message){
	 this.message=message;
 }
}
