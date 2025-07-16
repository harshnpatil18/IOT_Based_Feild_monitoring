import React, { useState } from 'react';

export function PredictionForm() {
  const [formData, setFormData] = useState({
    moisture: 50,
    ph: 7,
    temperature: 25,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock prediction logic
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Predict Suitable Crops</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Soil Moisture (%)</label>
          <input
            type="range"
            min="0"
            max="100"
            value={formData.moisture}
            onChange={(e) => setFormData(prev => ({ ...prev, moisture: +e.target.value }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-gray-500">{formData.moisture}%</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Soil pH</label>
          <input
            type="range"
            min="0"
            max="14"
            step="0.1"
            value={formData.ph}
            onChange={(e) => setFormData(prev => ({ ...prev, ph: +e.target.value }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-gray-500">{formData.ph}</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Temperature (°C)</label>
          <input
            type="range"
            min="0"
            max="50"
            value={formData.temperature}
            onChange={(e) => setFormData(prev => ({ ...prev, temperature: +e.target.value }))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-gray-500">{formData.temperature}°C</span>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          Predict Crops
        </button>
      </div>
    </form>
  );
}