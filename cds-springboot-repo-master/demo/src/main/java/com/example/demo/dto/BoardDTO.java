package com.example.demo.dto;

import lombok.Data;
import java.util.Date;

@Data
public class BoardDTO {
	private int bIdx;
	private String categoryTag;
	private String userId;
	private String bTitle;
	private String bContent;
	private Date bDate;
}
