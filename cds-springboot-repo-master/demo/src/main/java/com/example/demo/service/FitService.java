package com.example.demo.service;

import com.example.demo.dto.FitDTO;

public interface FitService {

	int loginup(FitDTO dto);

	FitDTO login(FitDTO dto);

	FitDTO getFitIdx(int uIdx);

	int updateFit(FitDTO dto);

	int deleteFitroot(int uIdx);

	int weightin(FitDTO dto);

	int weightip(FitDTO dto);

	int waterin(FitDTO dto);

    int sleep(FitDTO dto);
    
    int checkid(String id);
}
