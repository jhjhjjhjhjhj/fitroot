package com.example.demo.service;

import java.util.List;
import com.example.demo.dto.BoardDTO;

public interface BoardService {

	List<BoardDTO> getBoardList(String select);

	int deleteBoard(int bidx);

	int updateBoard(BoardDTO dto);

	int insertBoard(BoardDTO dto);


}
