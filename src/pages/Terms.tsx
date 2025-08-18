import React from 'react';
import { ArrowLeft, FileText, Calendar, Shield, AlertTriangle } from 'lucide-react';

interface TermsProps {
  isDark: boolean;
  onBack: () => void;
  translations: any;
}

const Terms: React.FC<TermsProps> = ({ isDark, onBack, translations }) => {
  const t = translations.termsPage;

  if (!t) {
    return <div className="p-8 text-red-500">Missing translations for Privacy Page</div>;
  }

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
            {t.back}
          </button>
          <div className="flex items-center mb-4">
            <FileText className="h-8 w-8 text-[#74C9D5] mr-3" />
            <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              {t.title}
            </h1>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className={`h-4 w-4 mr-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              {t.lastUpdated}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Notice */}
        <div className={`p-6 rounded-xl border-l-4 border-[#74C9D5] mb-12 ${
          isDark ? 'bg-gray-800/50 border-r border-t border-b border-gray-700' : 'bg-yellow-50 border-r border-t border-b border-yellow-200'
        }`}>
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-[#74C9D5] mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {t.importantInfo}
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {t.importantInfoDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className={`p-6 rounded-xl border mb-12 ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            {t.tableOfContents}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {t.sections.map((item: string, index: number) => (
              <a
                key={index}
                href={`#section-${index + 1}`}
                className={`text-sm ${isDark ? 'text-gray-300 hover:text-[#74C9D5]' : 'text-gray-600 hover:text-[#74C9D5]'} 
                  transition-colors duration-300 hover:underline`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section id="section-1">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.section1.title}
            </h2>
            <div className={`prose max-w-none ${isDark ? 'prose-invert' : ''}`}>
              {t.section1.content.map((paragraph: string, index: number) => (
                <p key={index} className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.section2.title}
            </h2>
            {t.section2.content.map((paragraph: string, index: number) => (
              <p key={index} className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {paragraph}
              </p>
            ))}
          </section>

          {/* Section 3 */}
          <section id="section-3">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.section3.title}
            </h2>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.section3.content[0]}
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.section3.content[1]}
            </p>
          </section>

          {/* Section 4 */}
          <section id="section-4">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.section4.title}
            </h2>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.section4.content[0]}
            </p>
            <ul className={`list-disc list-inside space-y-2 mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.section4.services.map((service: string, index: number) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.section4.content[1]}
            </p>
          </section>

          {/* Section 5 */}
          <section id="section-5">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.section5.title}
            </h2>
            {t.section5.content.map((paragraph: string, index: number) => (
              <p key={index} className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {paragraph}
              </p>
            ))}
          </section>

          {/* Section 6 */}
          <section id="section-6">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.section6.title}
            </h2>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.section6.content[0]}
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.section6.content[1]}
            </p>
            <ul className={`list-disc list-inside space-y-2 mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.section6.prohibitions.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section 7 */}
          <section id="section-7">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.section7.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  {t.section7.clientObligations.title}
                </h3>
                <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.section7.clientObligations.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  {t.section7.cleanerObligations.title}
                </h3>
                <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.section7.cleanerObligations.items.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section-8">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.section8.title}
            </h2>
            {t.section8.content.map((paragraph: string, index: number) => (
              <p key={index} className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {paragraph}
              </p>
            ))}
          </section>

          {/* Section 9 */}
          <section id="section-9">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.section9.title}
            </h2>
            {t.section9.content.map((paragraph: string, index: number) => (
              <p key={index} className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {paragraph}
              </p>
            ))}
          </section>

          {/* Section 10 */}
          <section id="section-10">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.section10.title}
            </h2>
            {t.section10.content.map((paragraph: string, index: number) => (
              <p key={index} className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {paragraph}
              </p>
            ))}
          </section>

          {/* Contact Section */}
          <div className={`mt-16 p-8 rounded-xl border ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-[#74C9D5] mr-3" />
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                {t.contactSection.title}
              </h3>
            </div>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.contactSection.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#74C9D5] text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-300 hover:scale-105">
                {t.contactSection.contactButton}
              </button>
              <button className={`border-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white' 
                  : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-black'
              }`}>
                {t.contactSection.helpButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;