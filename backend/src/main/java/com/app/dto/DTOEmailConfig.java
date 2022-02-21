package com.app.dto;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@Getter
@Setter
public class DTOEmailConfig {
	@Value("${spring.mail.host}")
  private String host;
	@Value("${spring.mail.port}")
  private int port;
	@Value("${spring.mail.username}")
  private String username;
	@Value("${spring.mail.password}")
  private String password;
	
	
}
