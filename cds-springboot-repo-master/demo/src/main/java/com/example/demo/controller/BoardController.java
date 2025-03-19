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
import com.example.demo.service.BoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class BoardController {
	
	private final BoardService boardService;
	
	@GetMapping("/board/{select}/getBoardList")
	public List<BoardDTO> getBoardList(@PathVariable("select") String select){
		
		List<BoardDTO> boardList = null;
		
		boardList = boardService.getBoardList(select);
		if(boardList != null) {
			System.out.println("정상적으로 조회되었습니다");
		}else {
			System.out.println("조회된 결과가 없습니다");
		}
		
		return boardList;
	}
	
	@DeleteMapping("/board/{bidx}/{categoryTag}/deleteBoard")
	public List<BoardDTO> deleteBoard(@PathVariable("bidx") int bidx, @PathVariable("categoryTag") String tag ){
		
		List<BoardDTO> boardList = null;
		
		if(boardService.deleteBoard(bidx) == 1) {
			boardList = getBoardList(tag);
		}
		
		return boardList;
	}
	
	@PutMapping("/board/updateBoard")
	public List<BoardDTO> updateBoard(@RequestBody BoardDTO dto){
		
		List<BoardDTO> boardList = null;
		
		if(boardService.updateBoard(dto) == 1) {
			boardList = getBoardList(dto.getCategoryTag());
		}
		
		return boardList;
	}
	
	@PostMapping("/board/insertBoard")
	public List<BoardDTO> insertBoard(@RequestBody BoardDTO dto){
		
		List<BoardDTO> boardList = null;
		
		if(boardService.insertBoard(dto) == 1) {
			boardList = getBoardList(dto.getCategoryTag());
		}
		
		return boardList;
	}
	
	
}
