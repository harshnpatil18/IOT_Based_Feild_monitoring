import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Contact Us</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </div>
    </form>
  );
}