import React, { useState } from 'react';
import { ArrowLeft, Search, MessageCircle, Phone, Mail, Info } from 'lucide-react';

interface HelpProps {
  isDark: boolean;
  onBack: () => void;
  translations: any;
}

const Help: React.FC<HelpProps> = ({ isDark, onBack, translations }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const t = translations.helpPage;
  
  const faqItems = [
    {
      category: t.categories.orderBooking,
      questions: [
        {
          question: t.questions.howToOrder,
          answer: t.questions.howToOrderAnswer
        },
        {
          question: t.questions.modifyCancel,
          answer: t.questions.modifyCancelAnswer
        },
        {
          question: t.questions.advanceBooking,
          answer: t.questions.advanceBookingAnswer
        }
      ]
    },
    {
      category: t.categories.servicesPricing,
      questions: [
        {
          question: t.questions.servicesOffered,
          answer: t.questions.servicesOfferedAnswer
        },
        {
          question: t.questions.pricingCalculation,
          answer: t.questions.pricingCalculationAnswer
        },
        {
          question: t.questions.hiddenFees,
          answer: t.questions.hiddenFeesAnswer
        }
      ]
    },
    {
      category: t.categories.cleanersQuality,
      questions: [
        {
          question: t.questions.cleanerSelection,
          answer: t.questions.cleanerSelectionAnswer
        },
        {
          question: t.questions.notSatisfied,
          answer: t.questions.notSatisfiedAnswer
        },
        {
          question: t.questions.cleanerMaterials,
          answer: t.questions.cleanerMaterialsAnswer
        }
      ]
    },
    {
      category: t.categories.paymentBilling,
      questions: [
        {
          question: t.questions.paymentMethods,
          answer: t.questions.paymentMethodsAnswer
        },
        {
          question: t.questions.whenCharged,
          answer: t.questions.whenChargedAnswer
        },
        {
          question: t.questions.invoice,
          answer: t.questions.invoiceAnswer
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#0E0E0E] text-white' : 'bg-white text-black'}`}>
      {/* Header */}
      <div className={`border-b ${isDark ? 'border-gray-800' : 'border-gray-200'} py-6`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className={`flex items-center mb-4 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            {translations.nav?.back || t.back}
          </button>
          <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            {t.title}
          </h1>
          <p className={`text-xl mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className={`w-full pl-12 pr-4 py-4 rounded-xl border text-lg ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#74C9D5]' 
                : 'bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-[#74C9D5]'
            } focus:outline-none focus:ring-2 focus:ring-[#74C9D5]/20 transition-all duration-300`}
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
          {t.quickActions}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
            isDark 
              ? 'bg-gray-800 border-gray-700 hover:border-[#74C9D5]' 
              : 'bg-gray-50 border-gray-200 hover:border-[#74C9D5]'
          }`}>
            <MessageCircle className="h-8 w-8 text-[#74C9D5] mb-4" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.liveChat}
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.liveChatDesc}
            </p>
          </div>
          
          <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
            isDark 
              ? 'bg-gray-800 border-gray-700 hover:border-[#74C9D5]' 
              : 'bg-gray-50 border-gray-200 hover:border-[#74C9D5]'
          }`}>
            <Phone className="h-8 w-8 text-[#74C9D5] mb-4" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.callUs}
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              +33 1 23 45 67 89
            </p>
          </div>
          
          <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
            isDark 
              ? 'bg-gray-800 border-gray-700 hover:border-[#74C9D5]' 
              : 'bg-gray-50 border-gray-200 hover:border-[#74C9D5]'
          }`}>
            <Mail className="h-8 w-8 text-[#74C9D5] mb-4" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.email}
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              support@tandhif.com
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>
          {t.faq}
        </h2>
        
        {faqItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDark ? 'text-white' : 'text-black'}`}>
              <div className="w-2 h-2 bg-[#74C9D5] rounded-full mr-3"></div>
              {category.category}
            </h3>
            
            <div className="space-y-4">
              {category.questions.map((item, index) => (
                <details
                  key={index}
                  className={`group rounded-xl border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800 border-gray-700 hover:border-gray-600' 
                      : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <summary className={`p-6 cursor-pointer list-none flex items-center justify-between ${
                    isDark ? 'text-white' : 'text-black'
                  } font-medium`}>
                    <span className="flex items-center">
                      <Info className="h-5 w-5 text-[#74C9D5] mr-3 flex-shrink-0" />
                      {item.question}
                    </span>
                    <div className="ml-4 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-[#74C9D5] flex items-center justify-center">
                        <span className="text-black text-sm font-bold group-open:rotate-45 transition-transform duration-300">+</span>
                      </div>
                    </div>
                  </summary>
                  <div className={`px-6 pb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className={`border-t ${isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'} py-12`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            {t.notFound}
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.notFoundDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#74C9D5] text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-300 hover:scale-105">
              {t.contactSupport}
            </button>
            <button className={`border-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
              isDark 
                ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white' 
                : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-black'
            }`}>
              {t.scheduleCall}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;