import React from 'react';
import { SoilCard } from './components/Dashboard/SoilCard';
import { SoilChart } from './components/Dashboard/SoilChart';
import { PredictionForm } from './components/CropPrediction/PredictionForm';
import { PracticeCard } from './components/Practices/PracticeCard';
import { ContactForm } from './components/Contact/ContactForm';
import { Sprout } from 'lucide-react';
import { soilData, sustainablePractices } from './data/mockData';

function App() {
  const [data, setData] = React.useState(soilData);
  const latestData = data[0];

  React.useEffect(() => {
    const interval = setInterval(() => {
      const newData = [...data];
      const newReading = {
        moisture: 30 + Math.random() * 40,
        ph: 5.5 + Math.random() * 3,
        temperature: 18 + Math.random() * 12,
        humidity: 40 + Math.random() * 35,
        timestamp: new Date().toISOString(),
      };
      newData.unshift(newReading);
      if (newData.length > 24) {
        newData.pop();
      }
      setData(newData);
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2">
            <Sprout className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Farmio</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Dashboard Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <SoilCard
              title="Soil Moisture"
              value={latestData.moisture}
              unit="%"
              icon="moisture"
              status={latestData.moisture > 60 ? 'critical' : latestData.moisture < 30 ? 'moderate' : 'safe'}
            />
            <SoilCard
              title="Soil pH"
              value={latestData.ph}
              unit=""
              icon="ph"
              status={latestData.ph > 8 || latestData.ph < 6 ? 'critical' : latestData.ph < 6.5 || latestData.ph > 7.5 ? 'moderate' : 'safe'}
            />
            <SoilCard
              title="Temperature"
              value={latestData.temperature}
              unit="°C"
              icon="temperature"
              status={latestData.temperature > 30 ? 'critical' : latestData.temperature < 15 ? 'moderate' : 'safe'}
            />
            <SoilCard
              title="Humidity Level"
              value={latestData.humidity}
              unit="%"
              icon="humidity"
              status={latestData.humidity > 75 ? 'critical' : latestData.humidity < 40 ? 'moderate' : 'safe'}
            />
          </div>
          <SoilChart data={data} />
        </section>

        {/* Crop Prediction Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Crop Prediction</h2>
          <div className="max-w-lg">
            <PredictionForm />
          </div>
        </section>

        {/* Sustainable Practices Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sustainable Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sustainablePractices.map((practice, index) => (
              <PracticeCard key={index} practice={practice} />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactForm />
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Agricultural Support</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Emergency Helpline</h4>
                  <p className="text-gray-500">1-800-FARM-HELP</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email Support</h4>
                  <p className="text-gray-500">support@farmio.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Office Hours</h4>
                  <p className="text-gray-500">Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sprout className="w-6 h-6" />
              <span className="font-semibold">Farmio</span>
            </div>
            <p className="text-sm text-gray-400"> 2024 Farmio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;