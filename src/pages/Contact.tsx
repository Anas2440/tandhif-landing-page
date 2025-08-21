import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Building } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
  onBack: () => void;
  translations: any;
}

const Contact: React.FC<ContactProps> = ({ isDark, onBack, translations }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Safely access contactPage translations, defaulting to an empty object to prevent errors
  const t = translations.contactPage || {};

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0E0E0E] text-white' : 'bg-white text-black'}`}>
      {/* Header */}
      <div className={`border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} py-6`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className={`flex items-center mb-4 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {t.back}
          </button>
          <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            {t.title}
          </h1>
          <p className={`text-xl mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.contactInfo}
            </h2>
            
            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#74C9D5]' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#74C9D5]'
              }`}>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#74C9D5] rounded-xl flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      {t.phone}
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      {t.customerService}: +33 1 23 45 67 89
                    </p>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t.emergencies}: +33 1 23 45 67 90
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#74C9D5]' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#74C9D5]'
              }`}>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#74C9D5] rounded-xl flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      {t.email}
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      {t.support}: support@tandhif.com
                    </p>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t.commercial}: commercial@tandhif.com
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#74C9D5]' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#74C9D5]'
              }`}>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#74C9D5] rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      {t.address}
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {/* You can add a specific key for address details if needed */}
                      123 Avenue des Champs-Élysées, 75008 Paris, France
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#74C9D5]' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#74C9D5]'
              }`}>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#74C9D5] rounded-xl flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      {t.hours}
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      {t.weekdays}
                    </p>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      {t.weekends}
                    </p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {t.support24h}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 text-center ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#74C9D5] text-white' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#74C9D5] text-black'
              }`}>
                <MessageCircle className="h-6 w-6 text-[#74C9D5] mx-auto mb-2" />
                <span className="text-sm font-medium">{t.liveChat}</span>
              </button>
              
              <button className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 text-center ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#74C9D5] text-white' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#74C9D5] text-black'
              }`}>
                <Users className="h-6 w-6 text-[#74C9D5] mx-auto mb-2" />
                <span className="text-sm font-medium">{t.becomeCleanerShort}</span>
              </button>
              
              <button className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 text-center ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#74C9D5] text-white' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#74C9D5] text-black'
              }`}>
                <Building className="h-6 w-6 text-[#74C9D5] mx-auto mb-2" />
                <span className="text-sm font-medium">{t.business}</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.sendMessage}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.fullName} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#74C9D5]' 
                        : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#74C9D5]'
                    } focus:outline-none focus:ring-2 focus:ring-[#74C9D5]/20 transition-all duration-300`}
                    placeholder={t.yourName}
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#74C9D5]' 
                        : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#74C9D5]'
                    } focus:outline-none focus:ring-2 focus:ring-[#74C9D5]/20 transition-all duration-300`}
                    placeholder={t.yourEmail}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.requestType} *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-[#74C9D5]' 
                      : 'bg-white border-gray-300 text-black focus:border-[#74C9D5]'
                  } focus:outline-none focus:ring-2 focus:ring-[#74C9D5]/20 transition-all duration-300`}
                >
                  {/* FIX: Use the keys from your latest translation object */}
                  <option value="general">{t.generalQuestion}</option>
                  <option value="support">{t.technicalSupport}</option>
                  <option value="billing">{t.billing}</option>
                  <option value="partnership">{t.partnership}</option>
                  <option value="cleaner">{t.becomeCleanerLong}</option>
                  <option value="company">{t.companyAccount}</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.subject} *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#74C9D5]' 
                      : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#74C9D5]'
                  } focus:outline-none focus:ring-2 focus:ring-[#74C9D5]/20 transition-all duration-300`}
                  placeholder={t.subjectPlaceholder}
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.message} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border resize-none ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#74C9D5]' 
                      : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#74C9D5]'
                  } focus:outline-none focus:ring-2 focus:ring-[#74C9D5]/20 transition-all duration-300`}
                  placeholder={t.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#74C9D5] text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-customcyan hover:scale-105 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                {t.sendButton}
              </button>
            </form>

            <div className={`mt-8 p-6 rounded-xl border ${
              isDark 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <strong>{t.responseTime}</strong> {t.responseTimeDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;