import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { SoilData } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SoilChartProps {
  data: SoilData[];
}

export function SoilChart({ data }: SoilChartProps) {
  const options = {
    responsive: true,
    animation: {
      duration: 0 // Disable animation for smoother updates
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time (5s intervals)',
          color: '#666',
          font: {
            size: 12,
            weight: 'bold'
          }
        },
        ticks: {
          maxTicksLimit: 10,
          callback: function(value: any) {
            const time = new Date(data[value].timestamp);
            return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          }
        }
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Values',
          color: '#666',
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toFixed(2);
            }
            return label;
          }
        }
      },
      title: {
        display: true,
        text: 'Soil Metrics Over Time',
        color: '#374151',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
    },
  };

  const chartData = {
    labels: data.map((_, index) => index),
    datasets: [
      {
        label: 'Moisture (%)',
        data: data.map(d => d.moisture),
        borderColor: 'rgb(59, 130, 246)',
        tension: 0.4,
      },
      {
        label: 'Temperature (°C)',
        data: data.map(d => d.temperature),
        borderColor: 'rgb(239, 68, 68)',
        tension: 0.4,
      },
      {
        label: 'pH',
        data: data.map(d => d.ph),
        borderColor: 'rgb(16, 185, 129)',
        tension: 0.4,
      },
      {
        label: 'Humidity (%)',
        data: data.map(d => d.humidity),
        borderColor: 'rgb(168, 85, 247)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Soil Metrics Over Time</h3>
      <Line options={options} data={chartData} />
    </div>
  );
}