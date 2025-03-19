import React, { useState, useEffect, useCallback } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { useSelector } from 'react-redux';
import { getFit, waterin } from '../join/ApiService';
import waterImage from './img/water.png';
import checkImage from './img/check.png';
import IconButton from '@mui/material/IconButton';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const WaterTracker = () => {
  const { uIdx } = useSelector((state) => state);
  const [consumed, setConsumed] = useState(0); // 초기 섭취량 설정
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [error, setError] = useState(null); // 에러 상태 추가
  const [saving, setSaving] = useState(false); // 저장 중 상태 추가
  const goal = 2000; // 목표량 설정

  // 데이터를 불러오는 함수
  const fetchWaterData = useCallback(async () => {
    try {
      setLoading(true);
      const resDTO = await getFit(uIdx);
      setConsumed(resDTO.water ?? 0); // water 값이 null일 경우 0으로 설정
    } catch (error) {
      console.error('Error fetching water data:', error);
      setError('Failed to load water data.');
    } finally {
      setLoading(false);
    }
  }, [uIdx]);

  useEffect(() => {
    fetchWaterData();
  }, [fetchWaterData]);

  // 데이터 저장 함수
  const handleSaveWaterData = async (newConsumed) => {
    setSaving(true);
    try {
      const response = await waterin({ uIdx, water: newConsumed });
      if (response.result === 'OK') {
        console.log('Water data saved successfully.');
      } else {
        console.error('Failed to save water data.');
      }
    } catch (error) {
      console.error('Error saving water data:', error);
    } finally {
      setSaving(false);
    }
  };

  // + 아이콘 클릭 시 데이터 처리
  const handleAddWater = async () => {
    const newConsumed = consumed + 250;
    setConsumed(newConsumed); // UI 업데이트

    // 데이터 저장 처리
    await handleSaveWaterData(newConsumed);
  };

  const data = {
    datasets: [
      {
        data: [consumed, Math.max(goal - consumed, 0)],
        backgroundColor: ['#90ACC7', '#e0e0e0'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      title: { display: false },
      datalabels: { display: false },
    },
    maintainAspectRatio: false,
    responsive: true,
    elements: { arc: { borderWidth: 0 } },
    cutout: '80%',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '200px', backgroundColor: 'white', borderRadius: '20px', padding: '10px' }}>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <>
          <div style={{ position: 'relative', width: '150px', height: '150px', marginRight: '20px' }}>
            <Doughnut data={data} options={options} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
            <img
              src={waterImage}
              alt="water"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '65px',
                height: 'auto',
                opacity: '0.4',
                zIndex: 1,
              }}
            />
            {consumed >= goal && (
              <img
                src={checkImage}
                alt="check"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90px',
                  height: 'auto',
                  opacity: '0.6',
                  zIndex: 2,
                }}
              />
            )}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', position: 'absolute', bottom: '-25px' }}>
              <div style={{
                fontSize: '16px',
                textAlign: 'center',
                color: '#333',
                backgroundColor: '#D3DEE9',
                borderRadius: '8px',
                padding: '0px 15px',
                whiteSpace: 'nowrap',
              }}>
                {consumed}ml/{goal}ml
              </div>
            </div>
            <div style={{ position: 'absolute', right: '-30px', bottom: '-29px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: '#333' }}>+250ml</span>
              <IconButton onClick={handleAddWater} style={{ padding: '0px' }} disabled={saving}>
                <ControlPointIcon style={{ fontSize: '30px', color: '#90ACC7' }} />
              </IconButton>
              {saving && <div style={{ marginTop: '5px', color: '#333' }}>Saving...</div>}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WaterTracker;
