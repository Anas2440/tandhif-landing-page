import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Globe,
  ChevronDown
} from 'lucide-react';
import { Language, supportedLanguages, languageNames } from '../data/translations';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: any;
}

const Header: React.FC<HeaderProps> = ({ 
  isDark, 
  toggleTheme, 
  language, 
  setLanguage,
  translations 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-dropdown')) {
        setIsLanguageOpen(false);
      }
    };

    if (isLanguageOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isLanguageOpen]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'services', label: translations.nav.services },
    { key: 'how-it-works', label: translations.nav.howItWorks },
    { key: 'pricing', label: translations.nav.pricing },
    { key: 'mobile', label: translations.nav.mobile },
    { key: 'hero', label: translations.nav.becomeCleanerShort }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? `${isDark ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-xl shadow-2xl border-b ${isDark ? 'border-gray-800' : 'border-gray-100'}` 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <img
                src="src/images/imgpsh_fullsize_anim__1_-removebg-preview.png" // <-- replace with your actual path
                alt="App Icon"
                className="h-10 w-10 mr-3 group-hover:scale-110 transition-transform duration-300"
              />
             <div className="absolute inset-0 h-10 w-10 mr-3 animate-pulse opacity-30">
              <img
                src="src/images/imgpsh_fullsize_anim__1_-removebg-preview.png" // <-- same icon or blurred version
                alt="App Icon Pulse"
                className="h-10 w-10"
              />
             </div>  
            </div>
           <div className="flex items-center">
  <img
    src="src/images/logo.png"
    alt="Tandhif Logo"
    className="h-5 object-contain" // Keep height fixed, let width adjust
  />
           </div>  
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 group ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FEE21B] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            {/* <button
              onClick={() => scrollToSection('hero')}
              className={`px-4 py-2 font-medium transition-all duration-300 ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              {translations.nav.becomeCleanerShort || 'Devenir cleaner'}
            </button> */}
            {/* <button
              className={`px-4 py-2 font-medium transition-all duration-300 ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              {translations.nav.account}
            </button> */}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Dropdown */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-800/50 text-white hover:bg-gray-700/50 border border-gray-700' 
                    : 'bg-gray-100/50 text-black hover:bg-gray-200/50 border border-gray-200'
                }`}
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageOpen && (
                <div className={`absolute top-full right-0 mt-2 w-48 rounded-xl shadow-2xl border overflow-hidden z-50 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200'
                }`}>
                  {supportedLanguages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLanguageOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm transition-colors duration-200 ${
                        language === lang 
                          ? 'bg-[#FEE21B] text-black font-medium' 
                          : isDark 
                            ? 'text-white hover:bg-gray-700' 
                            : 'text-black hover:bg-gray-50'
                      }`}
                      dir={lang === 'ar' ? 'rtl' : 'ltr'}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'bg-gray-800/50 text-yellow-400 hover:bg-gray-700/50 border border-gray-700' 
                  : 'bg-gray-100/50 text-gray-700 hover:bg-gray-200/50 border border-gray-200'
              }`}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* CTA Button */}
            <button className="hidden md:flex bg-[#FEE21B] text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:shadow-lg">
              {translations.nav.bookNow || 'Réserver'}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800/50 text-white hover:bg-gray-700/50 border border-gray-700' 
                  : 'bg-gray-100/50 text-black hover:bg-gray-200/50 border border-gray-200'
              }`}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden absolute top-20 left-0 right-0 ${
            isDark ? 'bg-black/95' : 'bg-white/95'
          } backdrop-blur-xl border-t ${isDark ? 'border-gray-800' : 'border-gray-200'} shadow-2xl`}>
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isDark 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-700 hover:text-black hover:bg-gray-100'
                }`}
              >
                {translations.nav.account}
              </button>
              <button
                onClick={() => scrollToSection('hero')}
                className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-700 hover:text-black hover:bg-gray-100'
                }`}
              >
                {translations.nav.becomeCleanerShort || 'Devenir cleaner'}
              </button>
              <button className="w-full bg-[#FEE21B] text-black px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-300 mt-4">
                {translations.nav.bookNow}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;