import React, { useState } from "react";
import './excSection.css'
import Challenge from "./Challenge";
import Challengeban from "./Challengeban";
import Section2 from "./Section2";
import StrechingFade from "./StrethingFade";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import TermsModal from '../footer/TermsModal';
import { Box, Typography } from "@mui/material";
import { Button } from "reactstrap";


const ExcSection = () => {

    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('terms');
    

    const handleShow = (tab) => {
        setActiveTab(tab);
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);
    
    function handleLoginToggle() {
        navigate('/login');
    }

    const navigate =useNavigate();
    const LoginPrompt = () => (
        <Box textAlign="center">
          <Typography variant="h5" gutterBottom>
            로그인 후 확인하실 수 있습니다
          </Typography>
          <Button
            onClick={handleLoginToggle}
            variant="contained"
            sx={{
              backgroundColor: '#00BFFF' , // 버튼 배경색
              color: '#FFFFFF', // 버튼 텍스트 색
              '&:hover': {
                backgroundColor: '#1E90FF', // 버튼 호버 시 색상
              },
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 'bold', // 글씨 두껍게
              borderRadius: '8px',
              textTransform: 'none',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // 미세한 그림자 추가
              marginTop: '20px' // 텍스트와 버튼 사이의 여백
            }}
          >
            로그인하기
          </Button>
        </Box>
    );


    const { isLoggedIn } = useSelector((state) => state);
    console.log(isLoggedIn);
    return (
        <div>
            <Header />
            <div className="section">
                <Challengeban className="banner" />
                <hr className="section-divider" />
                <div className="content-container">
                    <div className="category">
                        <ul style={{ listStyleType: 'none' }}>
                            <li><Link to="/exercise">이 주의 챌린지</Link></li>
                            <hr className="category-divider" />
                            <li><Link to="/exercise2">근력향상</Link></li>
                            <hr className="category-divider" />
                            <li><Link to="/exercise3">체형교정</Link></li>
                            <hr className="category-divider" />
                            <li><Link to="/exercise4">유연성</Link></li>
                            <hr className="category-divider" />
                            <li><Link to="/exercise5">다이어트</Link></li>
                        </ul>
                    </div>

                    <div className="mainbox">
                        <h2>운동 챌린지 - 일주일</h2>
                        <hr className="section-divider" />
                        {isLoggedIn ? <Challenge /> : <LoginPrompt/> }
                    </div>
                </div>
                <hr className="section-divider" />

                <div className="banner">
                    <Section2 className="banner" />
                </div>
                <div className="banner">
                    <StrechingFade />
                </div>
            </div>
            <Footer handleShow={handleShow} />
      <TermsModal show={showModal} handleClose={handleClose} activeTab={activeTab} />
        </div>
    );
}

export default ExcSection;
