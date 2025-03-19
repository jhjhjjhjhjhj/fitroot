package com.example.demo.dto;

import java.util.Date;
import lombok.Data;

@Data
public class CommunityDTO {
	private int cIdx;
	private String categoryTag;
	private String userId;
	private String cTitle;
	private String cContent;
	private Date cDate;
	private String cUrl;
	private int views;
	private int likebtn;
}
