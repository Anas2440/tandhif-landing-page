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
import Header from './components/Header';
import Footer from './components/Footer';
import AnimatedCounter from './components/AnimatedCounter';
import ServicesCarousel from './components/ServicesCarousel';
import { translations, Language, supportedLanguages } from './data/translations';
import { servicesData } from './data/services';
import logo from '../images/logo.png';
import icon from '../images/imgpsh_fullsize_anim__1_-removebg-preview.png';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [language, setLanguage] = useState<Language>('fr');

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

  const serviceIcons = [
    <Home className="h-8 w-8" />,
    <Shirt className="h-8 w-8" />,
    <TreePine className="h-8 w-8" />,
    <Waves className="h-8 w-8" />,
    <Hammer className="h-8 w-8" />,
    <Star className="h-8 w-8" />
  ];

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
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FEE21B] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-[#FEE21B] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Logo Animation */}
            <div className="flex justify-center items-center mb-8 group">
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
            
            <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {t.hero.subtitle}
            </h2>
            
            <p className={`text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed ${
              isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
            }`}>
              {t.hero.description}
            </p>
            
            {/* Features */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="bg-[#FEE21B] text-black px-10 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl transform">
                {t.hero.ctaPrimary}
              </button>
              <button className={`bg-transparent border-2 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-white text-white hover:bg-white hover:text-black' 
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}>
                {t.hero.ctaSecondary}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
      <section id="services" className={`py-32 ${
        isDark ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {t.services.title}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
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
      <section id="how-it-works" className={`py-32 ${
        isDark ? 'bg-[#0E0E0E]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.howItWorks.steps.map((step: any, index: number) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="bg-[#FEE21B] text-black w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto group-hover:scale-125 transition-all duration-500 shadow-2xl">
                    {index + 1}
                  </div>
                  {index < 2 && (
                    <div className={`hidden md:block absolute top-10 left-full w-full h-0.5 ${
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
          
          <div className="text-center mt-16">
            <button className="bg-[#FEE21B] text-black px-10 py-5 rounded-2xl font-bold text-xl hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-2xl">
              {t.howItWorks.cta}
            </button>
          </div>
        </div>
      </section>

      {/* Why Tandhif */}
      <section id="why-tandhif" className={`py-32 ${
        isDark ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
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
              
              return (
                <div key={index} className={`text-center border rounded-3xl p-10 transition-all duration-500 hover:scale-105 group ${
                  isDark 
                    ? 'bg-[#0E0E0E] border-[#7A7A7A] hover:border-[#FEE21B] hover:shadow-2xl hover:shadow-[#FEE21B]/20' 
                    : 'bg-white border-gray-200 hover:border-[#FEE21B] shadow-sm hover:shadow-2xl hover:shadow-[#FEE21B]/20'
                }`}>
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
      <section id="pricing" className={`py-32 ${
        isDark ? 'bg-[#0E0E0E]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
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
              
              <div className="bg-gradient-to-br from-[#FEE21B] to-yellow-300 text-black rounded-3xl p-10">
                <h3 className="text-2xl font-bold mb-6">{t.pricing.calculator.title}</h3>
                <div className="text-4xl font-bold mb-4 flex items-center">
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
                  {t.pricing.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App */}
      <section id="mobile" className={`py-32 ${
        isDark ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-black'
            }`}>
              {t.mobile.title}
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
            }`}>
              {t.mobile.subtitle}
            </p>
            <p className={`text-lg max-w-4xl mx-auto leading-relaxed mt-6 ${
              isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
            }`}>
              {t.mobile.description}
            </p>
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
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className={`border px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center ${
              isDark 
                ? 'bg-[#0E0E0E] border-[#7A7A7A] text-white hover:border-[#FEE21B] hover:shadow-2xl' 
                : 'bg-white border-gray-200 text-black hover:border-[#FEE21B] shadow-sm hover:shadow-2xl'
            }`}>
              <Smartphone className="h-6 w-6 mr-3" />
              {t.mobile.appStore}
            </button>
            <button className={`border px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center ${
              isDark 
                ? 'bg-[#0E0E0E] border-[#7A7A7A] text-white hover:border-[#FEE21B] hover:shadow-2xl' 
                : 'bg-white border-gray-200 text-black hover:border-[#FEE21B] shadow-sm hover:shadow-2xl'
            }`}>
              <Play className="h-6 w-6 mr-3" />
              {t.mobile.googlePlay}
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`py-32 ${
        isDark ? 'bg-[#0E0E0E]' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            {t.finalCta.title}
          </h2>
          <p className={`text-xl mb-12 max-w-4xl mx-auto leading-relaxed ${
            isDark ? 'text-[#BFBFBF]' : 'text-[#7A7A7A]'
          }`}>
            {t.finalCta.description}
          </p>
          
          <button className="bg-[#FEE21B] text-black px-16 py-6 rounded-2xl font-bold text-2xl hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-2xl">
            {t.finalCta.cta}
          </button>
        </div>
      </section>

      <Footer isDark={isDark} translations={t} />
    </div>
  );
}

export default App;