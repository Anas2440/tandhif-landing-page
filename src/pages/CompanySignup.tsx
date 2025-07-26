import React, { useState } from 'react';
import { ArrowLeft, Building, Users, CheckCircle, Star, TrendingUp, Shield, Clock, Award } from 'lucide-react';

interface CompanySignupProps {
  isDark: boolean;
  onBack: () => void;
  translations: any;
}

const CompanySignup: React.FC<CompanySignupProps> = ({ isDark, onBack, translations }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    industry: '',
    employeeCount: '',
    cleaningFrequency: '',
    services: [] as string[],
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Company signup form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const t = translations.companyPage;

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-[#FEE21B]" />,
      title: t.benefits.preferentialRates.title,
      description: t.benefits.preferentialRates.description
    },
    {
      icon: <Users className="h-8 w-8 text-[#FEE21B]" />,
      title: t.benefits.dedicatedTeam.title,
      description: t.benefits.dedicatedTeam.description
    },
    {
      icon: <Clock className="h-8 w-8 text-[#FEE21B]" />,
      title: t.benefits.flexibility.title,
      description: t.benefits.flexibility.description
    },
    {
      icon: <Shield className="h-8 w-8 text-[#FEE21B]" />,
      title: t.benefits.insurance.title,
      description: t.benefits.insurance.description
    },
    {
      icon: <Award className="h-8 w-8 text-[#FEE21B]" />,
      title: t.benefits.certified.title,
      description: t.benefits.certified.description
    },
    {
      icon: <Building className="h-8 w-8 text-[#FEE21B]" />,
      title: t.benefits.billing.title,
      description: t.benefits.billing.description
    }
  ];

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
          <div className="flex items-center mb-4">
            <Building className="h-8 w-8 text-[#FEE21B] mr-3" />
            <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              {t.title}
            </h1>
          </div>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            {t.hero.title}
          </h2>
          <p className={`text-xl mb-8 max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.hero.description}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className={`text-center p-6 rounded-2xl border ${
              isDark ? 'border-gray-700 bg-gray-800/30' : 'border-gray-200 bg-gray-50/30'
            }`}>
              <div className="text-3xl font-bold text-[#FEE21B] mb-2">500+</div>
              <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.stats.companies}
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl border ${
              isDark ? 'border-gray-700 bg-gray-800/30' : 'border-gray-200 bg-gray-50/30'
            }`}>
              <div className="text-3xl font-bold text-[#FEE21B] mb-2">98%</div>
              <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.stats.satisfaction}
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl border ${
              isDark ? 'border-gray-700 bg-gray-800/30' : 'border-gray-200 bg-gray-50/30'
            }`}>
              <div className="text-3xl font-bold text-[#FEE21B] mb-2">24h</div>
              <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.stats.response}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-black'}`}>
            {t.whyChoose}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#FEE21B]' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#FEE21B]'
              }`}>
                <div className="mb-4">{benefit.icon}</div>
                <h4 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  {benefit.title}
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.form.title}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Company Information */}
              <div className="space-y-4">
                <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                  {t.form.companyInfo}
                </h4>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.form.companyName} *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#FEE21B]' 
                        : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#FEE21B]'
                    } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                    placeholder={t.form.companyNamePlaceholder}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t.form.industry} *
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${
                        isDark 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-[#FEE21B]' 
                          : 'bg-white border-gray-300 text-black focus:border-[#FEE21B]'
                      } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                    >
                      <option value="">{t.form.select}</option>
                      <option value="technology">{t.form.industries.technology}</option>
                      <option value="finance">{t.form.industries.finance}</option>
                      <option value="healthcare">{t.form.industries.healthcare}</option>
                      <option value="retail">{t.form.industries.retail}</option>
                      <option value="manufacturing">{t.form.industries.manufacturing}</option>
                      <option value="education">{t.form.industries.education}</option>
                      <option value="other">{t.form.industries.other}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {t.form.employees} *
                    </label>
                    <select
                      name="employeeCount"
                      value={formData.employeeCount}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${
                        isDark 
                          ? 'bg-gray-800 border-gray-700 text-white focus:border-[#FEE21B]' 
                          : 'bg-white border-gray-300 text-black focus:border-[#FEE21B]'
                      } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                    >
                      <option value="">{t.form.select}</option>
                      <option value="1-10">1-10</option>
                      <option value="11-50">11-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                  Contact
                </h4>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Nom du contact *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#FEE21B]' 
                        : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#FEE21B]'
                    } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                    placeholder="Votre nom"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${
                        isDark 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#FEE21B]' 
                          : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#FEE21B]'
                      } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${
                        isDark 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#FEE21B]' 
                          : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#FEE21B]'
                      } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                      placeholder="+33 1 23 45 67 89"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                  Adresse
                </h4>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Adresse *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-xl border ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#FEE21B]' 
                        : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#FEE21B]'
                    } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                    placeholder="123 Rue de la République"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Ville *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${
                        isDark 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#FEE21B]' 
                          : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#FEE21B]'
                      } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                      placeholder="Paris"
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Code postal *
                    </label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border ${
                        isDark 
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#FEE21B]' 
                          : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#FEE21B]'
                      } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                      placeholder="75001"
                    />
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h4 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                  {t.form.servicesWanted}
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.form.serviceOptions.map((service: string) => (
                    <label key={service} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="sr-only"
                      />
                      <div className={`flex items-center justify-center w-5 h-5 mr-3 rounded border-2 transition-all duration-300 ${
                        formData.services.includes(service)
                          ? 'bg-[#FEE21B] border-[#FEE21B]'
                          : isDark
                            ? 'border-gray-600 hover:border-gray-500'
                            : 'border-gray-300 hover:border-gray-400'
                      }`}>
                        {formData.services.includes(service) && (
                          <CheckCircle className="w-3 h-3 text-black" />
                        )}
                      </div>
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Frequency */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Fréquence souhaitée
                </label>
                <select
                  name="cleaningFrequency"
                  value={formData.cleaningFrequency}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-[#FEE21B]' 
                      : 'bg-white border-gray-300 text-black focus:border-[#FEE21B]'
                  } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                >
                  <option value="">Sélectionnez</option>
                  <option value="daily">Quotidien</option>
                  <option value="weekly">Hebdomadaire</option>
                  <option value="biweekly">Bi-hebdomadaire</option>
                  <option value="monthly">Mensuel</option>
                  <option value="occasional">Ponctuel</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message (optionnel)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-xl border resize-none ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#FEE21B]' 
                      : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#FEE21B]'
                  } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                  placeholder="Décrivez vos besoins spécifiques..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FEE21B] text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-300 hover:scale-105 text-lg"
              >
                {t.form.submitButton}
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            {/* Testimonial */}
            <div className={`p-8 rounded-xl border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#FEE21B] fill-current" />
                ))}
              </div>
              <blockquote className={`text-lg italic mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.testimonial.quote}
              </blockquote>
              <cite className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                {t.testimonial.author}
              </cite>
            </div>

            {/* Contact Info */}
            <div className={`p-8 rounded-xl border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
            }`}>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                {t.help.title}
              </h4>
              <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.help.description}
              </p>
              <div className="space-y-2">
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  📞 +33 1 23 45 67 89
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  ✉️ entreprise@tandhif.com
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  🕒 {t.help.hours}
                </p>
              </div>
            </div>

            {/* Process */}
            <div className={`p-8 rounded-xl border ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
            }`}>
              <h4 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                {t.process.title}
              </h4>
              <div className="space-y-4">
                {t.process.steps.map((step: any, index: number) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-[#FEE21B] rounded-full flex items-center justify-center text-black text-sm font-bold mr-3 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h5 className={`font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                        {step.title}
                      </h5>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySignup;