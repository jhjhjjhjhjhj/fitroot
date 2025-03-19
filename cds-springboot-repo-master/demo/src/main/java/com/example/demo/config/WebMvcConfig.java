package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
	
	private final long MAX_AGE_SECS = 3600;
	
	//CORS(Cross-Origin Resource Sharing)가 이루어지도록 설정하는 메소드
	//처음 리소스를 제공한 도메인이 현재 요청한 도메인과 다르더라도 요청을 허락해주는 웹 보안 방침
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		//모든 경로에 대해 
		registry.addMapping("/**")
				//Origin이 http:localhost:3000에 대해
				.allowedOrigins("http://localhost:3000")
				//GET,POST,PUT,DELETE,PATCH,OPTIONS 메소드를 허용한다.
				.allowedMethods("GET","POST","PUT","DELETE","PATCH","OPTIONS")
				.allowedHeaders("*")
				.allowCredentials(true)
				.maxAge(MAX_AGE_SECS);
	}

}
