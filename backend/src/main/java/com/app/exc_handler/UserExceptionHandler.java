package com.app.exc_handler;

public class UserExceptionHandler extends RuntimeException
{
    private String message;
     
    public UserExceptionHandler(String message) {
		super(message);
	}
}
