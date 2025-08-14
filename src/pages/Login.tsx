import React, { useState } from 'react';
import './Login.css';
import buildingImg from '../images/bruce-mars-FWVMhUa_wbY-unsplash 2.jpg';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import logo from '../images/logo.png';
import icon from '../images/imgpsh_fullsize_anim__1_-removebg-preview.png';

interface LoginProps {
  isDark: boolean;
  onBack: () => void;
  translations: any;
}

const Login: React.FC<LoginProps> = ({ isDark, onBack, translations }) => {
  const t = translations.login;

  const [showPassword, setShowPassword] = useState<boolean>(false);

  if (!t) {
    return <div className="p-8 text-red-500">Login Page</div>;
  }

  return (
    <div className={`login-container ${isDark ? 'dark' : ''}`}>
      <div className="main-back-on">
        <button
          onClick={onBack}
          className={`flex items-center mb-4 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors duration-300`}
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          {t.back || 'Back'}
        </button>
      </div>

      <div className="Mian-div-log">
        <div className="Page-Nad-back shadow-lg bg-white dark:bg-black rounded-xl overflow-hidden">
          <div className="login-image">
            <img src={buildingImg} alt="Building" />
          </div>

          <div className="login-form">
            <div className="Main-input-and-text">
              <div className="icon-box">
                <div>
                  <img src={icon} alt="App Icon" className="icon-ii" />
                </div>
                <div>
                  <img src={logo} alt="Tandhif Logo" className="icon-main-logo" />
                </div>
              </div>

              <h2>{t.loginTitle || 'Welcome'}</h2>
              <p>{t.loginSubtitle || 'Please Login to Tandhif Web'}</p>

              <input
                type="email"
                placeholder={t.emailPlaceholder || 'Email'}
                defaultValue=""
              />

              <div className="password-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t.passwordPlaceholder || 'Password'}
                  defaultValue=""
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <button className="login-button">
                {t.loginButton || 'Login'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;