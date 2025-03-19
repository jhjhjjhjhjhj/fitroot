import React, { useState } from "react";
import Challengeban from "./Challengeban";
import '../Section/excSection.css';
import Exercise4 from "./Exercise4";
import Secfoot from "./Secfoot";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { Link, useNavigate } from 'react-router-dom';
import TermsModal from "../footer/TermsModal";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { Button } from "reactstrap";
const ExcSection5 = () => {

    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('terms');
    const { isLoggedIn } = useSelector((state) => state);
    const handleShow = (tab) => {
        setActiveTab(tab);
        setShowModal(true);
    };
    function handleLoginToggle() {
        navigate('/login');
    }
    const handleClose = () => setShowModal(false);

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
                    {isLoggedIn ? <Exercise4 /> : <LoginPrompt/>}
                    </div>
                </div>
                <hr className="section-divider" />
                <Secfoot />
            </div>
            <Footer handleShow={handleShow} />
            <TermsModal show={showModal} handleClose={handleClose} activeTab={activeTab} />
        </div>
    );
}

export default ExcSection5;