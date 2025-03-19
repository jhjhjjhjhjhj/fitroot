package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.FitDTO;
import com.example.demo.service.FitService;

import lombok.RequiredArgsConstructor;


//REST API를 처리할 수 있는 컨트롤러로 명시함
@RestController
@RequiredArgsConstructor
public class FitController {
	
	private final FitService fitService;
	
	//회원가입
	@PostMapping("/loginup")
	public Map<String, String> loginup(@RequestBody FitDTO dto) {
		//@RequestBody : HTTP 요청 객체의 Body에 저장된 JSON 객체를 UserDTO 타입으로 변환시켜서 저장해줌
		//이전의 반환타입은 String 이었음
		
		//프론트엔드로 전송되는 데이터의 형식이 JSON 형식으로 전달이 되어야 하기 때문에 Map 자료구조를 이용함
			//Map은 데이터를 저장할 때 키와 값의 쌍으로 저장하는 특징을 가짐
		//Map 자료구조를 객체로 만들어서 사용할 수 있도록 지원하는 클래스: HashMap 
		Map<String, String> result = new HashMap<String, String>();
		
		if(fitService.loginup(dto) == 1) {
			result.put("result", "OK"); //JSON : {"result":"OK"}
		}else {
			result.put("result", "FAIL"); //JSON : {"result":"FAIL"}
		}
		
		
		return result;
	}
	
	//로그인 : POST
			@PostMapping("/fitloot/login")
			public Map<String, String> login(@RequestBody FitDTO dto) {
				//@RequestBody : HTTP 요청 객체의 Body에 저장된 JSON 객체를 UserDTO 타입으로 변환시켜서 저장해줌
				//이전의 반환타입은 String 이었음
				
				//프론트엔드로 전송되는 데이터의 형식이 JSON 형식으로 전달이 되어야 하기 때문에 Map 자료구조를 이용함
					//Map은 데이터를 저장할 때 키와 값의 쌍으로 저장하는 특징을 가짐
				//Map 자료구조를 객체로 만들어서 사용할 수 있도록 지원하는 클래스: HashMap 
				Map<String, String> result = new HashMap<String, String>();
				
				FitDTO resDTO = fitService.login(dto);
				if( resDTO != null) {
					result.put("result", "OK"); //JSON : {"result":"OK"}
					result.put("uIdx", String.valueOf(resDTO.getUIdx())); //문자열로 바꿔주는 함수(String.valueOf())
					result.put("id", resDTO.getId());
					result.put("name", resDTO.getName());
					
				}else {
					result.put("result", "FAIL"); //JSON : {"result":"FAIL"}
				}
				
				return result;
			}
			
			
			@GetMapping("/fitroot/{uIdx}/getFitIdx")
			public FitDTO getFitIdx(@PathVariable("uIdx") String uIdx) {
				FitDTO dto = fitService.getFitIdx(Integer.parseInt(uIdx));
				if(dto != null) {
					System.out.println("회원정보 조회 성공");
				}else {
					System.out.println("회원정보 조회 실패");
				}
				return dto;
			}
			
			@PutMapping("/Fit/updateFit")
			public Map<String, String> updateFit(@RequestBody FitDTO dto) {
				Map<String, String> result = new HashMap<String, String>();
				
				System.out.println("dto의 uIdx:"+dto.getUIdx());
				if(fitService.updateFit(dto) == 1) {
					result.put("result", "OK");
				} else {
					result.put("result", "FAIL");
				}
				
				return result;
			}
			
			@DeleteMapping("/Fit/{uIdx}/deleteFit")
			public Map<String, String> deleteFitroot(@PathVariable("uIdx") String uIdx) {
				Map<String, String> result = new HashMap<String, String>() ;
				
				if(fitService.deleteFitroot(Integer.parseInt(uIdx)) == 1) {
					result.put("result", "OK");
				}else {
					result.put("result", "FAIL");
				}
				return result;
			}
			
			@PutMapping("/weightin")
			public Map<String, String> weightin(@RequestBody FitDTO dto) {
				Map<String, String> result = new HashMap<String, String>();
				
				if(fitService.weightin(dto) == 1) {
					FitDTO resDTO = fitService.getFitIdx(dto.getUIdx());
					result.put("result", "OK");
					
				} else {
					result.put("result", "FAIL");
				}
				
				return result;
			}
			
			@PutMapping("/weightip")
			public Map<String, String> weightip(@RequestBody FitDTO dto) {
				Map<String, String> result = new HashMap<String, String>();
				
				if(fitService.weightip(dto) == 1) {
					FitDTO resDTO = fitService.getFitIdx(dto.getUIdx());
					System.out.println(resDTO);
					result.put("result", "OK");
					
				} else {
					result.put("result", "FAIL");
				}
				
				return result;
			}
			
			
			@PutMapping("/waterin")
            public Map<String, String> waterin(@RequestBody FitDTO dto) {
                Map<String, String> result = new HashMap<String, String>();

                if(fitService.waterin(dto) == 1) {
                    FitDTO resDTO = fitService.getFitIdx(dto.getUIdx());
                    System.out.println(resDTO);
                    result.put("result", "OK");

                } else {
                    result.put("result", "FAIL");
                }

                return result;
            }


            @PutMapping("/sleep")
            public Map<String, String> sleep(@RequestBody FitDTO dto) {
                Map<String, String> result = new HashMap<String, String>();

                if(fitService.sleep(dto) == 1) {
                    FitDTO resDTO = fitService.getFitIdx(dto.getUIdx());
                    System.out.println(resDTO);
                    result.put("result", "OK");

                } else {
                    result.put("result", "FAIL");
                }

                return result;
            }
            
            @GetMapping("/fitroot/{id}/checkid")
            public int checkid(@PathVariable("id") String id) {
                int dto = fitService.checkid(id);
                System.out.print(dto);
                if(dto == 1) {
                    System.out.println("아이디 중복");
                }else {
                    System.out.println("아이디 정상 입력");
                }
                return dto;
            }
			
}
