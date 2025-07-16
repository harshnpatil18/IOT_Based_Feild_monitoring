import React from 'react';
import { Droplets, Thermometer, TestTubes, Cloudy } from 'lucide-react';

interface SoilCardProps {
  title: string;
  value: number;
  unit: string;
  icon: 'moisture' | 'temperature' | 'ph' | 'humidity';
  status: 'safe' | 'moderate' | 'critical';
}

const icons = {
  moisture: Droplets,
  temperature: Thermometer,
  ph: TestTubes,
  humidity: Cloudy,
};

const statusColors = {
  safe: 'bg-green-100 text-green-800',
  moderate: 'bg-yellow-100 text-yellow-800',
  critical: 'bg-red-100 text-red-800',
};

export function SoilCard({ title, value, unit, icon, status }: SoilCardProps) {
  const Icon = icons[icon];
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <Icon className="w-6 h-6 text-gray-500" />
      </div>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold">{value.toFixed(2)}</span>
        <span className="text-gray-500 mb-1">{unit}</span>
      </div>
      <div className={`mt-4 px-3 py-1 rounded-full text-sm inline-block ${statusColors[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>
    </div>
  );
}