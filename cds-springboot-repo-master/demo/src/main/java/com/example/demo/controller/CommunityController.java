package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.BoardDTO;
import com.example.demo.dto.CommunityDTO;
import com.example.demo.service.CommunityService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class CommunityController {

	private final CommunityService commuService;
	
	@GetMapping("/community/getCommuList")
	public List<CommunityDTO> getCommuList() {
		
		List<CommunityDTO> commuList = null;
		
		commuList = commuService.getCommuList();
		if(commuList != null) {
			System.out.println("정상적으로 조회되었습니다");
		}else {
			System.out.println("조회된 결과가 없습니다");
		}
		
		return commuList;
	}
	
	@GetMapping("/community/{select}/getCommuList")
	public List<CommunityDTO> getCommuTagList(@PathVariable("select") String select) {
			
		List<CommunityDTO> commuList = null;
		
		commuList = commuService.getCommuTagList(select);
		if(commuList != null) {
			System.out.println("정상적으로 조회되었습니다");
		}else {
			System.out.println("조회된 결과가 없습니다");
		}
		
		return commuList;
	}
	
	@DeleteMapping("/community/{cidx}/{categoryTag}/deleteCommu")
	public List<CommunityDTO> deleteC(@PathVariable("cidx") int bidx, @PathVariable("categoryTag") String tag ){
		
		List<CommunityDTO> boardList = null;
		
		if(commuService.deleteCommu(bidx) == 1) {
			boardList = getCommuTagList(tag);
		}
		
		return boardList;
	}
	
	@PutMapping("/community/updateCommu")
	public List<CommunityDTO> updateBoard(@RequestBody CommunityDTO dto){
		
		List<CommunityDTO> boardList = null;
		
		if(commuService.updateCommu(dto) == 1) {
			boardList = getCommuTagList(dto.getCategoryTag());
		}
		
		return boardList;
	}
	
	@PostMapping("/community/insertCommu")
	public List<CommunityDTO> insertCommu(@RequestBody CommunityDTO dto){
		
		List<CommunityDTO> boardList = null;
		
		if(commuService.insertCommu(dto) == 1) {
			boardList = getCommuTagList(dto.getCategoryTag());
		}
		
		return boardList;
	}
	
}
