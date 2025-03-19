package com.example.demo.service;

import java.util.List;
import com.example.demo.dto.CommunityDTO;

public interface CommunityService {

	List<CommunityDTO> getCommuList();

	List<CommunityDTO> getCommuTagList(String select);

	int deleteCommu(int bidx);

	int updateCommu(CommunityDTO dto);

	int insertCommu(CommunityDTO dto);
	
}
