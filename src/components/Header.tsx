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
import logo from '../images/main_logo_1.png';
import icon from '../images//Main_logo.png';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: any;
  onNavigate?: (page: 'help' | 'contact' | 'terms' | 'login' | 'privacy' | 'company' | 'account' | 'hero') => void;
}


const Header: React.FC<HeaderProps> = ({ 
  isDark, 
  toggleTheme, 
  language, 
  setLanguage,
  translations ,
  onNavigate
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
    { key: 'services', label: translations.nav.services, type: 'scroll' },
    { key: 'how-it-works', label: translations.nav.howItWorks, type: 'scroll' },
    { key: 'pricing', label: translations.nav.pricing, type: 'scroll' },
    { key: 'mobile', label: translations.nav.mobile, type: 'scroll' },
    // { key: 'company', label: translations.nav.company, type: 'navigate' },
    // { key: 'contact', label: translations.nav.contact, type: 'navigate' }, 
  ];

  // Allowed keys for onNavigate
  const allowedNavigateKeys = ['help', 'contact', 'terms', 'privacy', 'company', 'account', 'hero'] as const;

  const scrollTo = (key: string) => {
    if (key === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(key);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.warn(`Section with id "${key}" not found.`);
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? `${isDark ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-xl shadow-2xl border-b ${isDark ? 'border-gray-800' : 'border-gray-100'}` 
        : 'bg-transparent'
    }`}>
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-[0.5rem]">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
            <img
                src={icon}
                alt="App Icon"
                className="h-10 w-9 mr-1 group-hover:scale-110 transition-transform duration-300"
              />


            </div>
            <div className="flex items-center">
              <img
                src={logo}
                alt="Tandhif Logo"
                className="h-6 object-contain"
              />
            </div>  
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
              key={item.key}
              onClick={() => {
                if (item.type === 'scroll') {
                  setTimeout(() => {
                    const topElement = document.getElementById(item.key);
                    if (topElement) {
                      topElement.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }, 100);
                } else {
                  if (allowedNavigateKeys.includes(item.key as any)) {
                    onNavigate?.(item.key as typeof allowedNavigateKeys[number]);
                  } else {
                    console.warn(`onNavigate called with unsupported key: ${item.key}`);
                  }
                }
                setIsMenuOpen(false);
              }}
              className={`relative px-4 py-2 font-medium transition-all duration-300 group  ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
              }`}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#74C9D5] transition-all duration-300 group-hover:w-full"></span>
            </button>            ))}
          </nav>
          <button
  //                                                   onClick={() => {
  //   onNavigate?.('company');
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }}
                                    onClick={() => {
      onNavigate?.('company');
    setTimeout(() => {
      // Try scrollIntoView first
      const topElement = document.getElementById('top');
      if (topElement) {
        topElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback to scrollTo
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  }}
                  // onClick={() => onNavigate?.('company')}

                  className={`relative px-4 py-2 font-medium transition-all duration-300 group hidden lg:flex items-center space-x-8${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {translations.pages?.company || 'Entreprises'}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#74C9D5] transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                
                //                                   onClick={() => {
                //   onNavigate?.('contact');
                //   window.scrollTo({ top: 0, behavior: 'smooth' });
                // }}
                                // onClick={() => onNavigate?.('contact')}
              
                                                  onClick={() => {
                  onNavigate?.('contact');
                  setTimeout(() => {
                    // Try scrollIntoView first
                    const topElement = document.getElementById('top');
                    if (topElement) {
                      topElement.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      // Fallback to scrollTo
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className={`relative px-4 py-2 font-medium transition-all duration-300 group hidden lg:flex items-center space-x-8 ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
                              >
                                {translations.pages?.contact || 'contact'}  
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#74C9D5] transition-all duration-300 group-hover:w-full"></span>
                              </button>
          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Dropdown */}
            <div className="relative language-dropdown">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-xl transition-all duration-300 ${
                  isDark 
                  ? 'text-white hover:text-gray-300' 
                  : 'text-black hover:text-gray-700'
              }`}
              
              >
                {/* <Globe className="h-4 w-4" /> */}
                <div>
                  <span className="text-sm font-medium flex items-center gap-1">
                    <span className="text-3xl rounded-md">
                      {languageNames[language].split(' ')[0]}
                    </span>
                    {languageNames[language].split(' ')[1].slice(0, 2).toUpperCase()}
                  </span>
                </div>
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
                          ? 'bg-[#74C9D5] text-black font-medium' 
                          : isDark 
                            ? 'text-white hover:bg-gray-700' 
                            : 'text-black hover:bg-gray-50'
                      }`}
                      dir={lang === 'ar' ? 'rtl' : 'ltr'}
                    >
                      {/* Flag and Language Name */}
                      <span className="mr-2">{languageNames[lang].split(' ')[0]}</span>
                      <span>{languageNames[lang].split(' ')[1]}</span>
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
            <button  onClick={() => {
      onNavigate?.('login');
    setTimeout(() => {
      // Try scrollIntoView first
      const topElement = document.getElementById('top');
      if (topElement) {
        topElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback to scrollTo
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  }}  className="hidden md:flex bg-[#74C9D5] text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-customcyan hover:scale-105 hover:shadow-lg">
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
         onClick={() => {
           if (item.type === 'scroll') {
             setTimeout(() => {
               const topElement = document.getElementById(item.key);
               if (topElement) {
                 topElement.scrollIntoView({ behavior: 'smooth' });
               } else {
                 window.scrollTo({ top: 0, behavior: 'smooth' });
               }
             }, 100);
           } else {
             if (allowedNavigateKeys.includes(item.key as any)) {
               onNavigate?.(item.key as typeof allowedNavigateKeys[number]);
             } else {
               console.warn(`onNavigate called with unsupported key: ${item.key}`);
             }
           }
           setIsMenuOpen(false);
         }}
         className={`{block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300  ${
           isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
         }`}
       >
         {item.label}
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#74C9D5] transition-all duration-300 group-hover:w-full"></span>
       </button>
       
              ))}
                  <button
  //                                                   onClick={() => {
  //   onNavigate?.('company');
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }}
                                    onClick={() => {
      onNavigate?.('company');
    setTimeout(() => {
      // Try scrollIntoView first
      const topElement = document.getElementById('top');
      if (topElement) {
        topElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback to scrollTo
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  }}
                  // onClick={() => onNavigate?.('company')}

                  className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300  ${
                    isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {translations.pages?.company || 'Entreprises'}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#74C9D5] transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                
                //                                   onClick={() => {
                //   onNavigate?.('contact');
                //   window.scrollTo({ top: 0, behavior: 'smooth' });
                // }}
                                // onClick={() => onNavigate?.('contact')}
              
                                                  onClick={() => {
                  onNavigate?.('contact');
                  setTimeout(() => {
                    // Try scrollIntoView first
                    const topElement = document.getElementById('top');
                    if (topElement) {
                      topElement.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      // Fallback to scrollTo
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300   ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
                              >
                                {translations.pages?.contact || 'contact'}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#74C9D5] transition-all duration-300 group-hover:w-full"></span>
                              </button>
              <button   onClick={() => {
      onNavigate?.('login');
    setTimeout(() => {
      // Try scrollIntoView first
      const topElement = document.getElementById('top');
      if (topElement) {
        topElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback to scrollTo
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  }} className="w-full bg-[#74C9D5] text-black px-6 py-4 rounded-xl font-extrabold text-xl tracking-wide transition-all duration-300 hover:bg-customcyan mt-4">
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


