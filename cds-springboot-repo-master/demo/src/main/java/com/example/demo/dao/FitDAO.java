package com.example.demo.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.example.demo.dto.FitDTO;

import lombok.RequiredArgsConstructor;

//@Repository : DB와 관련된 작업을 하는 클래스로 스프링 컨테이너에 빈으로 등록
@Repository
@RequiredArgsConstructor //자동의존주입
public class FitDAO {
	
	public static final String Mapper = "com.example.demo.mapper.FitMapper";
	
	private final SqlSession sqlSession;
	
	public int loginup(FitDTO dto) {
		// TODO Auto-generated method stub
		return sqlSession.insert(Mapper+".loginup", dto);
	}

	public FitDTO login(FitDTO dto) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne(Mapper+".login", dto);
	}

	public FitDTO getFitIdx(int uIdx) {
		// TODO Auto-generated method stub
		return sqlSession.selectOne(Mapper+".getFitIdx", uIdx);
	}

	public int updateFit(FitDTO dto) {
		// TODO Auto-generated method stub
		return sqlSession.update(Mapper+".updateFit", dto);
	}

	public int deleteFitroot(int uIdx) {
		// TODO Auto-generated method stub
		return sqlSession.update(Mapper+".deleteFit",uIdx);
	}

	public int weightin(FitDTO dto) {
		// TODO Auto-generated method stub
		return sqlSession.update(Mapper+".weightin", dto);
	}

	public int weightip(FitDTO dto) {
		// TODO Auto-generated method stub
		return sqlSession.update(Mapper+".weightip", dto);
	}
	
	public int waterin(FitDTO dto) {
        // TODO Auto-generated method stub
        return sqlSession.update(Mapper+".waterin", dto);
    }

    public int sleep(FitDTO dto) {
        // TODO Auto-generated method stub
        return sqlSession.update(Mapper+".sleep", dto);
    }
    
    public int checkid(String id) {
        // TODO Auto-generated method stub
        return sqlSession.selectOne(Mapper+".checkid", id);
    }

}
