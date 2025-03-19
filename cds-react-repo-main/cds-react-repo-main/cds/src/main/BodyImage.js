import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import Body1 from './식단1.png';
import Body2 from './식단2.png';
import Body3 from './식단3.png';
import Body4 from './식단4.png';
import Body5 from './식단5.png';
import Body6 from './식단6.png';
import Body7 from './식단7.png';
import Body8 from './운동1.jpg';

const images = [
  { src: Body1, kcal: '341 kcal' },
  { src: Body2, kcal: '287 kcal' },
  { src: Body3, kcal: '123 kcal' },
  { src: Body4, kcal: '401 kcal' },
  { src: Body5, kcal: '304 kcal' },
  { src: Body6, kcal: '198 kcal' },
  { src: Body7, kcal: '231 kcal' },

];

const CarouselImage = styled('img')({
  width: '200px',
  borderRadius: '15px',
  margin: '0 2px',
  display: 'block'
});

const ImageLabel = styled(Box)({
  color: 'white',
  fontWeight: 'bold',
  backgroundColor: '#f4f4f4',
  padding: '3px 6px',
  borderRadius: '5px',
  fontSize: '12px',
  textAlign: 'center',
  marginTop: '5px',
});

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const CarouselContainer = styled(Box)({
  display: 'flex',
  width: 'calc(100% * 2)',
  animation: `${scrollAnimation} 20s linear infinite`,
});

const BackgroundContainer = styled(Box)({
  width: '100vw',
  height: '600px',
  backgroundImage: `url(${Body8})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  margin: 0,
  padding: 0,
  overflow: 'hidden', // 콘텐츠가 가상 요소 바깥으로 나가지 않도록 함
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // 흰색 오버레이
    backdropFilter: 'blur(5px)', // 블러 효과
    zIndex: 1, // 가상 요소를 텍스트 뒤에 배치
  },
});

const TextContainer = styled(Box)({
  position: 'relative',
  zIndex: 2, // 텍스트를 가상 요소 위에 배치
  textAlign: 'center',
  color: 'black',
  maxWidth: 400,
});

const BodyImage = () => {
  return (
    <Box>
      {/* 새로운 배경 컨테이너 */}
      <BackgroundContainer>
        <TextContainer>
          <Typography variant="h4" fontWeight="bold" sx={{ fontSize: '35px' }}>
            나에게 맞는 운동일까?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2, fontWeight: '' }}>
            자신에게 필요한 운동을 쏙쏙 골라
            맞춤형 운동을 <br /> 시작 해보세요
          </Typography>
        </TextContainer>
      </BackgroundContainer>

      {/* 기존의 식단 컨테이너 */}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 4,
          padding: 0,
          margin: 0,
          mt: '80px',
        }}
      >
        <Box sx={{ maxWidth: 400, textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" fontWeight="bold" color="text.primary">
            균형 잡힌 식단으로 먹고 있을까?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ my: 2 }}>
            칼로리부터 영양소 분석까지,
            터치 한 번으로 쉽고 간편하게 식단 관리하세요.
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'relative',
            width: '100vw',
            height: '250px',
            overflow: 'hidden',
            padding: 0,
            margin: 0,
          }}
        >
          <CarouselContainer>
            {images.map((image, index) => (
              <Box
                key={index}
                sx={{
                  width: '15%',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <CarouselImage src={image.src} alt={`식단 ${index + 1}`} />
                <ImageLabel>
                  <span>{image.kcal}</span>
                </ImageLabel>
              </Box>
            ))}
            {images.map((image, index) => (
              <Box
                key={index + images.length}
                sx={{
                  width: '14%',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                <CarouselImage src={image.src} alt={`식단 ${index + 1}`} />
                <ImageLabel>
                  <span>{image.kcal}</span>
                </ImageLabel>
              </Box>
            ))}
          </CarouselContainer>
        </Box>
      </Container>
    </Box>
  );
};

export default BodyImage;
