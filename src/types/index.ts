export interface SoilData {
  moisture: number;
  ph: number;
  temperature: number;
  timestamp: string;
}

export interface CropPrediction {
  cropName: string;
  confidence: number;
  suitabilityScore: number;
}

export interface Practice {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}