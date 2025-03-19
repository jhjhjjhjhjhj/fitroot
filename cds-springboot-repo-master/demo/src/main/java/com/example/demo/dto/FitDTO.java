package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class FitDTO {

    @JsonProperty("uIdx")
    private int uIdx;            //회원번호(시퀀스를 이용)
    private String name;
    private String id;
    private String pw;
    private String gender;
    private String tel;
    private String birthday;
    private String status;
    private int january;
    private int february;
    private int march;
    private int april;
    private int may;
    private int june;
    private int july;
    private int august;
    private int september;
    private int october;
    private int november;
    private int december;
    private int age;
    private int height;
    private int finweight;
    private int water;
    private String startsleep;
    private String endsleep;
    private String sleepcheck;
}