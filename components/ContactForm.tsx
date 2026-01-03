'use client';

import { useState } from 'react';

export default function ContactForm() {
  // Estados para manejar los datos y el estado del envío
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    firmType: 'Other',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // ⚠️ REEMPLAZA ESTA URL con tu "Test URL" de n8n (o la de Producción después)
    const WEBHOOK_URL = 'https://f1ernandoautomation.app.n8n.cloud/webhook/contact-form-business-solutions'; 

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        alert('¡Gracias! Hemos recibido tu información correctamente.');
        // Limpiamos el formulario después del éxito
        setFormData({
          name: '',
          email: '',
          phone: '',
          firmType: 'Other',
          message: ''
        });
      } else {
        throw new Error('Error en la respuesta del servidor');
      }
    } catch (error) {
      console.error('Error enviando a n8n:', error);
      setStatus('error');
      alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
    } finally {
      // Volvemos al estado inicial después de 3 segundos si hubo éxito/error
      setTimeout(() => setStatus('idle'), 3000);
    }
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
                disabled={status === 'sending'}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                required
                disabled={status === 'sending'}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                required
                disabled={status === 'sending'}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100"
              />
            </div>

            {/* Firm Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Firm Type</label>
              <select
                disabled={status === 'sending'}
                value={formData.firmType}
                onChange={(e) => setFormData({...formData, firmType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100"
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
              disabled={status === 'sending'}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Tell us about your tax season challenges"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:bg-gray-100"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full font-semibold py-4 rounded-lg transition-colors text-white ${
              status === 'sending' ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            {status === 'sending' ? 'Sending...' : 'Get Custom Quote'}
          </button>
        </form>
      </div>
    </section>
  );
}
