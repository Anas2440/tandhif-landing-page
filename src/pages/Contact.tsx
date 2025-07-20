import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Building } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ isDark, onBack }) => {
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
            Retour
          </button>
          <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            Contactez-nous
          </h1>
          <p className={`text-xl mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Nous sommes là pour vous aider
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>
              Informations de contact
            </h2>
            
            {/* Contact Cards */}
            <div className="space-y-6 mb-12">
              <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#FEE21B]' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#FEE21B]'
              }`}>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FEE21B] rounded-xl flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      Téléphone
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      Service client : +33 1 23 45 67 89
                    </p>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Urgences : +33 1 23 45 67 90
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#FEE21B]' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#FEE21B]'
              }`}>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FEE21B] rounded-xl flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      Email
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      Support : support@tandhif.com
                    </p>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Commercial : commercial@tandhif.com
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#FEE21B]' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#FEE21B]'
              }`}>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FEE21B] rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      Adresse
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#FEE21B]' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#FEE21B]'
              }`}>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FEE21B] rounded-xl flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                      Horaires
                    </h3>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      Lun - Ven : 8h00 - 20h00
                    </p>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                      Sam - Dim : 9h00 - 18h00
                    </p>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      Support 24h/7j pour les urgences
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 text-center ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#FEE21B] text-white' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#FEE21B] text-black'
              }`}>
                <MessageCircle className="h-6 w-6 text-[#FEE21B] mx-auto mb-2" />
                <span className="text-sm font-medium">Chat en direct</span>
              </button>
              
              <button className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 text-center ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#FEE21B] text-white' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#FEE21B] text-black'
              }`}>
                <Users className="h-6 w-6 text-[#FEE21B] mx-auto mb-2" />
                <span className="text-sm font-medium">Devenir cleaner</span>
              </button>
              
              <button className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 text-center ${
                isDark 
                  ? 'bg-gray-800 border-gray-700 hover:border-[#FEE21B] text-white' 
                  : 'bg-gray-50 border-gray-200 hover:border-[#FEE21B] text-black'
              }`}>
                <Building className="h-6 w-6 text-[#FEE21B] mx-auto mb-2" />
                <span className="text-sm font-medium">Entreprises</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>
              Envoyez-nous un message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
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
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Type de demande *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white focus:border-[#FEE21B]' 
                      : 'bg-white border-gray-300 text-black focus:border-[#FEE21B]'
                  } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                >
                  <option value="general">Question générale</option>
                  <option value="support">Support technique</option>
                  <option value="billing">Facturation</option>
                  <option value="partnership">Partenariat</option>
                  <option value="cleaner">Devenir cleaner</option>
                  <option value="company">Compte entreprise</option>
                </select>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Sujet *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#FEE21B]' 
                      : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#FEE21B]'
                  } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border resize-none ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#FEE21B]' 
                      : 'bg-white border-gray-300 text-black placeholder-gray-500 focus:border-[#FEE21B]'
                  } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
                  placeholder="Décrivez votre demande en détail..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FEE21B] text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-300 hover:scale-105 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Envoyer le message
              </button>
            </form>

            <div className={`mt-8 p-6 rounded-xl border ${
              isDark 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <strong>Temps de réponse :</strong> Nous nous engageons à répondre à votre message dans les 24 heures ouvrées. 
                Pour les urgences, contactez-nous directement par téléphone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;