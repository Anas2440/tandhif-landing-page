import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Shield, 
  Zap, 
  Home, 
  Shirt, 
  TreePine, 
  Waves,
  Hammer,
  CheckCircle,
  Star,
  Smartphone,
  ArrowRight,
  Play,
  Clock,
  Award,
  Users,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { pricingData } from './data/pricing';
import PricingModal from './components/PricingModal';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedCounter from './components/AnimatedCounter';
import ServicesCarousel from './components/ServicesCarousel';
import { translations, Language, supportedLanguages } from './data/translations';
import { servicesData } from './data/services';
import logo from './images/logo.png';
import brak from './images/brooks-rice-_ECrWRcYA3o-unsplash.jpg';
import brak2 from './images/bruce-mars-FWVMhUa_wbY-unsplash 2.jpg';
import brak3 from './images/patrick-tomasso-fMntI8HAAB8-unsplash.jpg';
import brak4 from './images/neelabh-raj-cw1914zDHUs-unsplash.jpg';
import icon from './images/imgpsh_fullsize_anim__1_-removebg-preview.png';
import brak5 from './images/cytonn-photography-n95VMLxqM2I-unsplash.jpg';
import brak6 from './images/nicolas-hoizey--4trKf0Kbow-unsplash.jpg';
import brak7 from './images/joshua-bowers-J4i2xrPmcm0-unsplash.jpg';
import brak8 from './images/linkedin-sales-solutions-46bom4lObsA-unsplash.jpg';
import brak9 from './images/jon-tyson-jgaxGjXKlpw-unsplash 2.jpg';
import brak10 from './images/gil-ribeiro-3hO8igCybds-unsplash 2.jpg';
import AppIco from './images/Component 3.png';
import play from './images/Component 2 (1).png';
import toon from './images/toon.jpg';
import logo1 from './images/black1.jpeg';
import logo2 from './images/white1.jpeg';
import { BrowserRouter } from 'react-router-dom';
import Help from './pages/Help';
import Contact from './pages/Contact';

import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import CompanySignup from './pages/CompanySignup';


function App() {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState<Language>('fr');
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'help' | 'contact' | 'terms' | 'privacy' | 'company'>(
    'home'
  );
  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('tandhif-theme');
    const savedLanguage = localStorage.getItem('tandhif-language') as Language;
    
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
    if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);
  

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('tandhif-theme', newTheme ? 'dark' : 'light');
  };

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('tandhif-language', newLanguage);
  };

  const t = translations[language];
  const services = servicesData[language] || servicesData.fr;
  const serviceNames = (servicesData[language] || servicesData.fr).map(service => service.name);
  const prices = pricingData[language] || pricingData.fr;
 // Page navigation handlers
 const showPage = (
  page: 'home' | 'help' | 'contact' | 'terms' | 'privacy' | 'company'
) => setCurrentPage(page);
const goHome = () => showPage('home');

