package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.dao.FitDAO;
import com.example.demo.dto.FitDTO;

import lombok.RequiredArgsConstructor;

//클래스를 스프링의 빈으로 등록하기 : 서비스클래스 - @Service
//빈(bean) : 스프링 컨테이너에 등록 및 관리되는 자바 객체
@Service
@RequiredArgsConstructor
public class FitServiceImpl implements FitService {
	
	private final FitDAO dao;
	
	@Override
	public int loginup(FitDTO dto) {
		// TODO Auto-generated method stub
		return dao.loginup(dto);
	}

	@Override
	public FitDTO login(FitDTO dto) {
		// TODO Auto-generated method stub
		return dao.login(dto);
	}

	@Override
	public FitDTO getFitIdx(int uIdx) {
		// TODO Auto-generated method stub
		return dao.getFitIdx(uIdx);
	}

	@Override
	public int updateFit(FitDTO dto) {
		// TODO Auto-generated method stub
		return dao.updateFit(dto);
	}

	@Override
	public int deleteFitroot(int uIdx) {
		// TODO Auto-generated method stub
		return dao.deleteFitroot(uIdx);
	}

	@Override
	public int weightin(FitDTO dto) {
		// TODO Auto-generated method stub
		return dao.weightin(dto);
	}

	@Override
	public int weightip(FitDTO dto) {
		// TODO Auto-generated method stub
		return dao.weightip(dto);
	}

	@Override
    public int waterin(FitDTO dto) {
        // TODO Auto-generated method stub
        return dao.waterin(dto);
    }

    @Override
    public int sleep(FitDTO dto) {
        // TODO Auto-generated method stub
        return dao.sleep(dto);
    }
    
    @Override
    public int checkid(String id) {
        // TODO Auto-generated method stub
        return dao.checkid(id);
    }
}
