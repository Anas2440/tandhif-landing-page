import React from 'react';
import { Sparkles, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
  translations: any;
}

const Footer: React.FC<FooterProps> = ({ isDark, translations }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className={`${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-black border-gray-800' 
        : 'bg-gradient-to-b from-gray-50 to-white border-gray-200'
    } border-t py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-22">
            <div className="flex space-x-2">
  <img
    src="src/images/imgpsh_fullsize_anim__1_-removebg-preview.png"
    alt="App Icon"
    className="h-12 w-12 group-hover:scale-110 transition-transform duration-500"
  />
  <img
    src="src/images/logo.png"
    alt="Tandhif Logo"
    className="h-7 object-left"
  />
</div>

            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8 max-w-md text-lg leading-relaxed`}>
              {translations.footer.description}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className={`p-2 rounded-lg mr-4 transition-colors duration-300 ${
                  isDark ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <Mail className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </div>
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                  contact@tandhif.com
                </span>
              </div>
              <div className="flex items-center group">
                <div className={`p-2 rounded-lg mr-4 transition-colors duration-300 ${
                  isDark ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <Phone className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </div>
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                  +33 1 23 45 67 89
                </span>
              </div>
              <div className="flex items-center group">
                <div className={`p-2 rounded-lg mr-4 transition-colors duration-300 ${
                  isDark ? 'bg-gray-800 group-hover:bg-gray-700' : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <MapPin className={`h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                </div>
                <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}>
                  {translations.footer.location}
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {translations.footer.services}
            </h3>
            <ul className="space-y-3">
              {translations.footer.servicesList.map((service: string, index: number) => (
                <li key={index}>
                  <span className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} 
                    transition-colors duration-300 cursor-pointer hover:translate-x-1 inline-block`}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {translations.footer.quickLinks}
            </h3>
            <ul className="space-y-3">
              {[
                { key: 'services', label: translations.nav.services },
                { key: 'how-it-works', label: translations.nav.howItWorks },
                { key: 'pricing', label: translations.nav.pricing },
                { key: 'mobile', label: translations.nav.mobile }
              ].map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.key)}
                    className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} 
                      transition-all duration-300 hover:translate-x-1`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <span className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} 
                  transition-colors duration-300 cursor-pointer hover:translate-x-1 inline-block`}>
                  {translations.footer.about || 'À propos'}
                </span>
              </li>
              <li>
                <span className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} 
                  transition-colors duration-300 cursor-pointer hover:translate-x-1 inline-block`}>
                  {translations.footer.faq || 'FAQ'}
                </span>
              </li>
              <li>
                <span className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} 
                  transition-colors duration-300 cursor-pointer hover:translate-x-1 inline-block`}>
                  {translations.footer.contact || 'Contact'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-16 pt-8 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {translations.footer.followUs || 'Suivez-nous'}
              </span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                    isDark 
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                © 2025 Tandhif. {translations.footer.copyright}
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 mt-2">
                <span className={`text-xs ${isDark ? 'text-gray-500 hover:text-gray-400' : 'text-gray-500 hover:text-gray-600'} 
                  transition-colors duration-300 cursor-pointer`}>
                  {translations.footer.privacy || 'Politique de confidentialité'}
                </span>
                <span className={`text-xs ${isDark ? 'text-gray-500 hover:text-gray-400' : 'text-gray-500 hover:text-gray-600'} 
                  transition-colors duration-300 cursor-pointer`}>
                  {translations.footer.terms || 'CGU'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;