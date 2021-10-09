package com.musix;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.musix.jwtfilter.JwtFilter;

@SpringBootApplication
public class UserApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(UserApplication.class, args);
	}

}
