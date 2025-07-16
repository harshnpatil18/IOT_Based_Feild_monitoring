import React from 'react';
import { Practice } from '../../types';

interface PracticeCardProps {
  practice: Practice;
}

export function PracticeCard({ practice }: PracticeCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={practice.imageUrl}
        alt={practice.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="text-sm font-medium text-green-600">{practice.category}</span>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{practice.title}</h3>
        <p className="mt-2 text-gray-500">{practice.description}</p>
      </div>
    </div>
  );
}