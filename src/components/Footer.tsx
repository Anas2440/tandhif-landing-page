import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import logo from '../images/logo.png';
import icon from '../images/imgpsh_fullsize_anim__1_-removebg-preview.png';

interface FooterProps {
  isDark: boolean;
  translations: any;
  services: String[];
  onNavigate?: (page: 'help' | 'contact' | 'terms' | 'privacy' | 'company') => void;
}

const Footer: React.FC<FooterProps> = ({ isDark, translations, services, onNavigate }) => {
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

  // const navigate = useNavigate();

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-22">
            <div className="flex items-center space-x-2">
  <img
    src={icon}
    alt="App Icon"
    className="h-12 w-12 group-hover:scale-110 transition-transform duration-500"
  />
  <img
    src={logo}
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
                  contact@tandhif.fr
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
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-8">
  {services.map((service, idx) => (
    <li key={idx}>
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
                <button
                  onClick={() => {
    onNavigate?.('help');
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
                  // onClick={() => onNavigate?.('help')}
  //                   onClick={() => {
  //   onNavigate?.('help');
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }}
                  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} 
                    transition-all duration-300 hover:translate-x-1`}
                >
                  {translations.pages?.help || 'Centre d\'aide'}
                </button>
              </li>
              <li>
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
                  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} 
                    transition-all duration-300 hover:translate-x-1`}
                >
                  {translations.pages?.contact || 'contact'}
                </button>
              </li>
              <li>
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

                  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} 
                    transition-all duration-300 hover:translate-x-1`}
                >
                  {translations.pages?.company || 'Entreprises'}
                </button>
              </li>
              <li>
                <button
                                                    onClick={() => {
      onNavigate?.('privacy');
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
  //                                                                   onClick={() => {
  //   onNavigate?.('privacy');
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }}
                  // onClick={() => onNavigate?.('privacy')}
                  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} 
                    transition-all duration-300 hover:translate-x-1`}
                >
                  {translations.pages?.privacy || 'Politique de confidentialité'}
                </button>
              </li>
              <li>
                <button
                                                               onClick={() => {
      onNavigate?.('terms');
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
  //                                                                                   onClick={() => {
  //   onNavigate?.('terms');
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }}
                  // onClick={() => onNavigate?.('terms')}
                  className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} 
                    transition-all duration-300 hover:translate-x-1`}
                >
                  {translations.pages?.terms || 'Conditions Générales'}
                </button>
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
    © 2025 Tandhif. {translations.footer?.copyright || 'Le Nettoyage nouvelle génération.'}
  </p>
  <div className="flex items-center justify-center md:justify-end space-x-4 mt-2">
    <span
      onClick={() => {
        onNavigate && onNavigate('privacy');
        setTimeout(() => {
          const topElement = document.getElementById('top');
          if (topElement) {
            topElement.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      }}
      className={`text-xs underline ${isDark ? 'text-gray-500 hover:text-gray-400' : 'text-gray-500 hover:text-gray-600'} transition-colors duration-300 cursor-pointer`}
    >
      {translations.footer?.privacy || 'Politique de confidentialité'}
    </span>

    <span
      onClick={() => {
        onNavigate && onNavigate('terms');
        setTimeout(() => {
          const topElement = document.getElementById('top');
          if (topElement) {
            topElement.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      }}
      className={`text-xs underline ${isDark ? 'text-gray-500 hover:text-gray-400' : 'text-gray-500 hover:text-gray-600'} transition-colors duration-300 cursor-pointer`}
    >
      {translations.footer?.terms || 'Conditions Générales'}
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