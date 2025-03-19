import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Middle1 from './메인.webp'; // 이미지 파일을 가져옵니다

const messages = [
  '나 혼자는 힘들던 건강관리,',
  '핏루트로 쉽게 건강상태 확인하고',
  '나만을 위한 케어를 경험하세요'
];

const HeaderImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // 3초마다 문구 변경

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative', // 텍스트를 이미지 위에 절대 위치로 배치하기 위해 설정
        width: '100%',
        height: 800,
        overflow: 'hidden',
      }}
    >
      <img
        src={Middle1} // 이미지 소스
        alt="Header"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // 이미지가 컨테이너를 가득 채우도록 설정
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '45%', // 수직 중앙 정렬
          left: '50%', // 수평 중앙 정렬
          transform: 'translate(-50%, -50%)', // 중앙으로 정확히 맞춤
          color: 'white',
          textAlign: 'center',
          p: 2,
          backgroundColor: 'transparent', // 배경 색상 제거
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontSize: '2.5rem', // 큰 문구의 크기 조정
            lineHeight: '1.5', // 위아래 간격 조정
            fontWeight: 900, // 두껍게 설정
            mb: 2, // 문구 아래쪽 마진 추가
            border: 'none', // 텍스트에 테두리 없음
            display: 'block', // 텍스트 블록 스타일 설정
            backgroundColor: 'rgba(255, 255, 255, 0.5)', // 반투명한  배경 추가
            borderRadius: '50px', // 모서리를 둥글게 설정 (선택사항)
            padding: '5px 20px',
            color : '#1D2A64',
          }}
        >
          지금 이 순간에 필요한
          <br /> 딱 맞는 케어
        </Typography>
        <Box
          sx={{
            position: 'relative',
            height: '60px', // 문구 높이를 조정하여 잘림 방지
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              width: '100%',
              height: `${messages.length * 60}px`, // 전체 문구 높이 조정
              transition: 'transform 1s ease',
              transform: `translateY(-${currentIndex * 60}px)`, // 슬라이딩 애니메이션
              alignItems: 'center', // 가운데 정렬
              justifyContent: 'center', // 가운데 정렬
            }}
          >
            {messages.map((message, index) => (
              <Typography
                key={index}
                variant="body1"
                sx={{
                  fontSize: '1.25rem', // 작은 문구의 크기 조정
                  fontWeight: 800,
                  color: '#1D2A64',
                  textAlign: 'center',
                  lineHeight: '1.5', // 위아래 간격 조정
                  width: '400px',
                  height: '60px', // 각 문구의 높이 설정
                  display: 'flex', // 텍스트 중앙 정렬
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.5)', // 반투명한  배경 추가
                  borderRadius: '50px', // 모서리를 둥글게 설정 (선택사항)
                }}
              >
                {message}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderImage;
