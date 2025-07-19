import React, { useEffect } from 'react';
import { X, Euro, Clock, MapPin } from 'lucide-react';
import { ServicePrice } from '../data/pricing';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServicePrice[];
  isDark: boolean;
  translations: any;
  language: string;
}

const PricingModal: React.FC<PricingModalProps> = ({ 
  isOpen, 
  onClose, 
  services, 
  isDark, 
  translations,
  language 
}) => {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Group services by category
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, ServicePrice[]>);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      onClick={onClose}
    >
      {/* Backdrop Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-md" />
      
      {/* Modal Content */}
      <div 
        className={`relative max-w-6xl w-full max-h-[90vh] rounded-3xl p-8 transform transition-all duration-500 overflow-hidden ${
          isDark 
            ? 'bg-gray-900/95 border border-gray-700/50' 
            : 'bg-white/95 border border-gray-200/50'
        } shadow-2xl backdrop-blur-sm`}
        style={{
          animation: 'modalSlideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
        }}
        onClick={(e) => e.stopPropagation()}
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-6 ${language === 'ar' ? 'left-6' : 'right-6'} p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 ${
            isDark 
              ? 'bg-gray-800/80 text-gray-400 hover:bg-gray-700 hover:text-white' 
              : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200 hover:text-black'
          } backdrop-blur-sm`}
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            {translations.pricingModal.title}
          </h2>
          <p className={`text-xl ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {translations.pricingModal.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="overflow-y-auto max-h-[60vh] pr-4" style={{ scrollbarWidth: 'thin' }}>
          {Object.entries(groupedServices).map(([category, categoryServices]) => (
            <div key={category} className="mb-12">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#FEE21B] to-transparent"></div>
                <h3 className={`px-6 text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {translations.pricingModal.categories[category] || category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[#FEE21B] via-[#FEE21B] to-transparent"></div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service) => (
                  <div
                    key={service.id}
                    className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 group ${
                      isDark 
                        ? 'bg-gray-800/50 border-gray-700 hover:border-[#FEE21B] hover:shadow-2xl hover:shadow-[#FEE21B]/20' 
                        : 'bg-gray-50/50 border-gray-200 hover:border-[#FEE21B] shadow-sm hover:shadow-2xl hover:shadow-[#FEE21B]/20'
                    }`}
                  >
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h4 className={`text-xl font-bold group-hover:text-[#FEE21B] transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}>
                        {service.name}
                      </h4>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#FEE21B] flex items-center">
                          {service.price}
                          <Euro className="h-5 w-5 ml-1" />
                        </div>
                        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {service.unit}
                        </div>
                      </div>
                    </div>

                    {/* Service Description */}
                    <p className={`text-sm mb-6 leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {service.description}
                    </p>

                    {/* Action Button */}
                    <button className="w-full bg-[#FEE21B] text-black px-4 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-300 hover:scale-105 shadow-lg hover:shadow-xl">
                      {translations.pricingModal.bookService}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={`mt-8 pt-6 border-t text-center ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <div className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <Clock className="h-4 w-4 mr-2" />
              <span>Intervention sous 24h</span>
            </div>
            <div className={`flex items-center ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <MapPin className="h-4 w-4 mr-2" />
              <span>Partout en France</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* Custom scrollbar for modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-track {
          background: ${isDark ? '#374151' : '#f3f4f6'};
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #FEE21B;
          border-radius: 3px;
        }
        
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #e6cb19;
        }
      `}</style>
    </div>
  );
};

export default PricingModal;