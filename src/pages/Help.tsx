import React from 'react';
import { ArrowLeft, Search, MessageCircle, Phone, Mail, Clock, CheckCircle, AlertCircle, Info } from 'lucide-react';

interface HelpProps {
  isDark: boolean;
  onBack: () => void;
}

const Help: React.FC<HelpProps> = ({ isDark, onBack }) => {
  const faqItems = [
    {
      category: "Commande et réservation",
      questions: [
        {
          question: "Comment passer une commande ?",
          answer: "Vous pouvez passer commande directement sur notre site web ou via notre application mobile. Sélectionnez le service souhaité, indiquez vos préférences et confirmez votre réservation."
        },
        {
          question: "Puis-je modifier ou annuler ma commande ?",
          answer: "Oui, vous pouvez modifier ou annuler votre commande jusqu'à 2 heures avant l'intervention prévue. Connectez-vous à votre compte ou contactez notre service client."
        },
        {
          question: "Combien de temps à l'avance dois-je réserver ?",
          answer: "Nous recommandons de réserver au moins 24h à l'avance, mais nous acceptons aussi les demandes urgentes selon la disponibilité de nos cleaners."
        }
      ]
    },
    {
      category: "Services et tarifs",
      questions: [
        {
          question: "Quels services proposez-vous ?",
          answer: "Nous proposons une large gamme de services : ménage à domicile, nettoyage de bureaux, pressing, entretien de jardins, nettoyage de véhicules, et bien plus encore."
        },
        {
          question: "Comment sont calculés les tarifs ?",
          answer: "Nos tarifs sont transparents et calculés selon la surface, le type de service et la complexité de la tâche. Vous pouvez consulter notre grille tarifaire complète."
        },
        {
          question: "Y a-t-il des frais cachés ?",
          answer: "Non, tous nos tarifs sont transparents. Le prix affiché lors de votre commande est le prix final, sans surprise."
        }
      ]
    },
    {
      category: "Cleaners et qualité",
      questions: [
        {
          question: "Comment sélectionnez-vous vos cleaners ?",
          answer: "Tous nos cleaners sont soigneusement sélectionnés, vérifiés et formés. Ils sont assurés et évalués régulièrement par nos clients."
        },
        {
          question: "Que faire si je ne suis pas satisfait du service ?",
          answer: "Votre satisfaction est notre priorité. Si vous n'êtes pas satisfait, contactez-nous dans les 24h et nous trouverons une solution adaptée."
        },
        {
          question: "Les cleaners apportent-ils leur matériel ?",
          answer: "Oui, nos cleaners viennent avec tout le matériel et les produits professionnels nécessaires, sauf indication contraire."
        }
      ]
    },
    {
      category: "Paiement et facturation",
      questions: [
        {
          question: "Quels moyens de paiement acceptez-vous ?",
          answer: "Nous acceptons les cartes bancaires, PayPal, et les virements. Le paiement se fait de manière sécurisée après validation du service."
        },
        {
          question: "Quand suis-je débité ?",
          answer: "Le paiement est effectué après la réalisation du service et votre validation. Vous recevez une facture détaillée par email."
        },
        {
          question: "Puis-je avoir une facture ?",
          answer: "Oui, une facture est automatiquement générée et envoyée par email après chaque prestation. Vous pouvez aussi la télécharger depuis votre compte."
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
            Retour
          </button>
          <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            Centre d'aide
          </h1>
          <p className={`text-xl mt-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Trouvez rapidement les réponses à vos questions
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative">
          <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder="Rechercher dans l'aide..."
            className={`w-full pl-12 pr-4 py-4 rounded-xl border text-lg ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#FEE21B]' 
                : 'bg-gray-50 border-gray-300 text-black placeholder-gray-500 focus:border-[#FEE21B]'
            } focus:outline-none focus:ring-2 focus:ring-[#FEE21B]/20 transition-all duration-300`}
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
          Actions rapides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
            isDark 
              ? 'bg-gray-800 border-gray-700 hover:border-[#FEE21B]' 
              : 'bg-gray-50 border-gray-200 hover:border-[#FEE21B]'
          }`}>
            <MessageCircle className="h-8 w-8 text-[#FEE21B] mb-4" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              Chat en direct
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Discutez avec notre équipe support
            </p>
          </div>
          
          <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
            isDark 
              ? 'bg-gray-800 border-gray-700 hover:border-[#FEE21B]' 
              : 'bg-gray-50 border-gray-200 hover:border-[#FEE21B]'
          }`}>
            <Phone className="h-8 w-8 text-[#FEE21B] mb-4" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              Nous appeler
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              +33 1 23 45 67 89
            </p>
          </div>
          
          <div className={`p-6 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
            isDark 
              ? 'bg-gray-800 border-gray-700 hover:border-[#FEE21B]' 
              : 'bg-gray-50 border-gray-200 hover:border-[#FEE21B]'
          }`}>
            <Mail className="h-8 w-8 text-[#FEE21B] mb-4" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              Email
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
          Questions fréquentes
        </h2>
        
        {faqItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDark ? 'text-white' : 'text-black'}`}>
              <div className="w-2 h-2 bg-[#FEE21B] rounded-full mr-3"></div>
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
                      <Info className="h-5 w-5 text-[#FEE21B] mr-3 flex-shrink-0" />
                      {item.question}
                    </span>
                    <div className="ml-4 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-[#FEE21B] flex items-center justify-center">
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
            Vous ne trouvez pas votre réponse ?
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Notre équipe support est là pour vous aider
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#FEE21B] text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-300 hover:scale-105">
              Contacter le support
            </button>
            <button className={`border-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
              isDark 
                ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white' 
                : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-black'
            }`}>
              Programmer un appel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;