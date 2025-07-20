import React from 'react';
import { ArrowLeft, FileText, Calendar, Shield, AlertTriangle } from 'lucide-react';

interface TermsProps {
  isDark: boolean;
  onBack: () => void;
}

const Terms: React.FC<TermsProps> = ({ isDark, onBack }) => {
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
            <FileText className="h-8 w-8 text-[#FEE21B] mr-3" />
            <h1 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
              Conditions Générales d'Utilisation
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
          isDark ? 'bg-gray-800/50 border-r border-t border-b border-gray-700' : 'bg-yellow-50 border-r border-t border-b border-yellow-200'
        }`}>
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-[#FEE21B] mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                Information importante
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                En utilisant les services Tandhif, vous acceptez les présentes conditions générales d'utilisation. 
                Veuillez les lire attentivement avant d'utiliser notre plateforme.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className={`p-6 rounded-xl border mb-12 ${
          isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
        }`}>
          <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
            Table des matières
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              "1. Définitions",
              "2. Objet",
              "3. Acceptation des conditions",
              "4. Description des services",
              "5. Inscription et compte utilisateur",
              "6. Utilisation de la plateforme",
              "7. Obligations des utilisateurs",
              "8. Tarifs et paiement",
              "9. Annulation et remboursement",
              "10. Responsabilité",
              "11. Protection des données",
              "12. Propriété intellectuelle",
              "13. Modification des conditions",
              "14. Résiliation",
              "15. Droit applicable"
            ].map((item, index) => (
              <a
                key={index}
                href={`#section-${index + 1}`}
                className={`text-sm ${isDark ? 'text-gray-300 hover:text-[#FEE21B]' : 'text-gray-600 hover:text-[#FEE21B]'} 
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
              1. Définitions
            </h2>
            <div className={`prose max-w-none ${isDark ? 'prose-invert' : ''}`}>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Tandhif :</strong> Désigne la société Tandhif SAS, société par actions simplifiée au capital de 100 000 euros, 
                immatriculée au RCS de Paris sous le numéro 123 456 789, dont le siège social est situé 123 Avenue des Champs-Élysées, 75008 Paris.
              </p>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Plateforme :</strong> Désigne l'ensemble des services numériques proposés par Tandhif, accessibles via le site web 
                tandhif.fr et les applications mobiles iOS et Android.
              </p>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Utilisateur :</strong> Désigne toute personne physique ou morale utilisant la plateforme Tandhif.
              </p>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Client :</strong> Désigne l'utilisateur qui commande des services de nettoyage via la plateforme.
              </p>
              <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <strong>Cleaner :</strong> Désigne le prestataire de services de nettoyage inscrit sur la plateforme.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              2. Objet
            </h2>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Les présentes conditions générales d'utilisation (CGU) ont pour objet de définir les modalités et conditions 
              d'utilisation de la plateforme Tandhif, ainsi que les droits et obligations des parties dans ce cadre.
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Tandhif propose une plateforme numérique permettant de mettre en relation des clients avec des prestataires 
              de services de nettoyage qualifiés et vérifiés.
            </p>
          </section>

          {/* Section 3 */}
          <section id="section-3">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              3. Acceptation des conditions
            </h2>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              L'utilisation de la plateforme Tandhif implique l'acceptation pleine et entière des présentes CGU. 
              Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser nos services.
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              L'acceptation des CGU est matérialisée par la création d'un compte utilisateur ou par l'utilisation 
              de tout service proposé sur la plateforme.
            </p>
          </section>

          {/* Section 4 */}
          <section id="section-4">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              4. Description des services
            </h2>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Tandhif propose les services suivants :
            </p>
            <ul className={`list-disc list-inside space-y-2 mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Mise en relation entre clients et cleaners</li>
              <li>Système de réservation en ligne</li>
              <li>Gestion des paiements sécurisés</li>
              <li>Système d'évaluation et de notation</li>
              <li>Service client et support technique</li>
              <li>Assurance et garantie des prestations</li>
            </ul>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Les services de nettoyage incluent notamment : ménage à domicile, nettoyage de bureaux, 
              pressing, entretien de jardins, nettoyage de véhicules, et autres services spécialisés.
            </p>
          </section>

          {/* Section 5 */}
          <section id="section-5">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              5. Inscription et compte utilisateur
            </h2>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              L'inscription sur la plateforme est gratuite et ouverte à toute personne physique ou morale. 
              L'utilisateur s'engage à fournir des informations exactes et à jour.
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Chaque utilisateur est responsable de la confidentialité de ses identifiants de connexion 
              et de toutes les activités effectuées sous son compte.
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Tandhif se réserve le droit de suspendre ou supprimer tout compte en cas de violation des présentes CGU.
            </p>
          </section>

          {/* Section 6 */}
          <section id="section-6">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              6. Utilisation de la plateforme
            </h2>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              L'utilisateur s'engage à utiliser la plateforme conformément à sa destination et dans le respect 
              des lois et règlements en vigueur.
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Il est notamment interdit de :
            </p>
            <ul className={`list-disc list-inside space-y-2 mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Utiliser la plateforme à des fins illégales ou non autorisées</li>
              <li>Transmettre des contenus offensants, diffamatoires ou inappropriés</li>
              <li>Tenter de contourner les mesures de sécurité de la plateforme</li>
              <li>Utiliser des robots, scripts ou autres moyens automatisés</li>
              <li>Perturber le fonctionnement normal de la plateforme</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section id="section-7">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              7. Obligations des utilisateurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  Obligations des clients
                </h3>
                <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Fournir des informations exactes lors de la commande</li>
                  <li>Être présent ou représenté lors de la prestation</li>
                  <li>Permettre l'accès aux lieux à nettoyer</li>
                  <li>Respecter les cleaners et leur travail</li>
                  <li>Effectuer le paiement dans les délais convenus</li>
                </ul>
              </div>
              <div>
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  Obligations des cleaners
                </h3>
                <ul className={`list-disc list-inside space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Posséder les qualifications et assurances requises</li>
                  <li>Respecter les horaires convenus</li>
                  <li>Fournir un service de qualité professionnelle</li>
                  <li>Respecter la confidentialité et la propriété du client</li>
                  <li>Utiliser des produits et matériels appropriés</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section-8">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              8. Tarifs et paiement
            </h2>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Les tarifs des services sont affichés de manière transparente sur la plateforme. 
              Ils incluent la prestation du cleaner et les frais de service Tandhif.
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Le paiement s'effectue exclusivement via la plateforme, par carte bancaire ou autres moyens 
              de paiement acceptés. Le paiement est sécurisé et traité par nos partenaires certifiés.
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              La facturation intervient après validation de la prestation par le client ou automatiquement 
              après un délai de 48 heures.
            </p>
          </section>

          {/* Section 9 */}
          <section id="section-9">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              9. Annulation et remboursement
            </h2>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Les clients peuvent annuler leur commande jusqu'à 2 heures avant l'heure prévue de la prestation 
              sans frais. En cas d'annulation tardive, des frais peuvent s'appliquer.
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              En cas de prestation non conforme ou non réalisée, le client peut demander un remboursement 
              total ou partiel dans un délai de 48 heures.
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Tandhif se réserve le droit d'annuler une commande en cas de force majeure ou de circonstances 
              exceptionnelles, avec remboursement intégral.
            </p>
          </section>

          {/* Section 10 */}
          <section id="section-10">
            <h2 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
              10. Responsabilité
            </h2>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Tandhif agit en qualité d'intermédiaire entre les clients et les cleaners. 
              La responsabilité de la prestation incombe au cleaner qui la réalise.
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Tandhif met en place une assurance couvrant les dommages pouvant survenir lors des prestations, 
              dans les limites et conditions définies au contrat d'assurance.
            </p>
            <p className={`mb-4 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              La responsabilité de Tandhif est limitée au montant de la prestation concernée et ne peut 
              excéder les dommages directs prouvés.
            </p>
          </section>

          {/* Contact Section */}
          <div className={`mt-16 p-8 rounded-xl border ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-[#FEE21B] mr-3" />
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                Questions sur nos conditions ?
              </h3>
            </div>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Si vous avez des questions concernant ces conditions générales d'utilisation, 
              n'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FEE21B] text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-yellow-300 hover:scale-105">
                Nous contacter
              </button>
              <button className={`border-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white' 
                  : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-black'
              }`}>
                Centre d'aide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;