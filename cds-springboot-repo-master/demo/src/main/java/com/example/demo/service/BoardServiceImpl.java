package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dao.BoardDAO;
import com.example.demo.dto.BoardDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {
	
	private final BoardDAO dao;

	@Override
	public List<BoardDTO> getBoardList(String select) {
		return dao.getBoardList(select);
	}

	@Override
	public int deleteBoard(int bidx) {
		return dao.deleteBoard(bidx);
	}

	@Override
	public int updateBoard(BoardDTO dto) {
		return dao.updateBoard(dto);
	}

	@Override
	public int insertBoard(BoardDTO dto) {
		return dao.insertBoard(dto);
	}


}
