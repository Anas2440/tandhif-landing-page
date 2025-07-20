import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, AlertTriangle, Calendar } from 'lucide-react';

interface PrivacyProps {
  isDark: boolean;
  onBack: () => void;
}

const Privacy: React.FC<PrivacyProps> = ({ isDark, onBack }) => {
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
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-[#FEE21B] mr-3" />
            <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              Politique de Confidentialité
            </h1>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className={`h-4 w-4 mr-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            <span className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Dernière mise à jour : 15 janvier 2025
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Important Notice */}
        <div className={`p-6 rounded-xl border-l-4 border-[#FEE21B] mb-12 ${
          isDark ? 'bg-gray-800/50 border-r border-t border-b border-gray-700' : 'bg-blue-50 border-r border-t border-b border-blue-200'
        }`}>
          <div className="flex items-start">
            <Lock className="h-6 w-6 text-[#FEE21B] mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                Votre vie privée est importante
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Chez Tandhif, nous nous engageons à protéger vos données personnelles et à respecter votre vie privée. 
                Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`p-6 rounded-xl border text-center ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
          }`}>
            <Eye className="h-8 w-8 text-[#FEE21B] mx-auto mb-4" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              Transparence
            </h3>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Nous vous informons clairement sur l'utilisation de vos données
            </p>
          </div>
          
          <div className={`p-6 rounded-xl border text-center ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
          }`}>
            <Lock className="h-8 w-8 text-[#FEE21B] mx-auto mb-4" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              Sécurité
            </h3>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Vos données sont protégées par des mesures de sécurité avancées
            </p>
          </div>
          
          <div className={`p-6 rounded-xl border text-center ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
          }`}>
            <UserCheck className="h-8 w-8 text-[#FEE21B] mx-auto mb-4" />
            <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              Contrôle
            </h3>
            <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Vous gardez le contrôle sur vos données personnelles
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <section>
            <h2 className={`text-2xl font-bold mb-6 flex items-center ${isDark ? 'text-white' : 'text-black'}`}>
              <Database className="h-6 w-6 text-[#FEE21B] mr-3" />
              1. Données que nous collectons
            </h2>
            <div className="space-y-6">
              <div className={`p-6 rounded-xl border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                  Informations d'identification
                </h3>
                <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Nom, prénom, adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale</li>
                  <li>Date de naissance (si nécessaire)</li>
                </ul>
              </div>

              <div className={`p-6 rounded-xl border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                  Données d'utilisation
                </h3>
                <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Historique des commandes et prestations</li>
                  <li>Préférences et paramètres de compte</li>
                  <li>Évaluations et commentaires</li>
                  <li>Communications avec le support client</li>
                </ul>
              </div>

              <div className={`p-6 rounded-xl border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-black'}`}>
                  Données techniques
                </h3>
                <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Adresse IP et données de géolocalisation</li>
                  <li>Type d'appareil et navigateur utilisé</li>
                  <li>Pages visitées et temps de navigation</li>
                  <li>Cookies et technologies similaires</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              2. Comment nous utilisons vos données
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  Fourniture des services
                </h3>
                <ul className={`list-disc list-inside space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Traitement des commandes</li>
                  <li>Mise en relation avec les cleaners</li>
                  <li>Gestion des paiements</li>
                  <li>Support client</li>
                </ul>
              </div>

              <div className={`p-6 rounded-xl border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  Amélioration des services
                </h3>
                <ul className={`list-disc list-inside space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Analyse de l'utilisation</li>
                  <li>Développement de nouvelles fonctionnalités</li>
                  <li>Personnalisation de l'expérience</li>
                  <li>Prévention de la fraude</li>
                </ul>
              </div>

              <div className={`p-6 rounded-xl border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  Communication
                </h3>
                <ul className={`list-disc list-inside space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Notifications de service</li>
                  <li>Confirmations de commande</li>
                  <li>Newsletters (avec consentement)</li>
                  <li>Enquêtes de satisfaction</li>
                </ul>
              </div>

              <div className={`p-6 rounded-xl border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  Obligations légales
                </h3>
                <ul className={`list-disc list-inside space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Respect des réglementations</li>
                  <li>Lutte contre la fraude</li>
                  <li>Coopération avec les autorités</li>
                  <li>Conservation des preuves</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              3. Partage de vos données
            </h2>
            <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Nous ne vendons jamais vos données personnelles. Nous pouvons les partager uniquement dans les cas suivants :
            </p>
            <div className="space-y-4">
              <div className={`p-4 rounded-xl border-l-4 border-[#FEE21B] ${
                isDark ? 'bg-gray-800/50 border-r border-t border-b border-gray-700' : 'bg-yellow-50 border-r border-t border-b border-yellow-200'
              }`}>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  Avec les cleaners
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Informations nécessaires à la réalisation de la prestation (nom, adresse, contact)
                </p>
              </div>

              <div className={`p-4 rounded-xl border-l-4 border-[#FEE21B] ${
                isDark ? 'bg-gray-800/50 border-r border-t border-b border-gray-700' : 'bg-yellow-50 border-r border-t border-b border-yellow-200'
              }`}>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  Avec nos partenaires techniques
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Prestataires de paiement, hébergement, et services techniques (sous contrat strict)
                </p>
              </div>

              <div className={`p-4 rounded-xl border-l-4 border-[#FEE21B] ${
                isDark ? 'bg-gray-800/50 border-r border-t border-b border-gray-700' : 'bg-yellow-50 border-r border-t border-b border-yellow-200'
              }`}>
                <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  Obligations légales
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Autorités compétentes en cas de demande légale ou de protection de nos droits
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              4. Sécurité de vos données
            </h2>
            <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-xl border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  Mesures techniques
                </h3>
                <ul className={`list-disc list-inside space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Chiffrement des données sensibles</li>
                  <li>Connexions sécurisées (HTTPS/SSL)</li>
                  <li>Pare-feu et systèmes de détection</li>
                  <li>Sauvegardes régulières</li>
                </ul>
              </div>

              <div className={`p-6 rounded-xl border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  Mesures organisationnelles
                </h3>
                <ul className={`list-disc list-inside space-y-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Accès limité aux données</li>
                  <li>Formation du personnel</li>
                  <li>Audits de sécurité réguliers</li>
                  <li>Procédures de gestion des incidents</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              5. Vos droits
            </h2>
            <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Droit d'accès", desc: "Consulter les données que nous détenons sur vous" },
                { title: "Droit de rectification", desc: "Corriger les données inexactes ou incomplètes" },
                { title: "Droit à l'effacement", desc: "Demander la suppression de vos données" },
                { title: "Droit à la portabilité", desc: "Récupérer vos données dans un format lisible" },
                { title: "Droit d'opposition", desc: "Vous opposer au traitement de vos données" },
                { title: "Droit de limitation", desc: "Limiter le traitement de vos données" }
              ].map((right, index) => (
                <div key={index} className={`p-4 rounded-xl border ${
                  isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
                }`}>
                  <h3 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                    {right.title}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {right.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className={`mt-6 p-4 rounded-xl border ${
              isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-blue-50 border-blue-200'
            }`}>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Pour exercer vos droits :</strong> Contactez-nous à privacy@tandhif.com ou via votre espace client. 
                Nous répondrons dans un délai maximum de 30 jours.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              6. Conservation des données
            </h2>
            <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités 
              pour lesquelles elles ont été collectées :
            </p>
            <div className="space-y-4">
              <div className={`p-4 rounded-xl border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                    Données de compte actif
                  </span>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Durée de la relation contractuelle
                  </span>
                </div>
              </div>
              <div className={`p-4 rounded-xl border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                    Données de facturation
                  </span>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    10 ans (obligation légale)
                  </span>
                </div>
              </div>
              <div className={`p-4 rounded-xl border ${
                isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex justify-between items-center">
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>
                    Données de navigation
                  </span>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    13 mois maximum
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <div className={`mt-16 p-8 rounded-xl border ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-6 w-6 text-[#FEE21B] mr-3" />
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                Questions sur la confidentialité ?
              </h3>
            </div>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Notre délégué à la protection des données est à votre disposition pour toute question 
              concernant le traitement de vos données personnelles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl border ${
                isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-white border-gray-200'
              }`}>
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  Email
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  privacy@tandhif.com
                </p>
              </div>
              <div className={`p-4 rounded-xl border ${
                isDark ? 'bg-gray-700/50 border-gray-600' : 'bg-white border-gray-200'
              }`}>
                <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                  Courrier
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  DPO Tandhif<br />
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;