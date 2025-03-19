import React from 'react';
import exerciseImage from './img/exercise.png'; // 운동 이미지 파일
import { useNavigate } from 'react-router-dom';

const ExerciseTracker = () => {
  const navigate = useNavigate();
  // 페이지 이동 함수
  const handleNavigate = () => {
    navigate('/exercise'); // 이동할 URL (실제 URL로 교체 필요)
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '180px',
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: 'px',
      boxSizing: 'border-box',
      marginTop: '20px',
      position: 'relative' // 부모 요소에 relative 포지션 추가
    }}>
      {/* 운동 챌린지 이미지 */}
      <div style={{
        position: 'relative',
        width: '150px',
        height: '150px',

      }}>
        <img
          src={exerciseImage}
          alt="exercise"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            objectFit: 'cover',

          }}
        />
        {/* 달성 상태 텍스트 */}
        <div
          style={{
            position: 'absolute',
            top: '-15px', // 이미지 상단에 위치
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '5px 10px',
            borderRadius: '12px',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '12px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            zIndex: 1,
          }}
        >
        </div>
      </div>

      {/* 이동 텍스트 */}
      <div
        onClick={handleNavigate}
        style={{
          position: 'absolute',
          bottom: '-3px',
          fontSize: '14px',
          textAlign: 'center',
          color: '#7C7C7C',
          backgroundColor: '#D3DEE9',
          borderRadius: '8px',
          padding: '5px 10px',
          whiteSpace: 'nowrap',

          textOverflow: 'ellipsis',
          cursor: 'pointer',
          width: '100%', // 부모 요소에 맞추기 위해 너비를 100%로 설정
          maxWidth: '150px', // 최대 너비 설정
          boxSizing: 'border-box', // 패딩 및 테두리를 포함한 너비 설정
        }}
      >
        운동 챌린지로 이동
      </div>
    </div>
  );
};

export default ExerciseTracker;
