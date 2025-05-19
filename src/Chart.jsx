
import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function ChartComponent({ executionPoint }) {
  const labels = Array.from({ length: 30 }, (_, i) => `T-${30 - i}m`);
  const dataPoints = [
    30, 29.5, 28.8, 29, 28.6, 27.9, 27.5, 26.8, 25.5, 24.9,
    24.6, 25.1, 25.8, 26.3, 26.9, 27.5, 27.8, 28.2, 28.5, 29,
    29.2, 29.6, 30.1, 30.5, 30.8, 31, 31.3, 31.7, 32.1, 32.5
  ];

  const executionIndex = executionPoint !== null ? executionPoint : null;

  const chartData = {
    labels,
    datasets: [
      {
        label: 'SOL Price ($)',
        data: dataPoints,
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.2)',
        tension: 0.3,
        pointRadius: (ctx) => ctx.dataIndex === executionIndex ? 6 : 3,
        pointBackgroundColor: (ctx) => ctx.dataIndex === executionIndex ? 'red' : '#8b5cf6'
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const value = ctx.raw;
            return ctx.dataIndex === executionIndex
              ? `Buy Triggered at $${value}`
              : `Price: $${value}`;
          }
        }
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#aaa'
        },
        grid: {
          color: 'rgba(255,255,255,0.05)'
        }
      },
      y: {
        ticks: {
          color: '#aaa'
        },
        grid: {
          color: 'rgba(255,255,255,0.05)'
        }
      }
    }
  };

  return (
    <div className="bg-black/30 p-6 rounded-xl shadow-xl mt-10">
      <h3 className="text-xl font-bold mb-4">Simulated SOL Price Chart</h3>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}
