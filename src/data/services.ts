export interface Service {
  id: string;
  name: string;
  image: string;
  description: string;
}
import * as serviceImages from '../data/serviceImages';

// Using high-quality stock images from Pexels for each service
export const servicesData: Record<string, Service[]> = {
  fr: [
  {
    id: 'household',
    name: 'Ménage',
    image: serviceImages.default.menage,
    description: "Nettoyage régulier ou ponctuel pour un intérieur impeccable."
  },
  {
    id: 'voiture',
    name: 'Voiture',
    image: serviceImages.default.voiture,
    description: 'Nettoyage intérieur & extérieur, sièges, vitres, moquette…'
  },
  {
    id: 'vêtements',
    name: 'Vêtement',
    image: serviceImages.default.vetements,
    description: 'Nettoyage, détachage, repassage par vos voisins cleaners.'
  },
  {
    id: 'chaussures',
    name: 'Chaussure',
    image: serviceImages.default.chaussures,
    description: 'Nettoyage à la main ou vapeur selon matière (cuir, tissu).'
  },
  {
    id: 'canapés',
    name: 'Canapé',
    image: serviceImages.default.canapes,
    description: 'Traitement en profondeur pour tissu, cuir, microfibre…'
  },
  {
    id: 'fauteuils',
    name: 'Fauteuil',
    image: serviceImages.default.fauteuils,
    description: 'Nettoyage à la main ou injection/extraction selon la matière.'
  },
  {
    id: 'tapis',
    name: 'Tapis',
    image: serviceImages.default.tapis,
    description: 'Aspiration, détachage, traitement anti-acariens.'
  },
  {
    id: 'moquette',
    name: 'Moquette',
    image: serviceImages.default.moquette,
    description: 'Aspiration, shampoing et détachage de tous types de moquettes.'
  },
  {
    id: 'toilettage',
    name: 'Toilettage',
    image: serviceImages.default.toilettage,
    description: 'Toilettage complet pour chiens, chats et NAC, à domicile ou sur site.'
  },
  {
    id: 'matelas',
    name: 'Matelas',
    image: serviceImages.default.matelas,
    description: 'Nettoyage, désinfection et anti-acariens pour un sommeil sain.'
  },
  {
    id: 'vitres',
    name: 'Vitre',
    image: serviceImages.default.vitres,
    description: 'Intérieur et extérieur, sans trace, pour maisons ou bureaux.'
  },
  {
    id: 'vitrines',
    name: 'Vitrine',
    image: serviceImages.default.vitrines,
    description: 'Nettoyage sans traces, intérieur/extérieur, commerces.'
  },
  {
    id: 'moto',
    name: 'Moto',
    image: serviceImages.default.moto,
    description: 'Nettoyage complet (carrosserie, jantes, chrome).'
  },
  {
    id: 'pressing',
    name: 'Pressing',
    image: serviceImages.default.pressing,
    description: 'Collecte à domicile, dépôt au pressing, retour rapide.'
  },
  {
    id: 'dératisation',
    name: 'Dératisation',
    image: serviceImages.default.deratisation,
    description: 'Traitement contre tous types de nuisibles : rats, souris, cafards, punaises, fourmis, etc.'
  },
  {
    id: 'terrasse',
    name: 'Terrasse',
    image: serviceImages.default.terrasse,
    description: 'Nettoyage des dalles, bois ou pierre, avec évacuation des déchets.'
  },
  {
    id: 'toiture',
    name: 'Toiture',
    image: serviceImages.default.toiture,
    description: 'Démoussage, nettoyage haute pression, traitement préventif.'
  },
  {
    id: 'gouttière',
    name: 'Gouttière',
    image: serviceImages.default.gouttiere,
    description: 'Dégorgement, nettoyage, vérification de l’écoulement.'
  },
  {
    id: 'jardin',
    name: 'Jardin',
    image: serviceImages.default.jardin,
    description: 'Tonte, désherbage, débroussaillage, soufflage, évacuation.'
  },
  {
    id: 'bureau',
    name: 'Bureau',
    image: serviceImages.default.bureau,
    description: 'Postes de travail, zones communes, sanitaires.'
  },
  {
    id: 'sous-sol',
    name: 'Sous-sol',
    image: serviceImages.default.sous_sol,
    description: 'Nettoyage humide ou sec selon le revêtement.'
  },
  {
    id: 'plafond',
    name: 'Plafond',
    image: serviceImages.default.plafond,
    description: 'Détachage, retrait de toiles, poussière, moisissure.'
  },
  {
    id: 'façade',
    name: 'Façade',
    image: serviceImages.default.facade,
    description: 'Nettoyage haute pression, traitement anti-pollution.'
  },
  {
    id: 'mur',
    name: 'Mur',
    image: serviceImages.default.mur,
    description: 'Nettoyage doux ou profond selon matériau et salissure.'
  },
  {
    id: 'grenier',
    name: 'Grenier',
    image: serviceImages.default.grenier,
    description: 'Dépoussiérage, débarras, nettoyage total ou partiel.'
  },
  {
    id: 'fin de chantier',
    name: 'Fin de chantier',
    image: serviceImages.default.fin_de_chantier,
    description: 'Nettoyage complet post-travaux, résidus, poussières.'
  },
  {
    id: 'piscine',
    name: 'Piscine',
    image: serviceImages.default.piscine,
    description: 'Nettoyage fond, ligne d’eau, contrôle et évacuation.'
  },
  {
    id: 'volet & store',
    name: 'Volet & store',
    image: serviceImages.default.volet_and_store,
    description: 'Dépoussiérage, nettoyage à la vapeur ou à la main.'
  },
  {
    id: 'cuisinière',
    name: 'Cuisinière',
    image: serviceImages.default.cuisiniere,
    description: 'Nettoyage complet : plaques, four, boutons, inox…'
  },
  {
    id: 'hotte',
    name: 'Hotte',
    image: serviceImages.default.hotte,
    description: 'Nettoyage et dégraissage intérieur & extérieur.'
  },
  {
    id: 'four',
    name: 'Four',
    image: serviceImages.default.four,
    description: 'Décapage, dégraissage, désinfection haute température.'
  },
  {
    id: 'réfrigérateur',
    name: 'Réfrigérateur',
    image: serviceImages.default.refrigerateur,
    description: 'Dégivrage, désinfection, intérieur + joints.'
  },
  {
    id: 'graffiti',
    name: 'Graffiti',
    image: serviceImages.default.graffiti,
    description: 'Effacement sur murs, façades ou vitrines avec produits adaptés.'
  },
  {
    id: 'radiateur',
    name: 'Radiateur',
    image: serviceImages.default.radiateur,
    description: 'Dépoussiérage intérieur/extérieur, dégraissage.'
  },
  {
    id: 'clôture',
    name: 'Clôture',
    image: serviceImages.default.cloture,
    description: 'Démoussage, nettoyage, entretien visuel et structurel.'
  },
  {
    id: 'climatiseur',
    name: 'Climatiseur',
    image: serviceImages.default.climatiseur,
    description: 'Nettoyage filtres + coque extérieure, antibactérien.'
  },
  {
    id: 'panneau solaire',
    name: 'Panneau solaire',
    image: serviceImages.default.panneau_solaire,
    description: 'Nettoyage non abrasif pour optimiser la performance.'
  },
  {
    id: 'parking',
    name: 'Parking',
    image: serviceImages.default.parking,
    description: 'Balayage, soufflage, enlèvement déchets, lavage haute pression.'
  },
  {
    id: 'cheminée',
    name: 'Cheminée',
    image: serviceImages.default.cheminee,
    description: 'Aspiration cendres, nettoyage du foyer et des parois.'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    image: serviceImages.default.commercial,
    description: 'Bureaux, boutiques, entrepôts, nettoyage adapté pro.'
  },
  {
    id: 'immeuble',
    name: 'Immeuble',
    image: serviceImages.default.immeuble,
    description: 'Parties communes, escaliers, vitres, sols.'
  },
  {
    id: 'poubelles',
    name: 'Poubelle',
    image: serviceImages.default.poubelles,
    description: 'Nettoyage bac à ordures, désinfection, désodorisation.'
  },
  {
    id: 'tombe',
    name: 'Tombe',
    image: serviceImages.default.tombe,
    description: 'Nettoyage, entretien, fleurissement selon les souhaits.'
  },
  {
    id: 'après sinistre',
    name: 'Après sinistre',
    image: serviceImages.default.apres_sinistre,
    description: 'Remise en état après dégât des eaux, feu, ou inondation.'
  },
  {
    id: 'bateau',
    name: 'Bateau',
    image: serviceImages.default.bateau,
    description: 'Nettoyage coque, pont, intérieur cabine et sellerie.'
  }
],
  en: [
  {
    id: 'household',
    name: 'Household',
    image: serviceImages.default.menage,
    description: 'Regular or one-time cleaning for a spotless home.'
  },
  {
    id: 'voiture',
    name: 'Car',
    image: serviceImages.default.voiture,
    description: 'Interior & exterior cleaning, seats, windows, carpet…'
  },
  {
    id: 'vêtements',
    name: 'Clothes',
    image: serviceImages.default.vetements,
    description: 'Cleaning, stain removal, ironing by your local cleaners.'
  },
  {
    id: 'chaussures',
    name: 'Shoes',
    image: serviceImages.default.chaussures,
    description: 'Hand or steam cleaning depending on material (leather, fabric).'
  },
  {
    id: 'canapés',
    name: 'Sofas',
    image: serviceImages.default.canapes,
    description: 'Deep treatment for fabric, leather, microfiber, etc.'
  },
  {
    id: 'fauteuils',
    name: 'Armchairs',
    image: serviceImages.default.fauteuils,
    description: 'Hand cleaning or injection/extraction based on material.'
  },
  {
    id: 'tapis',
    name: 'Rugs',
    image: serviceImages.default.tapis,
    description: 'Vacuuming, stain removal, anti-mite treatment.'
  },
  {
    id: 'moquette',
    name: 'Carpet',
    image: serviceImages.default.moquette,
    description: 'Vacuuming, shampooing, and stain removal for all types.'
  },
  {
    id: 'toilettage',
    name: 'Pet Grooming',
    image: serviceImages.default.toilettage,
    description: 'Full grooming for dogs, cats, and exotic pets, at home or on-site.'
  },
  {
    id: 'matelas',
    name: 'Mattress',
    image: serviceImages.default.matelas,
    description: 'Cleaning, disinfection, and anti-mite treatment for healthy sleep.'
  },
  {
    id: 'vitres',
    name: 'Windows',
    image: serviceImages.default.vitres,
    description: 'Streak-free interior and exterior cleaning for homes or offices.'
  },
  {
    id: 'vitrines',
    name: 'Storefronts',
    image: serviceImages.default.vitrines,
    description: 'Streak-free cleaning inside/outside for shops.'
  },
  {
    id: 'moto',
    name: 'Motorcycle',
    image: serviceImages.default.moto,
    description: 'Complete cleaning (body, rims, chrome).'
  },
  {
    id: 'pressing',
    name: 'Dry Cleaning',
    image: serviceImages.default.pressing,
    description: 'Home pickup, drop-off to dry cleaner, and quick return.'
  },
  {
    id: 'dératisation',
    name: 'Pest Control',
    image: serviceImages.default.deratisation,
    description: 'Treatment for all types of pests: rats, mice, cockroaches, bedbugs, ants, etc.'
  },
  {
    id: 'terrasse',
    name: 'Terrace',
    image: serviceImages.default.terrasse,
    description: 'Cleaning of slabs, wood, or stone with waste removal.'
  },
  {
    id: 'toiture',
    name: 'Roof',
    image: serviceImages.default.toiture,
    description: 'Moss removal, high-pressure cleaning, preventive treatment.'
  },
  {
    id: 'gouttière',
    name: 'Gutter',
    image: serviceImages.default.gouttiere,
    description: 'Unclogging, cleaning, flow inspection.'
  },
  {
    id: 'jardin',
    name: 'Garden',
    image: serviceImages.default.jardin,
    description: 'Mowing, weeding, clearing, blowing, waste removal.'
  },
  {
    id: 'bureau',
    name: 'Office',
    image: serviceImages.default.bureau,
    description: 'Workstations, shared spaces, restrooms.'
  },
  {
    id: 'sous-sol',
    name: 'Basement',
    image: serviceImages.default.sous_sol,
    description: 'Wet or dry cleaning depending on floor type.'
  },
  {
    id: 'plafond',
    name: 'Ceiling',
    image: serviceImages.default.plafond,
    description: 'Stain removal, cobweb removal, dusting, mold cleanup.'
  },
  {
    id: 'façade',
    name: 'Facade',
    image: serviceImages.default.facade,
    description: 'High-pressure cleaning, anti-pollution treatment.'
  },
  {
    id: 'mur',
    name: 'Wall',
    image: serviceImages.default.mur,
    description: 'Gentle or deep cleaning depending on material and dirt.'
  },
  {
    id: 'grenier',
    name: 'Attic',
    image: serviceImages.default.grenier,
    description: 'Dusting, clearing, full or partial cleaning.'
  },
  {
    id: 'fin de chantier',
    name: 'Post-Renovation',
    image: serviceImages.default.fin_de_chantier,
    description: 'Thorough post-work cleaning, debris and dust removal.'
  },
  {
    id: 'piscine',
    name: 'Pool',
    image: serviceImages.default.piscine,
    description: 'Cleaning floor, waterline, inspection, and waste removal.'
  },
  {
    id: 'volet & store',
    name: 'Shutters & Blinds',
    image: serviceImages.default.volet_and_store,
    description: 'Dusting, steam or hand cleaning.'
  },
  {
    id: 'cuisinière',
    name: 'Stove',
    image: serviceImages.default.cuisiniere,
    description: 'Complete cleaning: burners, oven, knobs, stainless steel…'
  },
  {
    id: 'hotte',
    name: 'Range Hood',
    image: serviceImages.default.hotte,
    description: 'Interior and exterior cleaning and degreasing.'
  },
  {
    id: 'four',
    name: 'Oven',
    image: serviceImages.default.four,
    description: 'Scrubbing, degreasing, high-temperature disinfection.'
  },
  {
    id: 'réfrigérateur',
    name: 'Refrigerator',
    image: serviceImages.default.refrigerateur,
    description: 'Defrosting, disinfection, interior + seals.'
  },
  {
    id: 'graffiti',
    name: 'Graffiti',
    image: serviceImages.default.graffiti,
    description: 'Removal from walls, facades, or windows with suitable products.'
  },
  {
    id: 'radiateur',
    name: 'Radiator',
    image: serviceImages.default.radiateur,
    description: 'Interior/exterior dusting, degreasing.'
  },
  {
    id: 'clôture',
    name: 'Fence',
    image: serviceImages.default.cloture,
    description: 'Moss removal, cleaning, visual and structural maintenance.'
  },
  {
    id: 'climatiseur',
    name: 'Air Conditioner',
    image: serviceImages.default.climatiseur,
    description: 'Cleaning filters + outer shell, antibacterial treatment.'
  },
  {
    id: 'panneau solaire',
    name: 'Solar Panel',
    image: serviceImages.default.panneau_solaire,
    description: 'Non-abrasive cleaning to optimize performance.'
  },
  {
    id: 'parking',
    name: 'Parking',
    image: serviceImages.default.parking,
    description: 'Sweeping, blowing, waste removal, high-pressure washing.'
  },
  {
    id: 'cheminée',
    name: 'Chimney',
    image: serviceImages.default.cheminee,
    description: 'Ash vacuuming, cleaning of hearth and walls.'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    image: serviceImages.default.commercial,
    description: 'Offices, shops, warehouses, cleaning tailored for businesses.'
  },
  {
    id: 'immeuble',
    name: 'Building',
    image: serviceImages.default.immeuble,
    description: 'Common areas, staircases, windows, floors.'
  },
  {
    id: 'poubelles',
    name: 'Trash Bins',
    image: serviceImages.default.poubelles,
    description: 'Bin cleaning, disinfection, deodorization.'
  },
  {
    id: 'tombe',
    name: 'Grave',
    image: serviceImages.default.tombe,
    description: 'Cleaning, maintenance, and floral decoration as requested.'
  },
  {
    id: 'après sinistre',
    name: 'Post-Disaster',
    image: serviceImages.default.apres_sinistre,
    description: 'Restoration after water damage, fire, or flood.'
  },
  {
    id: 'bateau',
    name: 'Boat',
    image: serviceImages.default.bateau,
    description: 'Cleaning of hull, deck, cabin interior, and upholstery.'
  }
],
  ar: [
  { id: 'household', name: 'تنظيف المنازل', image: serviceImages.default.menage, description: 'تنظيف منتظم أو لمرة واحدة للحصول على منزل نظيف تمامًا.' },
  { id: 'voiture', name: 'السيارة', image: serviceImages.default.voiture, description: 'تنظيف داخلي وخارجي، المقاعد، النوافذ، السجاد...' },
  { id: 'vêtements', name: 'الملابس', image: serviceImages.default.vetements, description: 'تنظيف، إزالة البقع، وكيّ بواسطة منظفين محليين.' },
  { id: 'chaussures', name: 'الأحذية', image: serviceImages.default.chaussures, description: 'تنظيف يدوي أو بالبخار حسب نوع المادة (جلد، قماش).' },
  { id: 'canapés', name: 'الأرائك', image: serviceImages.default.canapes, description: 'تنظيف عميق للأقمشة، الجلد، الألياف الدقيقة...' },
  { id: 'fauteuils', name: 'الكراسي', image: serviceImages.default.fauteuils, description: 'تنظيف يدوي أو بحقن/استخراج حسب نوع المادة.' },
  { id: 'tapis', name: 'السجاد', image: serviceImages.default.tapis, description: 'شفط، إزالة البقع، ومعالجة مضادة للعث.' },
  { id: 'moquette', name: 'الموكيت', image: serviceImages.default.moquette, description: 'شفط، غسل بالشامبو، وإزالة البقع لجميع أنواع الموكيت.' },
  { id: 'toilettage', name: 'تجميل الحيوانات', image: serviceImages.default.toilettage, description: 'تجميل كامل للكلاب والقطط والحيوانات الصغيرة في المنزل أو في الموقع.' },
  { id: 'matelas', name: 'المراتب', image: serviceImages.default.matelas, description: 'تنظيف، تعقيم، معالجة مضادة للعث لنوم صحي.' },
  { id: 'vitres', name: 'النوافذ', image: serviceImages.default.vitres, description: 'تنظيف داخلي وخارجي دون ترك أثر، للمنازل أو المكاتب.' },
  { id: 'vitrines', name: 'الواجهات الزجاجية', image: serviceImages.default.vitrines, description: 'تنظيف بلا آثار من الداخل والخارج للمحلات التجارية.' },
  { id: 'moto', name: 'الدراجة النارية', image: serviceImages.default.moto, description: 'تنظيف شامل للهيكل، العجلات، الكروم.' },
  { id: 'pressing', name: 'مصبغة', image: serviceImages.default.pressing, description: 'استلام من المنزل، توصيل للمصبغة، وإرجاع سريع.' },
  { id: 'dératisation', name: 'مكافحة الآفات', image: serviceImages.default.deratisation, description: 'علاج شامل ضد الفئران، الصراصير، البق، النمل، وغيرها.' },
  { id: 'terrasse', name: 'الشرفة', image: serviceImages.default.terrasse, description: 'تنظيف بلاط، خشب أو حجر مع إزالة النفايات.' },
  { id: 'toiture', name: 'السطح', image: serviceImages.default.toiture, description: 'إزالة الطحالب، تنظيف بالضغط العالي، علاج وقائي.' },
  { id: 'gouttière', name: 'المزاريب', image: serviceImages.default.gouttiere, description: 'تسليك، تنظيف، فحص التصريف.' },
  { id: 'jardin', name: 'الحديقة', image: serviceImages.default.jardin, description: 'جز العشب، إزالة الأعشاب، تقليم، تنظيف وتفريغ.' },
  { id: 'bureau', name: 'المكتب', image: serviceImages.default.bureau, description: 'تنظيف المكاتب، المناطق المشتركة، ودورات المياه.' },
  { id: 'sous-sol', name: 'القبو', image: serviceImages.default.sous_sol, description: 'تنظيف جاف أو رطب حسب نوع الأرضية.' },
  { id: 'plafond', name: 'السقف', image: serviceImages.default.plafond, description: 'إزالة البقع، الغبار، العناكب والعفن.' },
  { id: 'façade', name: 'الواجهة', image: serviceImages.default.facade, description: 'تنظيف بالضغط العالي ومعالجة ضد التلوث.' },
  { id: 'mur', name: 'الجدار', image: serviceImages.default.mur, description: 'تنظيف خفيف أو عميق حسب المادة ونوع الأوساخ.' },
  { id: 'grenier', name: 'العلية', image: serviceImages.default.grenier, description: 'إزالة الغبار، التنظيف الكلي أو الجزئي، التفريغ.' },
  { id: 'fin de chantier', name: 'نهاية الأشغال', image: serviceImages.default.fin_de_chantier, description: 'تنظيف كامل بعد أعمال البناء، إزالة الغبار والأنقاض.' },
  { id: 'piscine', name: 'المسبح', image: serviceImages.default.piscine, description: 'تنظيف القاع، خط الماء، الفحص والتفريغ.' },
  { id: 'volet & store', name: 'الستائر والمظلات', image: serviceImages.default.volet_and_store, description: 'إزالة الغبار والتنظيف بالبخار أو اليد.' },
  { id: 'cuisinière', name: 'موقد الطهي', image: serviceImages.default.cuisiniere, description: 'تنظيف كامل: الشعلات، الفرن، الأزرار، الفولاذ المقاوم للصدأ...' },
  { id: 'hotte', name: 'الشفاط', image: serviceImages.default.hotte, description: 'تنظيف وإزالة الدهون من الداخل والخارج.' },
  { id: 'four', name: 'الفرن', image: serviceImages.default.four, description: 'إزالة الشحوم، تنظيف وتعقيم بدرجات حرارة عالية.' },
  { id: 'réfrigérateur', name: 'الثلاجة', image: serviceImages.default.refrigerateur, description: 'إزالة الثلج، تعقيم، وتنظيف داخلي مع الحشوات.' },
  { id: 'graffiti', name: 'الكتابة على الجدران', image: serviceImages.default.graffiti, description: 'إزالة على الجدران، الواجهات أو الزجاج باستخدام منتجات متخصصة.' },
  { id: 'radiateur', name: 'المدفأة', image: serviceImages.default.radiateur, description: 'إزالة الغبار من الداخل والخارج، إزالة الدهون.' },
  { id: 'clôture', name: 'السياج', image: serviceImages.default.cloture, description: 'إزالة الطحالب، التنظيف، والصيانة العامة.' },
  { id: 'climatiseur', name: 'مكيف الهواء', image: serviceImages.default.climatiseur, description: 'تنظيف الفلاتر والغلاف الخارجي، مضاد للبكتيريا.' },
  { id: 'panneau solaire', name: 'الألواح الشمسية', image: serviceImages.default.panneau_solaire, description: 'تنظيف غير كاشط لتحسين الكفاءة.' },
  { id: 'parking', name: 'موقف السيارات', image: serviceImages.default.parking, description: 'كنس، إزالة النفايات، غسيل بالضغط العالي.' },
  { id: 'cheminée', name: 'المدخنة', image: serviceImages.default.cheminee, description: 'شفط الرماد، تنظيف الموقد والجدران الداخلية.' },
  { id: 'commercial', name: 'المجالات التجارية', image: serviceImages.default.commercial, description: 'مكاتب، محلات، مستودعات، تنظيف احترافي مخصص.' },
  { id: 'immeuble', name: 'المبنى', image: serviceImages.default.immeuble, description: 'المناطق المشتركة، السلالم، النوافذ، الأرضيات.' },
  { id: 'poubelles', name: 'سلال المهملات', image: serviceImages.default.poubelles, description: 'تنظيف الحاويات، تعقيم، إزالة الروائح الكريهة.' },
  { id: 'tombe', name: 'القبر', image: serviceImages.default.tombe, description: 'تنظيف، صيانة، وتزيين حسب الطلب.' },
  { id: 'après sinistre', name: 'بعد الكوارث', image: serviceImages.default.apres_sinistre, description: 'ترميم بعد أضرار المياه، الحرائق أو الفيضانات.' },
  { id: 'bateau', name: 'القارب', image: serviceImages.default.bateau, description: 'تنظيف الهيكل، السطح، الكبينة، والمقاعد.' }
],
  es: [
  {
    id: 'household',
    name: 'Limpieza del hogar',
    image: serviceImages.default.menage,
    description: 'Limpieza regular o puntual para un interior impecable.'
  },
  {
    id: 'voiture',
    name: 'Coche',
    image: serviceImages.default.voiture,
    description: 'Limpieza interior y exterior, asientos, cristales, alfombra...'
  },
  {
    id: 'vêtements',
    name: 'Ropa',
    image: serviceImages.default.vetements,
    description: 'Lavado, quitado de manchas y planchado por limpiadores cercanos.'
  },
  {
    id: 'chaussures',
    name: 'Zapatos',
    image: serviceImages.default.chaussures,
    description: 'Limpieza a mano o con vapor según el material (cuero, tela).'
  },
  {
    id: 'canapés',
    name: 'Sofás',
    image: serviceImages.default.canapes,
    description: 'Limpieza profunda de tela, cuero, microfibra...'
  },
  {
    id: 'fauteuils',
    name: 'Sillones',
    image: serviceImages.default.fauteuils,
    description: 'Limpieza a mano o por inyección/extracción según el material.'
  },
  {
    id: 'tapis',
    name: 'Alfombras',
    image: serviceImages.default.tapis,
    description: 'Aspirado, eliminación de manchas, tratamiento antiácaros.'
  },
  {
    id: 'moquette',
    name: 'Moqueta',
    image: serviceImages.default.moquette,
    description: 'Aspirado, champú y eliminación de manchas de todo tipo de moquetas.'
  },
  {
    id: 'toilettage',
    name: 'Peluquería para mascotas',
    image: serviceImages.default.toilettage,
    description: 'Peluquería completa para perros, gatos y NAC, a domicilio o en sitio.'
  },
  {
    id: 'matelas',
    name: 'Colchones',
    image: serviceImages.default.matelas,
    description: 'Limpieza, desinfección y antiácaros para un sueño saludable.'
  },
  {
    id: 'vitres',
    name: 'Ventanas',
    image: serviceImages.default.vitres,
    description: 'Interior y exterior, sin marcas, para casas u oficinas.'
  },
  {
    id: 'vitrines',
    name: 'Escaparates',
    image: serviceImages.default.vitrines,
    description: 'Limpieza sin marcas, interior/exterior, para comercios.'
  },
  {
    id: 'moto',
    name: 'Moto',
    image: serviceImages.default.moto,
    description: 'Limpieza completa (carrocería, llantas, cromo).'
  },
  {
    id: 'pressing',
    name: 'Tintorería',
    image: serviceImages.default.pressing,
    description: 'Recogida a domicilio, entrega en tintorería y devolución rápida.'
  },
  {
    id: 'dératisation',
    name: 'Desratización',
    image: serviceImages.default.deratisation,
    description: 'Tratamiento contra todo tipo de plagas: ratas, ratones, cucarachas, chinches, hormigas, etc.'
  },
  {
    id: 'terrasse',
    name: 'Terraza',
    image: serviceImages.default.terrasse,
    description: 'Limpieza de losas, madera o piedra, con eliminación de residuos.'
  },
  {
    id: 'toiture',
    name: 'Techo',
    image: serviceImages.default.toiture,
    description: 'Eliminación de musgo, limpieza a presión, tratamiento preventivo.'
  },
  {
    id: 'gouttière',
    name: 'Canalón',
    image: serviceImages.default.gouttiere,
    description: 'Desatasco, limpieza y verificación del flujo de agua.'
  },
  {
    id: 'jardin',
    name: 'Jardín',
    image: serviceImages.default.jardin,
    description: 'Corte de césped, deshierbe, desbroce, soplado y evacuación.'
  },
  {
    id: 'bureau',
    name: 'Oficina',
    image: serviceImages.default.bureau,
    description: 'Puestos de trabajo, zonas comunes, sanitarios.'
  },
  {
    id: 'sous-sol',
    name: 'Sótano',
    image: serviceImages.default.sous_sol,
    description: 'Limpieza húmeda o en seco según el tipo de superficie.'
  },
  {
    id: 'plafond',
    name: 'Techo',
    image: serviceImages.default.plafond,
    description: 'Eliminación de manchas, telarañas, polvo y moho.'
  },
  {
    id: 'façade',
    name: 'Fachada',
    image: serviceImages.default.facade,
    description: 'Limpieza a alta presión, tratamiento antipolución.'
  },
  {
    id: 'mur',
    name: 'Muro',
    image: serviceImages.default.mur,
    description: 'Limpieza suave o profunda según el material y la suciedad.'
  },
  {
    id: 'grenier',
    name: 'Ático',
    image: serviceImages.default.grenier,
    description: 'Desempolvado, vaciado, limpieza total o parcial.'
  },
  {
    id: 'fin de chantier',
    name: 'Fin de obra',
    image: serviceImages.default.fin_de_chantier,
    description: 'Limpieza completa post-obra: residuos, polvo.'
  },
  {
    id: 'piscine',
    name: 'Piscina',
    image: serviceImages.default.piscine,
    description: 'Limpieza del fondo, línea de agua, control y evacuación.'
  },
  {
    id: 'volet & store',
    name: 'Persianas y toldos',
    image: serviceImages.default.volet_and_store,
    description: 'Desempolvado, limpieza a vapor o manual.'
  },
  {
    id: 'cuisinière',
    name: 'Cocina',
    image: serviceImages.default.cuisiniere,
    description: 'Limpieza completa: placas, horno, botones, acero inoxidable...'
  },
  {
    id: 'hotte',
    name: 'Campana extractora',
    image: serviceImages.default.hotte,
    description: 'Limpieza y desengrasado interior y exterior.'
  },
  {
    id: 'four',
    name: 'Horno',
    image: serviceImages.default.four,
    description: 'Desincrustación, desengrasado, desinfección a alta temperatura.'
  },
  {
    id: 'réfrigérateur',
    name: 'Refrigerador',
    image: serviceImages.default.refrigerateur,
    description: 'Descongelado, desinfección, interior y juntas.'
  },
  {
    id: 'graffiti',
    name: 'Graffiti',
    image: serviceImages.default.graffiti,
    description: 'Eliminación de grafitis en muros, fachadas o cristales con productos adecuados.'
  },
  {
    id: 'radiateur',
    name: 'Radiador',
    image: serviceImages.default.radiateur,
    description: 'Desempolvado interior/exterior, desengrasado.'
  },
  {
    id: 'clôture',
    name: 'Valla',
    image: serviceImages.default.cloture,
    description: 'Eliminación de musgo, limpieza, mantenimiento visual y estructural.'
  },
  {
    id: 'climatiseur',
    name: 'Aire acondicionado',
    image: serviceImages.default.climatiseur,
    description: 'Limpieza de filtros y carcasa exterior, tratamiento antibacteriano.'
  },
  {
    id: 'panneau solaire',
    name: 'Panel solar',
    image: serviceImages.default.panneau_solaire,
    description: 'Limpieza no abrasiva para optimizar el rendimiento.'
  },
  {
    id: 'parking',
    name: 'Estacionamiento',
    image: serviceImages.default.parking,
    description: 'Barrido, soplado, recogida de residuos, limpieza a presión.'
  },
  {
    id: 'cheminée',
    name: 'Chimenea',
    image: serviceImages.default.cheminee,
    description: 'Aspirado de cenizas, limpieza del hogar y paredes.'
  },
  {
    id: 'commercial',
    name: 'Comercial',
    image: serviceImages.default.commercial,
    description: 'Oficinas, tiendas, almacenes, limpieza profesional adaptada.'
  },
  {
    id: 'immeuble',
    name: 'Edificio',
    image: serviceImages.default.immeuble,
    description: 'Zonas comunes, escaleras, ventanas, suelos.'
  },
  {
    id: 'poubelles',
    name: 'Contenedores',
    image: serviceImages.default.poubelles,
    description: 'Limpieza de cubos de basura, desinfección y desodorización.'
  },
  {
    id: 'tombe',
    name: 'Tumba',
    image: serviceImages.default.tombe,
    description: 'Limpieza, mantenimiento, decoración floral según preferencias.'
  },
  {
    id: 'après sinistre',
    name: 'Después de siniestros',
    image: serviceImages.default.apres_sinistre,
    description: 'Restauración después de daños por agua, fuego o inundaciones.'
  },
  {
    id: 'bateau',
    name: 'Barco',
    image: serviceImages.default.bateau,
    description: 'Limpieza del casco, cubierta, interior de cabina y tapicería.'
  }
],
  pt: [
  {
    id: 'household',
    name: 'Limpeza doméstica',
    image: serviceImages.default.menage,
    description: 'Limpeza regular ou pontual para um interior impecável.'
  },
  {
    id: 'voiture',
    name: 'Carro',
    image: serviceImages.default.voiture,
    description: 'Limpeza interna e externa, bancos, vidros, carpetes...'
  },
  {
    id: 'vêtements',
    name: 'Roupas',
    image: serviceImages.default.vetements,
    description: 'Lavagem, remoção de manchas e passar a ferro por profissionais locais.'
  },
  {
    id: 'chaussures',
    name: 'Sapatos',
    image: serviceImages.default.chaussures,
    description: 'Limpeza à mão ou a vapor, dependendo do material (couro, tecido).'
  },
  {
    id: 'canapés',
    name: 'Sofás',
    image: serviceImages.default.canapes,
    description: 'Tratamento profundo para tecidos, couro, microfibra...'
  },
  {
    id: 'fauteuils',
    name: 'Poltronas',
    image: serviceImages.default.fauteuils,
    description: 'Limpeza à mão ou por injeção/extração, conforme o material.'
  },
  {
    id: 'tapis',
    name: 'Tapetes',
    image: serviceImages.default.tapis,
    description: 'Aspiração, remoção de manchas e tratamento antiácaros.'
  },
  {
    id: 'moquette',
    name: 'Alcatifa',
    image: serviceImages.default.moquette,
    description: 'Aspiração, lavagem com shampoo e remoção de manchas de todos os tipos.'
  },
  {
    id: 'toilettage',
    name: 'Tosa e banho',
    image: serviceImages.default.toilettage,
    description: 'Higiene completa de cães, gatos e pequenos animais, em domicílio ou no local.'
  },
  {
    id: 'matelas',
    name: 'Colchões',
    image: serviceImages.default.matelas,
    description: 'Limpeza, desinfeção e tratamento antiácaros para um sono saudável.'
  },
  {
    id: 'vitres',
    name: 'Vidros',
    image: serviceImages.default.vitres,
    description: 'Interior e exterior, sem manchas, para residências ou escritórios.'
  },
  {
    id: 'vitrines',
    name: 'Vitrines',
    image: serviceImages.default.vitrines,
    description: 'Limpeza sem marcas, interior/exterior para lojas.'
  },
  {
    id: 'moto',
    name: 'Moto',
    image: serviceImages.default.moto,
    description: 'Limpeza completa (carroçaria, rodas, cromados).'
  },
  {
    id: 'pressing',
    name: 'Lavandaria',
    image: serviceImages.default.pressing,
    description: 'Coleta em domicílio, entrega na lavandaria e devolução rápida.'
  },
  {
    id: 'dératisation',
    name: 'Desratização',
    image: serviceImages.default.deratisation,
    description: 'Tratamento contra todo tipo de pragas: ratos, baratas, formigas, percevejos etc.'
  },
  {
    id: 'terrasse',
    name: 'Terraço',
    image: serviceImages.default.terrasse,
    description: 'Limpeza de lajes, madeira ou pedra, com remoção de resíduos.'
  },
  {
    id: 'toiture',
    name: 'Telhado',
    image: serviceImages.default.toiture,
    description: 'Limpeza com alta pressão, remoção de musgo, tratamento preventivo.'
  },
  {
    id: 'gouttière',
    name: 'Calha',
    image: serviceImages.default.gouttiere,
    description: 'Desobstrução, limpeza e verificação do escoamento.'
  },
  {
    id: 'jardin',
    name: 'Jardim',
    image: serviceImages.default.jardin,
    description: 'Corte de relva, capina, roçagem, sopro e remoção de resíduos.'
  },
  {
    id: 'bureau',
    name: 'Escritório',
    image: serviceImages.default.bureau,
    description: 'Postos de trabalho, áreas comuns, sanitários.'
  },
  {
    id: 'sous-sol',
    name: 'Porão',
    image: serviceImages.default.sous_sol,
    description: 'Limpeza úmida ou a seco conforme o revestimento.'
  },
  {
    id: 'plafond',
    name: 'Teto',
    image: serviceImages.default.plafond,
    description: 'Remoção de manchas, teias, poeira e bolor.'
  },
  {
    id: 'façade',
    name: 'Fachada',
    image: serviceImages.default.facade,
    description: 'Lavagem com jato de alta pressão, tratamento antipoluição.'
  },
  {
    id: 'mur',
    name: 'Parede',
    image: serviceImages.default.mur,
    description: 'Limpeza leve ou profunda conforme o material e sujidade.'
  },
  {
    id: 'grenier',
    name: 'Sótão',
    image: serviceImages.default.grenier,
    description: 'Remoção de poeira, limpeza parcial ou total e esvaziamento.'
  },
  {
    id: 'fin de chantier',
    name: 'Pós-obra',
    image: serviceImages.default.fin_de_chantier,
    description: 'Limpeza completa após obras: poeira, resíduos.'
  },
  {
    id: 'piscine',
    name: 'Piscina',
    image: serviceImages.default.piscine,
    description: 'Limpeza do fundo, linha d’água, controle e drenagem.'
  },
  {
    id: 'volet & store',
    name: 'Persianas e toldos',
    image: serviceImages.default.volet_and_store,
    description: 'Remoção de pó, limpeza a vapor ou manual.'
  },
  {
    id: 'cuisinière',
    name: 'Fogão',
    image: serviceImages.default.cuisiniere,
    description: 'Limpeza completa: bocas, forno, botões, aço inox...'
  },
  {
    id: 'hotte',
    name: 'Exaustor',
    image: serviceImages.default.hotte,
    description: 'Limpeza e desengorduramento por dentro e por fora.'
  },
  {
    id: 'four',
    name: 'Forno',
    image: serviceImages.default.four,
    description: 'Desengorduramento, decapagem, desinfeção a alta temperatura.'
  },
  {
    id: 'réfrigérateur',
    name: 'Frigorífico',
    image: serviceImages.default.refrigerateur,
    description: 'Descongelamento, desinfeção e limpeza interna com vedantes.'
  },
  {
    id: 'graffiti',
    name: 'Grafite',
    image: serviceImages.default.graffiti,
    description: 'Remoção em paredes, fachadas ou vitrines com produtos adequados.'
  },
  {
    id: 'radiateur',
    name: 'Radiador',
    image: serviceImages.default.radiateur,
    description: 'Limpeza interna e externa, remoção de gordura e pó.'
  },
  {
    id: 'clôture',
    name: 'Cerca',
    image: serviceImages.default.cloture,
    description: 'Limpeza, remoção de musgo, inspeção visual e manutenção.'
  },
  {
    id: 'climatiseur',
    name: 'Ar-condicionado',
    image: serviceImages.default.climatiseur,
    description: 'Limpeza de filtros e exterior, tratamento antibacteriano.'
  },
  {
    id: 'panneau solaire',
    name: 'Painel solar',
    image: serviceImages.default.panneau_solaire,
    description: 'Limpeza não abrasiva para otimizar o desempenho.'
  },
  {
    id: 'parking',
    name: 'Estacionamento',
    image: serviceImages.default.parking,
    description: 'Varrição, sopro, remoção de lixo, lavagem a jato.'
  },
  {
    id: 'cheminée',
    name: 'Lareira',
    image: serviceImages.default.cheminee,
    description: 'Aspiração de cinzas, limpeza da base e das paredes.'
  },
  {
    id: 'commercial',
    name: 'Comercial',
    image: serviceImages.default.commercial,
    description: 'Escritórios, lojas, armazéns – limpeza profissional adaptada.'
  },
  {
    id: 'immeuble',
    name: 'Prédio',
    image: serviceImages.default.immeuble,
    description: 'Áreas comuns, escadas, vidros e pavimentos.'
  },
  {
    id: 'poubelles',
    name: 'Lixeiras',
    image: serviceImages.default.poubelles,
    description: 'Lavagem de contentores, desinfeção e desodorização.'
  },
  {
    id: 'tombe',
    name: 'Túmulo',
    image: serviceImages.default.tombe,
    description: 'Limpeza, manutenção e ornamentação floral conforme solicitado.'
  },
  {
    id: 'après sinistre',
    name: 'Após desastre',
    image: serviceImages.default.apres_sinistre,
    description: 'Restauração após danos por água, fogo ou inundações.'
  },
  {
    id: 'bateau',
    name: 'Barco',
    image: serviceImages.default.bateau,
    description: 'Limpeza de casco, convés, cabine interna e estofos.'
  }
],
  it: [
  {
    id: 'household',
    name: 'Pulizia domestica',
    image: serviceImages.default.menage,
    description: 'Pulizia regolare o occasionale per una casa impeccabile.'
  },
  {
    id: 'voiture',
    name: 'Auto',
    image: serviceImages.default.voiture,
    description: 'Pulizia interna ed esterna, sedili, vetri, moquette…'
  },
  {
    id: 'vêtements',
    name: 'Abiti',
    image: serviceImages.default.vetements,
    description: 'Lavaggio, smacchiatura, stiratura a cura di cleaner locali.'
  },
  {
    id: 'chaussures',
    name: 'Scarpe',
    image: serviceImages.default.chaussures,
    description: 'Pulizia a mano o a vapore a seconda del materiale (pelle, tessuto).'
  },
  {
    id: 'canapés',
    name: 'Divani',
    image: serviceImages.default.canapes,
    description: 'Trattamento profondo per tessuti, pelle, microfibra…'
  },
  {
    id: 'fauteuils',
    name: 'Poltrone',
    image: serviceImages.default.fauteuils,
    description: 'Pulizia a mano o a iniezione/estrazione in base al materiale.'
  },
  {
    id: 'tapis',
    name: 'Tappeti',
    image: serviceImages.default.tapis,
    description: 'Aspirazione, smacchiatura, trattamento antiacaro.'
  },
  {
    id: 'moquette',
    name: 'Moquette',
    image: serviceImages.default.moquette,
    description: 'Aspirazione, shampoo e smacchiatura per tutti i tipi di moquette.'
  },
  {
    id: 'toilettage',
    name: 'Toelettatura',
    image: serviceImages.default.toilettage,
    description: 'Toelettatura completa per cani, gatti e NAC, a domicilio o in sede.'
  },
  {
    id: 'matelas',
    name: 'Materassi',
    image: serviceImages.default.matelas,
    description: 'Pulizia, disinfezione e antiacaro per un sonno sano.'
  },
  {
    id: 'vitres',
    name: 'Vetri',
    image: serviceImages.default.vitres,
    description: 'Interni ed esterni, senza aloni, per case o uffici.'
  },
  {
    id: 'vitrines',
    name: 'Vetrine',
    image: serviceImages.default.vitrines,
    description: 'Pulizia senza aloni, interna/esterna, per negozi.'
  },
  {
    id: 'moto',
    name: 'Moto',
    image: serviceImages.default.moto,
    description: 'Pulizia completa (carrozzeria, cerchi, cromature).'
  },
  {
    id: 'pressing',
    name: 'Lavanderia',
    image: serviceImages.default.pressing,
    description: 'Ritiro a domicilio, consegna in lavanderia e ritorno rapido.'
  },
  {
    id: 'dératisation',
    name: 'Derattizzazione',
    image: serviceImages.default.deratisation,
    description: 'Trattamento contro tutti i tipi di infestanti: topi, ratti, scarafaggi, cimici, formiche, ecc.'
  },
  {
    id: 'terrasse',
    name: 'Terrazza',
    image: serviceImages.default.terrasse,
    description: 'Pulizia di piastrelle, legno o pietra con rimozione dei rifiuti.'
  },
  {
    id: 'toiture',
    name: 'Tetto',
    image: serviceImages.default.toiture,
    description: 'Rimozione muschio, lavaggio ad alta pressione, trattamento preventivo.'
  },
  {
    id: 'gouttière',
    name: 'Grondaia',
    image: serviceImages.default.gouttiere,
    description: 'Svuotamento, pulizia e verifica dello scorrimento dell’acqua.'
  },
  {
    id: 'jardin',
    name: 'Giardino',
    image: serviceImages.default.jardin,
    description: 'Taglio erba, diserbo, decespugliamento, soffiaggio, sgombero.'
  },
  {
    id: 'bureau',
    name: 'Ufficio',
    image: serviceImages.default.bureau,
    description: 'Postazioni di lavoro, aree comuni, servizi igienici.'
  }
],
  de: [
  {
    id: 'household',
    name: 'Haushalt',
    image: serviceImages.default.menage,
    description: 'Regelmäßige oder einmalige Reinigung für ein makelloses Zuhause.'
  },
  {
    id: 'voiture',
    name: 'Auto',
    image: serviceImages.default.voiture,
    description: 'Innen- & Außenreinigung, Sitze, Fenster, Teppiche…'
  },
  {
    id: 'vêtements',
    name: 'Kleidung',
    image: serviceImages.default.vetements,
    description: 'Reinigung, Fleckenentfernung und Bügeln durch lokale Helfer.'
  },
  {
    id: 'chaussures',
    name: 'Schuhe',
    image: serviceImages.default.chaussures,
    description: 'Hand- oder Dampfreinigung je nach Material (Leder, Stoff).'
  },
  {
    id: 'canapés',
    name: 'Sofas',
    image: serviceImages.default.canapes,
    description: 'Tiefenreinigung für Stoff, Leder, Mikrofaser…'
  },
  {
    id: 'fauteuils',
    name: 'Sessel',
    image: serviceImages.default.fauteuils,
    description: 'Handreinigung oder Sprüh-Extraktion je nach Material.'
  },
  {
    id: 'tapis',
    name: 'Teppiche',
    image: serviceImages.default.tapis,
    description: 'Staubsaugen, Fleckenentfernung, Milbenbehandlung.'
  },
  {
    id: 'moquette',
    name: 'Auslegware',
    image: serviceImages.default.moquette,
    description: 'Staubsaugen, Shampoo und Fleckenentfernung aller Arten von Teppichen.'
  },
  {
    id: 'toilettage',
    name: 'Tierpflege',
    image: serviceImages.default.toilettage,
    description: 'Komplette Pflege für Hunde, Katzen und Kleintiere – zu Hause oder vor Ort.'
  },
  {
    id: 'matelas',
    name: 'Matratzen',
    image: serviceImages.default.matelas,
    description: 'Reinigung, Desinfektion und Milbenentfernung für gesunden Schlaf.'
  },
  {
    id: 'vitres',
    name: 'Fenster',
    image: serviceImages.default.vitres,
    description: 'Innen und außen, streifenfrei – für Zuhause oder Büro.'
  },
  {
    id: 'vitrines',
    name: 'Schaufenster',
    image: serviceImages.default.vitrines,
    description: 'Streifenfreie Reinigung innen und außen für Geschäfte.'
  },
  {
    id: 'moto',
    name: 'Motorrad',
    image: serviceImages.default.moto,
    description: 'Komplettreinigung (Karosserie, Felgen, Chrom).'
  },
  {
    id: 'pressing',
    name: 'Reinigung',
    image: serviceImages.default.pressing,
    description: 'Abholung zu Hause, Bringservice zur Reinigung, schnelle Rückgabe.'
  },
  {
    id: 'dératisation',
    name: 'Schädlingsbekämpfung',
    image: serviceImages.default.deratisation,
    description: 'Bekämpfung von Ratten, Mäusen, Kakerlaken, Bettwanzen, Ameisen usw.'
  },
  {
    id: 'terrasse',
    name: 'Terrasse',
    image: serviceImages.default.terrasse,
    description: 'Reinigung von Platten, Holz oder Stein mit Abfallentsorgung.'
  },
  {
    id: 'toiture',
    name: 'Dach',
    image: serviceImages.default.toiture,
    description: 'Moosentfernung, Hochdruckreinigung, vorbeugende Behandlung.'
  },
  {
    id: 'gouttière',
    name: 'Dachrinne',
    image: serviceImages.default.gouttiere,
    description: 'Reinigung, Entleerung und Prüfung des Wasserabflusses.'
  },
  {
    id: 'jardin',
    name: 'Garten',
    image: serviceImages.default.jardin,
    description: 'Rasenmähen, Unkraut entfernen, Freischneiden, Blasreinigung, Abtransport.'
  },
  {
    id: 'bureau',
    name: 'Büro',
    image: serviceImages.default.bureau,
    description: 'Arbeitsplätze, Gemeinschaftsbereiche, Sanitäranlagen.'
  }
],
  be: [
  {
    id: 'household',
    name: 'Прыбіранне дома',
    image: serviceImages.default.menage,
    description: 'Рэгулярнае або разавае прыбіранне для бездакорнай чысціні.'
  },
  {
    id: 'voiture',
    name: 'Аўтамабіль',
    image: serviceImages.default.voiture,
    description: 'Унутраная і знешняя чыстка, сядзенні, вокны, дываны…'
  },
  {
    id: 'vêtements',
    name: 'Адзенне',
    image: serviceImages.default.vetements,
    description: 'Пральня, выдаленне плямаў, прасаванне ад мясцовых спецыялістаў.'
  },
  {
    id: 'chaussures',
    name: 'Абутак',
    image: serviceImages.default.chaussures,
    description: 'Ручная або паравая чыстка ў залежнасці ад матэрыялу (скура, тканіна).'
  },
  {
    id: 'canapés',
    name: 'Дываны',
    image: serviceImages.default.canapes,
    description: 'Глыбокая апрацоўка тканіны, скуры, мікрафібры…'
  },
  {
    id: 'fauteuils',
    name: 'Крэслы',
    image: serviceImages.default.fauteuils,
    description: 'Ручная або экстракцыйная чыстка ў залежнасці ад матэрыялу.'
  },
  {
    id: 'tapis',
    name: 'Коверы',
    image: serviceImages.default.tapis,
    description: 'Пыласос, выдаленне плямаў, апрацоўка супраць пылавых клешчаў.'
  },
  {
    id: 'moquette',
    name: 'Кілімовае пакрыццё',
    image: serviceImages.default.moquette,
    description: 'Ачыстка, шампунь і выдаленне плямаў з любога тыпу пакрыцця.'
  },
  {
    id: 'toilettage',
    name: 'Дагляд за жывёламі',
    image: serviceImages.default.toilettage,
    description: 'Комплексны догляд за сабакамі, катамі і дробнымі жывёламі дома ці на месцы.'
  },
  {
    id: 'matelas',
    name: 'Матрацы',
    image: serviceImages.default.matelas,
    description: 'Чыстка, дэзінфекцыя і апрацоўка супраць клешчаў для здаровага сну.'
  },
  {
    id: 'vitres',
    name: 'Акно',
    image: serviceImages.default.vitres,
    description: 'Чыстка знутры і звонку без слядоў – для дома або офіса.'
  },
  {
    id: 'vitrines',
    name: 'Вітрыны',
    image: serviceImages.default.vitrines,
    description: 'Бясслядовая чыстка знутры і звонку – для крамаў.'
  },
  {
    id: 'moto',
    name: 'Матацыкл',
    image: serviceImages.default.moto,
    description: 'Поўная чыстка (кузаў, дыскі, хром).'
  },
  {
    id: 'pressing',
    name: 'Хімчыстка',
    image: serviceImages.default.pressing,
    description: 'Самавываз, дастаўка ў хімчыстку і хуткі зварот.'
  },
  {
    id: 'dératisation',
    name: 'Дэзынсекцыя',
    image: serviceImages.default.deratisation,
    description: 'Барацьба з шкоднікамі: пацукі, мышы, тараканы, клапы, мурашкі і г.д.'
  },
  {
    id: 'terrasse',
    name: 'Тэраса',
    image: serviceImages.default.terrasse,
    description: 'Ачыстка пліткі, дрэва або каменю з выдаленнем смецця.'
  },
  {
    id: 'toiture',
    name: 'Дах',
    image: serviceImages.default.toiture,
    description: 'Выдаленне моху, чыстка пад высокім ціскам, прафілактычная апрацоўка.'
  },
  {
    id: 'gouttière',
    name: 'Вадосток',
    image: serviceImages.default.gouttiere,
    description: 'Ачыстка, прамыванне, праверка праходнасці вады.'
  },
  {
    id: 'jardin',
    name: 'Сад',
    image: serviceImages.default.jardin,
    description: 'Касьба, праполка, абразанне, выдаленне лісця і вынас смецця.'
  },
  {
    id: 'bureau',
    name: 'Офіс',
    image: serviceImages.default.bureau,
    description: 'Працоўныя месцы, агульныя зоны, туалеты.'
  }
],
};