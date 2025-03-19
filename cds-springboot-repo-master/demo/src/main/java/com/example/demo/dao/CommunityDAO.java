package com.example.demo.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.CommunityDTO;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class CommunityDAO {
	
	public static final String Mapper = "com.example.demo.mapper.CommunityMapper";
	private final SqlSession sqlSession;

	public List<CommunityDTO> getCommuList() {
		return sqlSession.selectList(Mapper+".getCommuList");
	}

	public List<CommunityDTO> getCommuTagList(String select) {
		return sqlSession.selectList(Mapper+".getCommuTagList", select);
	}

	public int deleteCommu(int bidx) {
		return sqlSession.delete(Mapper+".deleteCommu", bidx);
	}

	public int updateCommu(CommunityDTO dto) {
		return sqlSession.update(Mapper+".updateCommu", dto);
	}

	public int insertCommu(CommunityDTO dto) {
		return sqlSession.insert(Mapper+".insertCommu", dto);
	}

}
