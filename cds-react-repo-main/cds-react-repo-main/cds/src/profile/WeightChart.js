import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const WeightChart = ({ weights = [] }) => {
  // 0이 아닌 값만 필터링
  const filteredWeights = weights.map(weight => (weight > 0 ? weight : null));

  // 0이 아닌 값만 필터링하여 최소값과 최대값 계산
  const validWeights = filteredWeights.filter(weight => weight !== null);
  const minWeight = validWeights.length > 0 ? Math.min(...validWeights) : 0;
  const maxWeight = validWeights.length > 0 ? Math.max(...validWeights) : 0;

  const data = {
    labels: Array.from({ length: 12 }, (_, index) => `${index + 1}월`), // 항상 1월부터 12월까지 표시
    datasets: [
      {
        label: '체중 기록',
        data: filteredWeights,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderWidth: 1,
        fill: true,
        spanGaps: true
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw} kg`
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
        
        },
        ticks: {
          autoSkip: false, // x축의 모든 라벨을 표시
        }
      },
      y: {
        title: {
          display: true,
          text: '체중 (kg)'
        },
        suggestedMin: minWeight - 1, // 최소값보다 조금 낮은 값으로 설정
        suggestedMax: maxWeight + 1, // 최대값보다 조금 높은 값으로 설정
        ticks: {
          stepSize: 1, // 입력된 값에 가까운 눈금 간격 설정
        }
      }
    }
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default WeightChart;
