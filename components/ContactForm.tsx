'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    firmType: 'Other',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aquí conectaremos a n8n después
    console.log('Form submitted:', formData);
    alert('Form submitted! (Will connect to n8n next)');
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready for Tax Season 2025?</h2>
          <p className="text-gray-600 text-lg">
            Our bilingual AI handles your call flow from January to April, qualifies new clients,
            and organizes your schedule automatically
          </p>
        </div>

        {/* Security Badge */}
        <div className="bg-teal-50 border-2 border-teal-500 rounded-lg p-4 mb-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="text-2xl">🔒</span>
            <div>
              <div className="font-semibold text-teal-800">AES-256 Encrypted Data Handling</div>
              <div className="text-sm text-teal-600">Privacy First Architecture</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {/* Firm Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Firm Type</label>
              <select
                value={formData.firmType}
                onChange={(e) => setFormData({...formData, firmType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option>Other</option>
                <option>Solo Practitioner</option>
                <option>Small Firm (2-10)</option>
                <option>Medium Firm (11-50)</option>
                <option>Large Firm (50+)</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tell us about your tax season challenges
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Tell us about your tax season challenges"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition-colors"
          >
            Get Custom Quote
          </button>
        </form>
      </div>
    </section>
  );
}