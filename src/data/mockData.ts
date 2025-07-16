import { SoilData, Practice } from '../types';

export const soilData: SoilData[] = Array.from({ length: 24 }, (_, i) => ({
  moisture: 30 + Math.random() * 40,
  ph: 5.5 + Math.random() * 3,
  temperature: 18 + Math.random() * 12,
  humidity: 40 + Math.random() * 35, // Typical greenhouse humidity ranges from 40% to 75%
  timestamp: new Date(Date.now() - i * 3600000).toISOString(),
}));

export const sustainablePractices: Practice[] = [
  {
    title: 'Crop Rotation',
    description: 'Rotate crops to maintain soil health and prevent pest buildup.',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    category: 'Soil Health',
  },
  {
    title: 'Water Conservation',
    description: 'Implement drip irrigation and rainwater harvesting techniques.',
    imageUrl: 'https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=80',
    category: 'Water Management',
  },
  {
    title: 'Natural Pest Control',
    description: 'Use companion planting and beneficial insects for pest management.',
    imageUrl: 'https://images.unsplash.com/photo-1587165282385-fe9bbf5eb1a0?auto=format&fit=crop&w=800&q=80',
    category: 'Pest Management',
  },
];