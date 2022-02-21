package com.app.exc_handler;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.dto.DTOErrorResponse;

@ControllerAdvice //to handle centralized exception
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler{
     //for validation
	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		// TODO Auto-generated method stub
		//send detailed err message regarding validation failures
		StringBuilder sb=new StringBuilder("Validation error: ");
		ex.getBindingResult().getFieldErrors().forEach(fieldErr->sb.append(fieldErr.getDefaultMessage()));
		System.out.println(sb);
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new DTOErrorResponse(sb.toString()));
	}
   
	@ExceptionHandler(UserExceptionHandler.class)
	public ResponseEntity<?> handleUserExceptionHandler(UserExceptionHandler e)
	{
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new DTOErrorResponse(e.getMessage()));
	}
}