// ----- page routing (simple switch) -----
if (currentPage === 'help')   return <Help    isDark={isDark} onBack={goHome} translations={t}/>;
if (currentPage === 'contact')return <Contact isDark={isDark} onBack={goHome} translations={t}/>;
if (currentPage === 'terms')  return <Terms   isDark={isDark} onBack={goHome} translations={t}/>;
if (currentPage === 'privacy')return <Privacy isDark={isDark} onBack={goHome} translations={t}/>;
if (currentPage === 'company')return <CompanySignup isDark={isDark} onBack={goHome} translations={t}/>;
    /* ---------- helper ---------- */
  const getPlatform = (): 'android' | 'ios' | 'other' => {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/android/i.test(ua)) return 'android';
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return 'ios';
    return 'other';
  };
   
  /* ---------- store links ---------- */
  const links = {
    user: {
      android: 'market://details?id=com.tandhif.user',          // Google‑Play deep‑link
      ios:     'https://apps.apple.com/app/idXXXXXXXXX',        // App‑Store URL
      other:   'https://tandhif.com/download/user'              // Fallback web page
    },
    cleaner: {
      android: 'market://details?id=com.tandhif.cleaner',
      ios:     'https://apps.apple.com/app/idYYYYYYYYY',
      other:   'https://tandhif.com/download/cleaner'
    }
  };
   
  /* ---------- click handlers ---------- */
  const openStore = (type: 'user' | 'cleaner') => {
    const platform = getPlatform();
    const url = links[type][platform];
    window.open(url, '_blank');
  };
   

  // const serviceIcons = [
  //   <Home className="h-8 w-8" />,
  //   <Shirt className="h-8 w-8" />,
  //   <TreePine className="h-8 w-8" />,
  //   <Waves className="h-8 w-8" />,
  //   <Hammer className="h-8 w-8" />,
  //   <Star className="h-8 w-8" />
  // ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark ? 'bg-[#0E0E0E] text-white' : 'bg-white text-black'
    }`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Header 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
        language={language} 
        setLanguage={handleLanguageChange}
        translations={t}
      />

      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden pt-20 min-h-screen flex items-center">
        {/* Animated Background */}
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-br from-[#0E0E0E] via-gray-900 to-[#0E0E0E]' 
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
        }`}>
          {/* Hero Background Image */}
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.pexels.com/photos/4099468/pexels-photo-4099468.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Professional cleaning background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FEE21B] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#FEE21B] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              {/* Logo Animation */}
              <div className="flex justify-center lg:justify-start items-center mb-8 group">
                <div className="relative">
                  <img
                    src={icon} // Replace with your actual path
                    alt="App Icon"
                    className="h-16 w-16 mr-4 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 h-16 w-16 mr-4 animate-ping opacity-20">
                    <img
                      src={icon} // Optionally use a blurred or transparent version
                      alt="App Icon Ping"
                      className="h-16 w-16"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src={logo}
                    alt="Tandhif Logo"
                    className="h-10 object-contain" // Keep height fixed, let width adjust
                  />
                </div>
              </div>
              
              <h2 className={`text-3xl md:text-6xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                {t.hero.subtitle}
              </h2>
              
              <p className={`text-2xl md:text-3xl mb-12 max-w-4xl mx-auto lg:mx-0 leading-relaxed ${
                isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
              }`}>
                {t.hero.description}
              </p>
              
              {/* Features */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-16">
                <div className={`flex items-center px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'border-gray-700 bg-gray-800/50 text-[#BFBFBF]' 
                    : 'border-gray-200 bg-gray-50/50 text-[#7A7A7A]'
                }`}>
                  <CheckCircle className="h-6 w-6 text-[#FEE21B] mr-3" />
                  <span className="font-medium">{t.hero.feature1}</span>
                </div>
                <div className={`flex items-center px-6 py-3 rounded-full border transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'border-gray-700 bg-gray-800/50 text-[#BFBFBF]' 
                    : 'border-gray-200 bg-gray-50/50 text-[#7A7A7A]'
                }`}>
                  <CheckCircle className="h-6 w-6 text-[#FEE21B] mr-3" />
                  <span className="font-medium">{t.hero.feature2}</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-col gap-6 justify-center lg:justify-start mb-4">
                <button
                  onClick={() => openStore('user')}
                  className="bg-[#FEE21B] text-black px-10 py-5 rounded-2xl font-bold text-xl
                            transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:shadow-2xl"
                >
                  {t.hero.ctaPrimary}
                </button>

                   <div className="">
                   <div className="-mx-4 sm:-mx-6 lg:hidden">
  <div className="w-full flex flex-col items-center justify-center  py-10">
    {/* Image with Text Overlay */}
    <div className="relative w-full max-w-4xl">
    <img 
    src={brak9} 
    alt="Professional cleaner at work"
    className="w-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
    style={{ height: '400px', objectFit: 'cover' }}
  />

      {/* Titre en haut */}
      <div className="absolute top-6 left-0 w-full flex justify-center px-4">
        <h2 className="text-yellow-400 text-2xl md:text-3xl font-bold text-center font-extrabold  px-4 py-2 rounded-xl">
        {/* {t.hero.cleanerTitle} */}
        </h2>
      </div>

      {/* Texte en bas */}
      {/* <div className="absolute bottom-1 left-1 w-full flex  ">
  <div className="flex flex-col items-center   px-4 py-3 rounded-xl text-black text-lg md:text-lg text-center">
    <span>Recevez + de missions,</span>
    <span>+ de clients.</span>
    <span>Rejoignez Tandhif.</span>
  </div>
</div> */}
    </div>
  </div>
</div>

      {/* Image with Text Overlay */}
      {/* <div className="relative w-full max-w-4xl"> */}
        {/* <img
          src={brak9}
          alt="Cleaner"
          className="w-full h-50 object-cover rounded-3xl shadow-2xl"
        /> */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-center text-lg md:text-2xl font-bold px-4 bg-black bg-opacity-50 rounded-xl py-4">
            Vous êtes cleaner ? <br />
            Recevez + de missions, + de clients. <br />
            Rejoignez Tandhif.
          </p>
        </div> */}
      {/* </div> */}
    </div>
                <button
                  onClick={() => openStore('cleaner')}
                  className={`bg-transparent border-2 px-10 py-5 rounded-2xl font-bold text-xl
                              transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? 'border-white text-white hover:bg-white hover:text-black'
                      : 'border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {t.hero.ctaSecondary}
                </button>
              </div>
            </div>

            {/* Right side - Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative z-10">
                <img 
                  src={brak9} 
                  alt="Professional cleaner at work"
                  className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FEE21B] rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <Sparkles className="h-12 w-12 text-black" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </div>
              </div>
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FEE21B]/20 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            </div>
          </div>
          {/* Stats */}
          <div className="mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
                <div className={`text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'border-gray-700 bg-gray-800/30' 
                    : 'border-gray-200 bg-gray-50/30'
                }`}>
                  <div className="text-3xl font-bold text-[#FEE21B] mb-2">
                    <AnimatedCounter end={2000} prefix="+" />
                  </div>
                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t.hero.stats.clients}
                  </div>
                </div>
                <div className={`text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'border-gray-700 bg-gray-800/30' 
                    : 'border-gray-200 bg-gray-50/30'
                }`}>
                  <div className="text-3xl font-bold text-[#FEE21B] mb-2">
                    <AnimatedCounter end={500} prefix="+" />
                  </div>
                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t.hero.stats.cleaners}
                  </div>
                </div>
                <div className={`text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'border-gray-700 bg-gray-800/30' 
                    : 'border-gray-200 bg-gray-50/30'
                }`}>
                  <div className="text-3xl font-bold text-[#FEE21B] mb-2">
                    <AnimatedCounter end={50} prefix="+" />
                  </div>
                  <div className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t.hero.stats.cities}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-10 ${
        isDark ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-5">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6  ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {t.services.title}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto px-4 ${
              isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
            }`}>
              {t.services.subtitle}
            </p>
          </div>
          
          <ServicesCarousel 
            services={services}
            isDark={isDark}
            autoPlay={false}
            autoPlayInterval={5000}
          />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className={`py-10 ${
        isDark ? 'bg-[#0E0E0E]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {t.howItWorks.title}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
            }`}>
              {t.howItWorks.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {t.howItWorks.steps.map((step: any, index: number) => (
              <div key={index} className="text-center group">
                {/* Step Image */}
                <div className="mb-8">
                  <img 
                    src={[
                      "https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=400",
                      "https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=400",
                      "https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=400"
                    ][index]}
                    alt={step.title}
                    className="w-32 h-32 object-cover rounded-full mx-auto shadow-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="relative mb-8">
                  <div className="bg-[#FEE21B] text-black w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto group-hover:scale-125 transition-all duration-500 shadow-2xl">
                    {index + 1}
                  </div>
                  {index < 2 && (
                    <div className={`hidden md:block absolute top-10 left-[61%]
                                    w-full h-0.5 ${
                      isDark ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div className="w-0 h-full bg-[#FEE21B] group-hover:w-full transition-all duration-1000"></div>
                    </div>
                  )}
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
                }`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
           {/* Process Illustration */}
           <div className="text-center mb-16">
            <div className="relative max-w-4xl mx-auto">
            <img 
  src={brak7}
  alt="Cleaning process illustration" 
  className="w-full h-90 object-cover rounded-3xl shadow-2xl"
  // style={{ height: '400px', width: '100%' }} // Adjust height and width as needed
/>
              {/* <div className="absolute inset-0 bg-gradient-to-r from-[#FEE21B]/20 to-transparent rounded-3xl"></div> */}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <button className="bg-[#FEE21B] text-black px-10 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-2xl">
              {t.howItWorks.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Why Tandhif */}
      <section id="why-tandhif" className={`py-10 ${
        isDark ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {t.whyTandhif.title}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
            }`}>
              {t.whyTandhif.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.whyTandhif.features.map((feature: any, index: number) => {
              const icons = [
                <Zap className="h-16 w-16 text-[#FEE21B]" />,
                <Shield className="h-16 w-16 text-[#FEE21B]" />,
                <Award className="h-16 w-16 text-[#FEE21B]" />
              ];
              const featureImages = [
               brak6,
               brak5,
                brak4
              ];
              
              return (
                <div key={index} className={`text-center border rounded-3xl p-10 transition-all duration-500 hover:scale-105 group ${
                  isDark 
                    ? 'bg-[#0E0E0E] border-[#7A7A7A] hover:border-[#FEE21B] hover:shadow-2xl hover:shadow-[#FEE21B]/20' 
                    : 'bg-white border-gray-200 hover:border-[#FEE21B] shadow-sm hover:shadow-2xl hover:shadow-[#FEE21B]/20'
                }`}>
                   {/* Feature Image */}
                  <div className="mb-6">
                    <img 
                      src={featureImages[index]}
                      alt={feature.title}
                      className="w-24 h-24 rounded-full mx-auto shadow-lg group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="mb-8 group-hover:scale-125 transition-transform duration-500">
                    {icons[index]}
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-black'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-lg leading-relaxed ${
                    isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className={` mt-10 ${
        isDark ? 'bg-[#0E0E0E]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {t.pricing.title}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
            }`}>
              {t.pricing.subtitle}
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className={`border rounded-3xl p-10 ${
                isDark
                  ? 'bg-gray-900 border-[#7A7A7A]'
                  : 'bg-gray-50 border-gray-200'
              }`}>
                {/* Pricing Features Image */}
                <div className="mb-8">
                  <img 
                    src={brak3}
                    alt="Transparent pricing"
                    className="w-full h-70  rounded-2xl"
                  />
                </div>
                <h3 className={`text-2xl font-bold mb-8 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {t.pricing.features[0]}
                </h3>
                <div className="space-y-6">
                  {t.pricing.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-[#FEE21B] mr-4 mt-1 flex-shrink-0" />
                      <span className={`text-lg ${isDark ? 'text-white' : 'text-black'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-yellow-300 text-black rounded-3xl p-10">
                {/* Calculator Image */}
                <div className="mb-6">
                <img 
                    src={brak8}
                    alt="Price calculator"
                    className="w-full h-50 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-[30px]  font-bold mb-6 max-[400px]:text-[20px]">{t.pricing.calculator.title}</h3>
                <div className="text-[40px] font-bold mb-4 flex items-center max-[400px]:text-[20px]">
                  <ArrowRight className="h-8 w-8 mr-3" />
                  {t.pricing.calculator.calculation}
                </div>
                <div className="space-y-4 mt-8">
                  {t.pricing.examples.map((example: any, index: number) => (
                    <div key={index} className="bg-black/10 rounded-xl p-4">
                      <div className="font-bold text-lg">{example.service}</div>
                      <div className="text-2xl font-bold">{example.price}</div>
                      <div className="text-sm opacity-80">{example.description}</div>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-black text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 mt-6">
                  <span onClick={() => setIsPricingModalOpen(true)} className="cursor-pointer">
                    {t.pricing.cta}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center justify-center mt-10 py-10 text-center">
  <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4 sm:px-6 ${
    isDark ? 'text-white' : 'text-black'
  }`}>
    {t.mobile.cleanerApp.cleanerTitle}
  </h2>

  <img
    src={brak10} // Replace with actual path
    alt="Cleaner"
    className="w-full max-w-4xl rounded-xl mb-8 shadow-lg mt-5"
    style={{ height: '400px', objectFit: 'cover' }}
  />

  <p className={`text-xl sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 ${
    isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
  }`}>
    {t.mobile.cleanerApp.cleanerDescription}
  </p>
</div>

       {/* Mobile App */}
       <section id="mobile" className={`py-10 ${
        isDark ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {t.mobile.title}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
            }`}>
              {t.mobile.subtitle}
            </p>
          </div>
          
           {/* Mobile App Preview */}
           <div className="text-center mb-16">
            <div className="relative max-w-4xl mx-auto">
              <img 
                src="https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Mobile app preview"
                className="w-full h-80 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FEE21B]/30 to-transparent rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Smartphone className="h-24 w-24 text-white mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-white">Applications mobiles disponibles</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {t.mobile.features.map((feature: string, index: number) => (
              <div key={index} className={`text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-[#0E0E0E] border-[#7A7A7A] hover:border-[#FEE21B]'
                  : 'bg-white border-gray-200 hover:border-[#FEE21B] shadow-sm hover:shadow-md'
              }`}>
                <CheckCircle className="h-8 w-8 text-[#FEE21B] mx-auto mb-3" />
                <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* User App */}
            <div className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'bg-[#0E0E0E] border-[#7A7A7A] hover:border-[#FEE21B] hover:shadow-2xl hover:shadow-[#FEE21B]/20'
                : 'bg-white border-gray-200 hover:border-[#FEE21B] shadow-sm hover:shadow-2xl hover:shadow-[#FEE21B]/20'
            }`}>
               {/* User App Image */}
              <div className="mb-6">
                <img 
                  src={brak2}
                  alt="Client using app"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mx-auto mb-4">
                <img 
                  src={logo1}
                  alt="Client using app"
               className="w-15 h-20 md:w-[70px] md:h-[70px] rounded-2xl object-cover"
                />
                  
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {t.mobile.userApp.title}
                </h3>
                <p className={`text-lg ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {t.mobile.userApp.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <img
    src={play} // Replace with your actual path
    alt="App Icon"
  className="w-40 h-14 sm:w-44 sm:h-16 md:w-48 md:h-20 transition-all duration-300 hover:scale-105 object-contain"
  />

<img
    src={AppIco} // Replace with your actual path
    alt="App Icon"
   className="w-40 h-14 sm:w-44 sm:h-16 md:w-48 md:h-20 transition-all duration-300 hover:scale-105 object-contain"
  />
             
              </div>
            </div>
 
            {/* Cleaner App */}
            <div className={`p-8 rounded-3xl border transition-all duration-300 hover:scale-105 ${
              isDark
                ? 'bg-[#0E0E0E] border-[#7A7A7A] hover:border-[#FEE21B] hover:shadow-2xl hover:shadow-[#FEE21B]/20'
                : 'bg-white border-gray-200 hover:border-[#FEE21B] shadow-sm hover:shadow-2xl hover:shadow-[#FEE21B]/20'
            }`}>
               {/* Cleaner App Image */}
              <div className="mb-6">
                <img 
                  src={brak}
                  alt="Cleaner using app"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
              <div className="text-center mb-6">
              <div className="flex items-center justify-center mx-auto mb-4">
              <img 
  src={logo2}
  alt="Client using app"
   className="w-15 h-20 md:w-[70px] md:h-[70px] rounded-2xl object-cover"
 />
                  
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-black'
                }`}>
                  {t.mobile.cleanerApp.title}
                </h3>
                <p className={`text-lg ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {t.mobile.cleanerApp.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <img
  src={play} // Replace with your actual path
  alt="App Icon"
  className="w-40 h-14 sm:w-44 sm:h-16 md:w-48 md:h-20 transition-all duration-300 hover:scale-105 object-contain"
/>

<img
    src={AppIco} // Replace with your actual path
    alt="App Icon"
     className="w-40 h-14 sm:w-44 sm:h-16 md:w-48 md:h-20 transition-all duration-300 hover:scale-105 object-contain"
    // style={{ height: '70px' , width: '220px' }}
  />
             
              </div>
            </div>
          </div>
        </div>
      </section>
 
   
      {/* Final CTA */}
      <section className={`py-14 ${
        isDark ? 'bg-[#0E0E0E]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
            <img
  src={toon} // ton image
  alt="Description"
  className="w-full h-66 object-contain shadow-2xl 
             sm:h-96 sm:object-cover rounded-none"
/>
              <div className="absolute inset-0  rounded-3xl"></div>
              {/* Floating badge */}
              <div className="absolute -top-6 right-3  bg-[#FEE21B] text-black px-6 py-3 rounded-full font-bold shadow-xl">
                #1 en France
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="text-center items-center px-4 lg:text-left">
              <h2 className={`text-3xl md:text-5xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                {t.finalCta.title}
              </h2>
              <p className={`text-xl mb-12 max-w-4xl mx-auto lg:mx-0 leading-relaxed ${
                isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
              }`}>
                {t.finalCta.description}
              </p>
              
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center items-center">
              <button className="bg-[#FEE21B] text-black w-72 h-16 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-2xl">
  {t.finalCta.cta}
</button>

<button
  className={`w-72 h-16 border-2 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 ${
    isDark
      ? 'border-white text-white hover:bg-white hover:text-black'
      : 'border-black text-black hover:bg-black hover:text-white'
  }`}
>
  En savoir plus
</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer
        isDark={isDark}
        translations={t}
        services={serviceNames}
        onNavigate={showPage}
      />
      {/* Pricing Modal */}
      <PricingModal
        isOpen={isPricingModalOpen}
        onClose={() => setIsPricingModalOpen(false)}
        services={prices}
        isDark={isDark}
        translations={t}
        language={language}
      />
 
    </div>
  );
}

export default App;