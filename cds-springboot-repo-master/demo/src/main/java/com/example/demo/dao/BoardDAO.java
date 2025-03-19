package com.example.demo.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.BoardDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class BoardDAO {
	
	public static final String Mapper = "com.example.demo.mapper.BoardMapper";
	private final SqlSession sqlSession;

	public List<BoardDTO> getBoardList(String select) {
		return sqlSession.selectList(Mapper+".getBoardList", select);
	}

	public int deleteBoard(int bidx) {
		return sqlSession.delete(Mapper+".deleteBoard", bidx);
	}

	public int updateBoard(BoardDTO dto) {
		return sqlSession.update(Mapper+".updateBoard", dto);
	}

	public int insertBoard(BoardDTO dto) {
		return sqlSession.insert(Mapper+".insertBoard", dto);
	}

}
