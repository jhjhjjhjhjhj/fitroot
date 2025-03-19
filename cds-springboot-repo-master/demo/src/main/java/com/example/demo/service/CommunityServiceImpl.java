package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.dao.CommunityDAO;
import com.example.demo.dto.CommunityDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommunityServiceImpl implements CommunityService {
	
	private final CommunityDAO dao;

	@Override
	public List<CommunityDTO> getCommuList() {
		return dao.getCommuList();
	}

	@Override
	public List<CommunityDTO> getCommuTagList(String select) {
		return dao.getCommuTagList(select);
	}

	@Override
	public int deleteCommu(int bidx) {
		return dao.deleteCommu(bidx);
	}

	@Override
	public int updateCommu(CommunityDTO dto) {
		return dao.updateCommu(dto);
	}

	@Override
	public int insertCommu(CommunityDTO dto) {
		return dao.insertCommu(dto);
	}

}
