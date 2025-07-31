import React, { useEffect } from 'react';
import './AboutPopup.css';
import { X } from 'lucide-react';

interface AboutPopupProps {
  isOpen: boolean;
  onClose: () => void;
  isDark?: boolean;
  translations: any;
  language: string;
}

const AboutPopup: React.FC<AboutPopupProps> = ({ isOpen, onClose, isDark ,translations ,language }) => {
  const t = translations.about;
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
    className="fixed inset-0 z-50 flex items-center justify-center p-4"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
      onClick={onClose}
    >
      <div className="absolute inset-0 backdrop-blur-md" />

      <section
       className={`relative max-w-6xl w-full max-h-[90vh] rounded-3xl p-8 transform transition-all duration-500 overflow-hidden ${
        isDark
          ? 'bg-gray-900/95 border border-gray-700/50'
          : 'bg-white/95 border border-gray-200/50'
      } hadow-2xl`}
        style={{
          animation: 'modalSlideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
        }}
        onClick={(e) => e.stopPropagation()} // Prevent close on content click
        dir={language === 'ar' ? 'rtl' : 'ltr'}
      >
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

        <header className="mb-6">
          <h2 className="text-4xl font-bold mb-4 max-[450px]:text-[23px]">{t.title}</h2>
        
        </header>

        <div className="overflow-y-auto max-h-[70vh] " style={{ scrollbarWidth: 'thin' }}>
        <p className={`${
                  isDark ? 'text-center' : 'text-center'
                }`}>{t.description1}
</p>

          <h3 className="text-2xl font-bold mb-4 max-[450px]:text-[22px]">{t.clientAdvantages}</h3>
          <ul className="space-y-4 list-disc pl-6">
            <li>
              <strong>{t.t1}</strong><br />

              {t.taxCredit}
                   </li>
            <li>
              <strong>{t.t2}</strong><br />
              {t.support}
               </li>
            <li>
              <strong>{t.t3}</strong><br />
              {t.tracking}
              </li>
            <li>
              <strong>{t.t4}</strong><br />
            {t.trustedProfessionals}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPopup;
