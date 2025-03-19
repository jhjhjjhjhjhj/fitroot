import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UseButton = () => {

  const { isLoggedIn } = useSelector((state) => state);

  const navigate = useNavigate();
  // 버튼 클릭 시 실행할 함수

  const handleClick = () => {
    // 여기에 버튼 클릭 시 수행할 작업을 추가할 수 있습니다
    isLoggedIn ? 
    navigate('/profile') :
    navigate('/join')
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 3,
        bgcolor: 'transparent', // 배경 색상 제거
        borderRadius: '0', // 테두리 둥글게 설정 제거
        boxShadow: 'none', // 그림자 제거
        width: '80%', // 너비 조정
        maxWidth: '500px', // 최대 너비 설정
        mx: 'auto', // 가운데 정렬
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mt: '100px',
          mb: 2, // 문구 아래쪽 마진 추가
          fontSize: '1.25rem',
          color: '#333',
        }}
      >
        건강한 라이프스타일을 찾고싶다면?
      </Typography>
      <Button
        variant="contained"
        sx={{
          px: 4, // 좌우 패딩
          py: 2, // 상하 패딩
          fontSize: '1rem',
          borderRadius: '8px',
          backgroundColor: '#2c3950', // 버튼 배경색
          color: 'white', // 버튼 텍스트 색상
          '&:hover': {
            backgroundColor: '#2c3950', // 버튼 배경색 (hover 상태에도 동일)
          },
          '&:focus': {
            outline: 'none', // 포커스 상태에서 테두리 제거
          },
        }}
        onClick={handleClick}
      >
        지금 시작하기
      </Button>
    </Box>
  );
};

export default UseButton;
