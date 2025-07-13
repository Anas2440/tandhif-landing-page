export interface Service {
  id: string;
  name: string;
  image: string;
  description: string;
}

// Using high-quality stock images from Pexels for each service
export const servicesData: Record<string, Service[]> = {
  fr: [
    {
      id: 'household',
      name: 'Ménage',
      image: 'src/images/Menage.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: "Nettoyage régulier ou ponctuel pour un intérieur impeccable."
    },
    {
      id: 'voiture',
      name: 'Voiture',
      image: 'src/images/Voiture.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage intérieur & extérieur, sièges, vitres, moquette…'
    },
    {
      id: 'vêtements',
      name: 'Vêtements',
      image: 'src/images/Vêtements.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage, détachage, repassage par vos voisins cleaners.'
    },
    {
      id: 'chaussures',
      name: 'Chaussures',
      image: 'src/images/Chaussures.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage à la main ou vapeur selon matière (cuir, tissu).'
    },
    {
      id: 'canapés',
      name: 'Canapés',
      image: 'src/images/Canapés.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Traitement en profondeur pour tissu, cuir, microfibre…'
    },
    {
      id: 'fauteuils',
      name: 'Fauteuils',
      image: 'src/images/Fauteuils.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage à la main ou injection/extraction selon la matière.'
    },
    {
      id: 'tapis',
      name: 'Tapis',
      image: 'src/images/Tapis.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Aspiration, détachage, traitement anti-acariens.'
    },
    {
      id: 'moquette',
      name: 'Moquette',
      image: 'src/images/Moquette.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Aspiration, shampoing et détachage de tous types de moquettes.'
    },
    {
      id: 'toilettage',
      name: 'Toilettage',
      image: 'src/images/Toilettage.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Toilettage complet pour chiens, chats et NAC, à domicile ou sur site.'
    },
    {
      id: 'matelas',
      name: 'Matelas',
      image: 'src/images/Matelas.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage, désinfection et anti-acariens pour un sommeil sain.'
    },
    {
      id: 'vitres',
      name: 'Vitres',
      image: 'src/images/Vitres.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Intérieur et extérieur, sans trace, pour maisons ou bureaux.'
    },
    {
      id: 'vitrines',
      name: 'Vitrines',
      image: 'src/images/Vitrines.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage sans traces, intérieur/extérieur, commerces.'
    },
    {
      id: 'moto',
      name: 'Moto',
      image: 'src/images/Moto.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage complet (carrosserie, jantes, chrome).'
    },
    {
      id: 'pressing',
      name: 'Pressing',
      image: 'src/images/Pressing.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Collecte à domicile, dépôt au pressing, retour rapide.'
    },
    {
      id: 'dératisation',
      name: 'Dératisation',
      image: 'src/images/Dératisation.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Traitement contre tous types de nuisibles : rats, souris, cafards, punaises, fourmis, etc.'
    },
    {
      id: 'terrasse',
      name: 'Terrasse',
      image: 'src/images/Terrasse.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage des dalles, bois ou pierre, avec évacuation des déchets.'
    },
    {
      id: 'toiture',
      name: 'Toiture',
      image: 'src/images/Toiture.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Démoussage, nettoyage haute pression, traitement préventif.'
    },
    {
      id: 'gouttière',
      name: 'Gouttière',
      image: 'src/images/Gouttière.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dégorgement, nettoyage, vérification de l’écoulement.'
    },
    {
      id: 'jardin',
      name: 'Jardin',
      image: 'src/images/Jardin.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Tonte, désherbage, débroussaillage, soufflage, évacuation.'
    },
    {
      id: 'bureau',
      name: 'Bureau',
      image: 'src/images/Bureau.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Postes de travail, zones communes, sanitaires.'
    },
    {
      id: 'sous-sol',
      name: 'Sous-sol',
      image: 'src/images/Sous-sol.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage humide ou sec selon le revêtement.'
    },
    {
      id: 'plafond',
      name: 'Plafond',
      image: 'src/images/Plafond.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Détachage, retrait de toiles, poussière, moisissure.'
    },
    {
      id: 'façade',
      name: 'Façade',
      image: 'src/images/Façade.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage haute pression, traitement anti-pollution.'
    },
    {
      id: 'mur',
      name: 'Mur',
      image: 'src/images/Mur.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage doux ou profond selon matériau et salissure.'
    },
    {
      id: 'grenier',
      name: 'Grenier',
      image: 'src/images/Grenier.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dépoussiérage, débarras, nettoyage total ou partiel.'
    },
    {
      id: 'fin de chantier',
      name: 'Fin de chantier',
      image: 'src/images/Fin de chantier.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage complet post-travaux, résidus, poussières.'
    },
    {
      id: 'piscine',
      name: 'Piscine',
      image: 'src/images/Piscine.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage fond, ligne d’eau, contrôle et évacuation.'
    },
    {
      id: 'volet & store',
      name: 'Volet & store',
      image: 'src/images/Volet & store.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dépoussiérage, nettoyage à la vapeur ou à la main.'
    },
    {
      id: 'cuisinière',
      name: 'Cuisinière',
      image: 'src/images/Cuisinière.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage complet : plaques, four, boutons, inox…'
    },
    {
      id: 'hotte',
      name: 'Hotte',
      image: 'src/images/Hotte.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage et dégraissage intérieur & extérieur.'
    },
    {
      id: 'four',
      name: 'Four',
      image: 'src/images/Four.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Décapage, dégraissage, désinfection haute température.'
    },
    {
      id: 'réfrigérateur',
      name: 'Réfrigérateur',
      image: 'src/images/Réfrigérateur.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dégivrage, désinfection, intérieur + joints.'
    },
    {
      id: 'graffiti',
      name: 'Graffiti',
      image: 'src/images/Graffiti.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Effacement sur murs, façades ou vitrines avec produits adaptés.'
    },
    {
      id: 'radiateur',
      name: 'Radiateur',
      image: 'src/images/Radiateur.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Dépoussiérage intérieur/extérieur, dégraissage.'
    },
    {
      id: 'clôture',
      name: 'Clôture',
      image: 'src/images/Clôture.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Démoussage, nettoyage, entretien visuel et structurel.'
    },
    {
      id: 'climatiseur',
      name: 'Climatiseur',
      image: 'src/images/Climatiseur.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage filtres + coque extérieure, antibactérien.'
    },
    {
      id: 'panneau solaire',
      name: 'Panneau solaire',
      image: 'src/images/Panneau solaire.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage non abrasif pour optimiser la performance.'
    },
    {
      id: 'parking',
      name: 'Parking',
      image: 'src/images/Parking.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Balayage, soufflage, enlèvement déchets, lavage haute pression.'
    },
    {
      id: 'cheminée',
      name: 'Cheminée',
      image: 'src/images/Cheminée.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Aspiration cendres, nettoyage du foyer et des parois.'
    },
    {
      id: 'commercial',
      name: 'Commercial',
      image: 'src/images/Commercial.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Bureaux, boutiques, entrepôts, nettoyage adapté pro.'
    },
    {
      id: 'immeuble',
      name: 'Immeuble',
      image: 'src/images/Immeuble.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Parties communes, escaliers, vitres, sols.'
    },
    {
      id: 'poubelles',
      name: 'Poubelles',
      image: 'src/images/Poubelles.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage bac à ordures, désinfection, désodorisation.'
    },
    {
      id: 'tombe',
      name: 'Tombe',
      image: 'src/images/Tombe.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage, entretien, fleurissement selon les souhaits.'
    },
    {
      id: 'après sinistre',
      name: 'Après sinistre',
      image: 'src/images/Après sinistre.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Remise en état après dégât des eaux, feu, ou inondation.'
    },
    {
      id: 'bateau',
      name: 'Bateau',
      image: 'src/images/Bateau.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nettoyage coque, pont, intérieur cabine et sellerie.'
    }
  ],
  en: [
  {
    id: 'household',
    name: 'Household',
    image: 'src/images/Menage.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Regular or one-time cleaning for a spotless home.'
  },
  {
    id: 'voiture',
    name: 'Car',
    image: 'src/images/Voiture.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Interior & exterior cleaning, seats, windows, carpet…'
  },
  {
    id: 'vêtements',
    name: 'Clothes',
    image: 'src/images/Vêtements.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cleaning, stain removal, ironing by your local cleaners.'
  },
  {
    id: 'chaussures',
    name: 'Shoes',
    image: 'src/images/Chaussures.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Hand or steam cleaning depending on material (leather, fabric).'
  },
  {
    id: 'canapés',
    name: 'Sofas',
    image: 'src/images/Canapés.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Deep treatment for fabric, leather, microfiber, etc.'
  },
  {
    id: 'fauteuils',
    name: 'Armchairs',
    image: 'src/images/Fauteuils.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Hand cleaning or injection/extraction based on material.'
  },
  {
    id: 'tapis',
    name: 'Rugs',
    image: 'src/images/Tapis.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Vacuuming, stain removal, anti-mite treatment.'
  },
  {
    id: 'moquette',
    name: 'Carpet',
    image: 'src/images/Moquette.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Vacuuming, shampooing, and stain removal for all types.'
  },
  {
    id: 'toilettage',
    name: 'Pet Grooming',
    image: 'src/images/Toilettage.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Full grooming for dogs, cats, and exotic pets, at home or on-site.'
  },
  {
    id: 'matelas',
    name: 'Mattress',
    image: 'src/images/Matelas.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cleaning, disinfection, and anti-mite treatment for healthy sleep.'
  },
  {
    id: 'vitres',
    name: 'Windows',
    image: 'src/images/Vitres.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Streak-free interior and exterior cleaning for homes or offices.'
  },
  {
    id: 'vitrines',
    name: 'Storefronts',
    image: 'src/images/Vitrines.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Streak-free cleaning inside/outside for shops.'
  },
  {
    id: 'moto',
    name: 'Motorcycle',
    image: 'src/images/Moto.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete cleaning (body, rims, chrome).'
  },
  {
    id: 'pressing',
    name: 'Dry Cleaning',
    image: 'src/images/Pressing.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Home pickup, drop-off to dry cleaner, and quick return.'
  },
  {
    id: 'dératisation',
    name: 'Pest Control',
    image: 'src/images/Dératisation.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Treatment for all types of pests: rats, mice, cockroaches, bedbugs, ants, etc.'
  },
  {
    id: 'terrasse',
    name: 'Terrace',
    image: 'src/images/Terrasse.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cleaning of slabs, wood, or stone with waste removal.'
  },
  {
    id: 'toiture',
    name: 'Roof',
    image: 'src/images/Toiture.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Moss removal, high-pressure cleaning, preventive treatment.'
  },
  {
    id: 'gouttière',
    name: 'Gutter',
    image: 'src/images/Gouttière.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Unclogging, cleaning, flow inspection.'
  },
  {
    id: 'jardin',
    name: 'Garden',
    image: 'src/images/Jardin.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Mowing, weeding, clearing, blowing, waste removal.'
  },
  {
    id: 'bureau',
    name: 'Office',
    image: 'src/images/Bureau.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Workstations, shared spaces, restrooms.'
  },
  {
    id: 'sous-sol',
    name: 'Basement',
    image: 'src/images/Sous-sol.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Wet or dry cleaning depending on floor type.'
  },
  {
    id: 'plafond',
    name: 'Ceiling',
    image: 'src/images/Plafond.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Stain removal, cobweb removal, dusting, mold cleanup.'
  },
  {
    id: 'façade',
    name: 'Facade',
    image: 'src/images/Façade.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'High-pressure cleaning, anti-pollution treatment.'
  },
  {
    id: 'mur',
    name: 'Wall',
    image: 'src/images/Mur.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Gentle or deep cleaning depending on material and dirt.'
  },
  {
    id: 'grenier',
    name: 'Attic',
    image: 'src/images/Grenier.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Dusting, clearing, full or partial cleaning.'
  },
  {
    id: 'fin de chantier',
    name: 'Post-Renovation',
    image: 'src/images/Fin de chantier.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Thorough post-work cleaning, debris and dust removal.'
  },
  {
    id: 'piscine',
    name: 'Pool',
    image: 'src/images/Piscine.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cleaning floor, waterline, inspection, and waste removal.'
  },
  {
    id: 'volet & store',
    name: 'Shutters & Blinds',
    image: 'src/images/Volet & store.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Dusting, steam or hand cleaning.'
  },
  {
    id: 'cuisinière',
    name: 'Stove',
    image: 'src/images/Cuisinière.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Complete cleaning: burners, oven, knobs, stainless steel…'
  },
  {
    id: 'hotte',
    name: 'Range Hood',
    image: 'src/images/Hotte.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Interior and exterior cleaning and degreasing.'
  },
  {
    id: 'four',
    name: 'Oven',
    image: 'src/images/Four.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Scrubbing, degreasing, high-temperature disinfection.'
  },
  {
    id: 'réfrigérateur',
    name: 'Refrigerator',
    image: 'src/images/Réfrigérateur.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Defrosting, disinfection, interior + seals.'
  },
  {
    id: 'graffiti',
    name: 'Graffiti',
    image: 'src/images/Graffiti.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Removal from walls, facades, or windows with suitable products.'
  },
  {
    id: 'radiateur',
    name: 'Radiator',
    image: 'src/images/Radiateur.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Interior/exterior dusting, degreasing.'
  },
  {
    id: 'clôture',
    name: 'Fence',
    image: 'src/images/Clôture.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Moss removal, cleaning, visual and structural maintenance.'
  },
  {
    id: 'climatiseur',
    name: 'Air Conditioner',
    image: 'src/images/Climatiseur.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cleaning filters + outer shell, antibacterial treatment.'
  },
  {
    id: 'panneau solaire',
    name: 'Solar Panel',
    image: 'src/images/Panneau solaire.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Non-abrasive cleaning to optimize performance.'
  },
  {
    id: 'parking',
    name: 'Parking',
    image: 'src/images/Parking.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Sweeping, blowing, waste removal, high-pressure washing.'
  },
  {
    id: 'cheminée',
    name: 'Chimney',
    image: 'src/images/Cheminée.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Ash vacuuming, cleaning of hearth and walls.'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    image: 'src/images/Commercial.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Offices, shops, warehouses, cleaning tailored for businesses.'
  },
  {
    id: 'immeuble',
    name: 'Building',
    image: 'src/images/Immeuble.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Common areas, staircases, windows, floors.'
  },
  {
    id: 'poubelles',
    name: 'Trash Bins',
    image: 'src/images/Poubelles.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Bin cleaning, disinfection, deodorization.'
  },
  {
    id: 'tombe',
    name: 'Grave',
    image: 'src/images/Tombe.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cleaning, maintenance, and floral decoration as requested.'
  },
  {
    id: 'après sinistre',
    name: 'Post-Disaster',
    image: 'src/images/Après sinistre.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Restoration after water damage, fire, or flood.'
  },
  {
    id: 'bateau',
    name: 'Boat',
    image: 'src/images/Bateau.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Cleaning of hull, deck, cabin interior, and upholstery.'
  }
  ],
  ar: [
  { id: 'household', name: 'تنظيف المنازل', image: 'src/images/Menage.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف منتظم أو لمرة واحدة للحصول على منزل نظيف تمامًا.' },
  { id: 'voiture', name: 'السيارة', image: 'src/images/Voiture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف داخلي وخارجي، المقاعد، النوافذ، السجاد...' },
  { id: 'vêtements', name: 'الملابس', image: 'src/images/Vêtements.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف، إزالة البقع، وكيّ بواسطة منظفين محليين.' },
  { id: 'chaussures', name: 'الأحذية', image: 'src/images/Chaussures.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف يدوي أو بالبخار حسب نوع المادة (جلد، قماش).' },
  { id: 'canapés', name: 'الأرائك', image: 'src/images/Canapés.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف عميق للأقمشة، الجلد، الألياف الدقيقة...' },
  { id: 'fauteuils', name: 'الكراسي', image: 'src/images/Fauteuils.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف يدوي أو بحقن/استخراج حسب نوع المادة.' },
  { id: 'tapis', name: 'السجاد', image: 'src/images/Tapis.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'شفط، إزالة البقع، ومعالجة مضادة للعث.' },
  { id: 'moquette', name: 'الموكيت', image: 'src/images/Moquette.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'شفط، غسل بالشامبو، وإزالة البقع لجميع أنواع الموكيت.' },
  { id: 'toilettage', name: 'تجميل الحيوانات', image: 'src/images/Toilettage.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تجميل كامل للكلاب والقطط والحيوانات الصغيرة في المنزل أو في الموقع.' },
  { id: 'matelas', name: 'المراتب', image: 'src/images/Matelas.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف، تعقيم، معالجة مضادة للعث لنوم صحي.' },
  { id: 'vitres', name: 'النوافذ', image: 'src/images/Vitres.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف داخلي وخارجي دون ترك أثر، للمنازل أو المكاتب.' },
  { id: 'vitrines', name: 'الواجهات الزجاجية', image: 'src/images/Vitrines.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف بلا آثار من الداخل والخارج للمحلات التجارية.' },
  { id: 'moto', name: 'الدراجة النارية', image: 'src/images/Moto.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف شامل للهيكل، العجلات، الكروم.' },
  { id: 'pressing', name: 'مصبغة', image: 'src/images/Pressing.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'استلام من المنزل، توصيل للمصبغة، وإرجاع سريع.' },
  { id: 'dératisation', name: 'مكافحة الآفات', image: 'src/images/Dératisation.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'علاج شامل ضد الفئران، الصراصير، البق، النمل، وغيرها.' },
  { id: 'terrasse', name: 'الشرفة', image: 'src/images/Terrasse.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف بلاط، خشب أو حجر مع إزالة النفايات.' },
  { id: 'toiture', name: 'السطح', image: 'src/images/Toiture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'إزالة الطحالب، تنظيف بالضغط العالي، علاج وقائي.' },
  { id: 'gouttière', name: 'المزاريب', image: 'src/images/Gouttière.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تسليك، تنظيف، فحص التصريف.' },
  { id: 'jardin', name: 'الحديقة', image: 'src/images/Jardin.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'جز العشب، إزالة الأعشاب، تقليم، تنظيف وتفريغ.' },
  { id: 'bureau', name: 'المكتب', image: 'src/images/Bureau.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف المكاتب، المناطق المشتركة، ودورات المياه.' },
  { id: 'sous-sol', name: 'القبو', image: 'src/images/Sous-sol.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف جاف أو رطب حسب نوع الأرضية.' },
  { id: 'plafond', name: 'السقف', image: 'src/images/Plafond.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'إزالة البقع، الغبار، العناكب والعفن.' },
  { id: 'façade', name: 'الواجهة', image: 'src/images/Façade.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف بالضغط العالي ومعالجة ضد التلوث.' },
  { id: 'mur', name: 'الجدار', image: 'src/images/Mur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف خفيف أو عميق حسب المادة ونوع الأوساخ.' },
  { id: 'grenier', name: 'العلية', image: 'src/images/Grenier.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'إزالة الغبار، التنظيف الكلي أو الجزئي، التفريغ.' },
  { id: 'fin de chantier', name: 'نهاية الأشغال', image: 'src/images/Fin de chantier.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف كامل بعد أعمال البناء، إزالة الغبار والأنقاض.' },
  { id: 'piscine', name: 'المسبح', image: 'src/images/Piscine.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف القاع، خط الماء، الفحص والتفريغ.' },
  { id: 'volet & store', name: 'الستائر والمظلات', image: 'src/images/Volet & store.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'إزالة الغبار والتنظيف بالبخار أو اليد.' },
  { id: 'cuisinière', name: 'موقد الطهي', image: 'src/images/Cuisinière.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف كامل: الشعلات، الفرن، الأزرار، الفولاذ المقاوم للصدأ...' },
  { id: 'hotte', name: 'الشفاط', image: 'src/images/Hotte.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف وإزالة الدهون من الداخل والخارج.' },
  { id: 'four', name: 'الفرن', image: 'src/images/Four.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'إزالة الشحوم، تنظيف وتعقيم بدرجات حرارة عالية.' },
  { id: 'réfrigérateur', name: 'الثلاجة', image: 'src/images/Réfrigérateur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'إزالة الثلج، تعقيم، وتنظيف داخلي مع الحشوات.' },
  { id: 'graffiti', name: 'الكتابة على الجدران', image: 'src/images/Graffiti.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'إزالة على الجدران، الواجهات أو الزجاج باستخدام منتجات متخصصة.' },
  { id: 'radiateur', name: 'المدفأة', image: 'src/images/Radiateur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'إزالة الغبار من الداخل والخارج، إزالة الدهون.' },
  { id: 'clôture', name: 'السياج', image: 'src/images/Clôture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'إزالة الطحالب، التنظيف، والصيانة العامة.' },
  { id: 'climatiseur', name: 'مكيف الهواء', image: 'src/images/Climatiseur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف الفلاتر والغلاف الخارجي، مضاد للبكتيريا.' },
  { id: 'panneau solaire', name: 'الألواح الشمسية', image: 'src/images/Panneau solaire.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف غير كاشط لتحسين الكفاءة.' },
  { id: 'parking', name: 'موقف السيارات', image: 'src/images/Parking.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'كنس، إزالة النفايات، غسيل بالضغط العالي.' },
  { id: 'cheminée', name: 'المدخنة', image: 'src/images/Cheminée.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'شفط الرماد، تنظيف الموقد والجدران الداخلية.' },
  { id: 'commercial', name: 'المجالات التجارية', image: 'src/images/Commercial.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'مكاتب، محلات، مستودعات، تنظيف احترافي مخصص.' },
  { id: 'immeuble', name: 'المبنى', image: 'src/images/Immeuble.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'المناطق المشتركة، السلالم، النوافذ، الأرضيات.' },
  { id: 'poubelles', name: 'سلال المهملات', image: 'src/images/Poubelles.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف الحاويات، تعقيم، إزالة الروائح الكريهة.' },
  { id: 'tombe', name: 'القبر', image: 'src/images/Tombe.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف، صيانة، وتزيين حسب الطلب.' },
  { id: 'après sinistre', name: 'بعد الكوارث', image: 'src/images/Après sinistre.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'ترميم بعد أضرار المياه، الحرائق أو الفيضانات.' },
  { id: 'bateau', name: 'القارب', image: 'src/images/Bateau.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'تنظيف الهيكل، السطح، الكبينة، والمقاعد.' }
  ],
  es: [
  { id: 'household', name: 'Limpieza del hogar', image: 'src/images/Menage.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza regular o puntual para un interior impecable.' },
  { id: 'voiture', name: 'Coche', image: 'src/images/Voiture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza interior y exterior, asientos, cristales, alfombra...' },
  { id: 'vêtements', name: 'Ropa', image: 'src/images/Vêtements.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Lavado, quitado de manchas y planchado por limpiadores cercanos.' },
  { id: 'chaussures', name: 'Zapatos', image: 'src/images/Chaussures.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza a mano o con vapor según el material (cuero, tela).' },
  { id: 'canapés', name: 'Sofás', image: 'src/images/Canapés.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza profunda de tela, cuero, microfibra...' },
  { id: 'fauteuils', name: 'Sillones', image: 'src/images/Fauteuils.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza a mano o por inyección/extracción según el material.' },
  { id: 'tapis', name: 'Alfombras', image: 'src/images/Tapis.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Aspirado, eliminación de manchas, tratamiento antiácaros.' },
  { id: 'moquette', name: 'Moqueta', image: 'src/images/Moquette.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Aspirado, champú y eliminación de manchas de todo tipo de moquetas.' },
  { id: 'toilettage', name: 'Peluquería para mascotas', image: 'src/images/Toilettage.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Peluquería completa para perros, gatos y NAC, a domicilio o en sitio.' },
  { id: 'matelas', name: 'Colchones', image: 'src/images/Matelas.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza, desinfección y antiácaros para un sueño saludable.' },
  { id: 'vitres', name: 'Ventanas', image: 'src/images/Vitres.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Interior y exterior, sin marcas, para casas u oficinas.' },
  { id: 'vitrines', name: 'Escaparates', image: 'src/images/Vitrines.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza sin marcas, interior/exterior, para comercios.' },
  { id: 'moto', name: 'Moto', image: 'src/images/Moto.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza completa (carrocería, llantas, cromo).' },
  { id: 'pressing', name: 'Tintorería', image: 'src/images/Pressing.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Recogida a domicilio, entrega en tintorería y devolución rápida.' },
  { id: 'dératisation', name: 'Desratización', image: 'src/images/Dératisation.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Tratamiento contra todo tipo de plagas: ratas, ratones, cucarachas, chinches, hormigas, etc.' },
  { id: 'terrasse', name: 'Terraza', image: 'src/images/Terrasse.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza de losas, madera o piedra, con eliminación de residuos.' },
  { id: 'toiture', name: 'Techo', image: 'src/images/Toiture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Eliminación de musgo, limpieza a presión, tratamiento preventivo.' },
  { id: 'gouttière', name: 'Canalón', image: 'src/images/Gouttière.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Desatasco, limpieza y verificación del flujo de agua.' },
  { id: 'jardin', name: 'Jardín', image: 'src/images/Jardin.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Corte de césped, deshierbe, desbroce, soplado y evacuación.' },
  { id: 'bureau', name: 'Oficina', image: 'src/images/Bureau.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Puestos de trabajo, zonas comunes, sanitarios.' },
  { id: 'sous-sol', name: 'Sótano', image: 'src/images/Sous-sol.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza húmeda o en seco según el tipo de superficie.' },
  { id: 'plafond', name: 'Techo', image: 'src/images/Plafond.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Eliminación de manchas, telarañas, polvo y moho.' },
  { id: 'façade', name: 'Fachada', image: 'src/images/Façade.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza a alta presión, tratamiento antipolución.' },
  { id: 'mur', name: 'Muro', image: 'src/images/Mur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza suave o profunda según el material y la suciedad.' },
  { id: 'grenier', name: 'Ático', image: 'src/images/Grenier.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Desempolvado, vaciado, limpieza total o parcial.' },
  { id: 'fin de chantier', name: 'Fin de obra', image: 'src/images/Fin de chantier.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza completa post-obra: residuos, polvo.' },
  { id: 'piscine', name: 'Piscina', image: 'src/images/Piscine.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza del fondo, línea de agua, control y evacuación.' },
  { id: 'volet & store', name: 'Persianas y toldos', image: 'src/images/Volet & store.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Desempolvado, limpieza a vapor o manual.' },
  { id: 'cuisinière', name: 'Cocina', image: 'src/images/Cuisinière.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza completa: placas, horno, botones, acero inoxidable...' },
  { id: 'hotte', name: 'Campana extractora', image: 'src/images/Hotte.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza y desengrasado interior y exterior.' },
  { id: 'four', name: 'Horno', image: 'src/images/Four.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Desincrustación, desengrasado, desinfección a alta temperatura.' },
  { id: 'réfrigérateur', name: 'Refrigerador', image: 'src/images/Réfrigérateur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Descongelado, desinfección, interior y juntas.' },
  { id: 'graffiti', name: 'Graffiti', image: 'src/images/Graffiti.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Eliminación de grafitis en muros, fachadas o cristales con productos adecuados.' },
  { id: 'radiateur', name: 'Radiador', image: 'src/images/Radiateur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Desempolvado interior/exterior, desengrasado.' },
  { id: 'clôture', name: 'Valla', image: 'src/images/Clôture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Eliminación de musgo, limpieza, mantenimiento visual y estructural.' },
  { id: 'climatiseur', name: 'Aire acondicionado', image: 'src/images/Climatiseur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza de filtros y carcasa exterior, tratamiento antibacteriano.' },
  { id: 'panneau solaire', name: 'Panel solar', image: 'src/images/Panneau solaire.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza no abrasiva para optimizar el rendimiento.' },
  { id: 'parking', name: 'Estacionamiento', image: 'src/images/Parking.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Barrido, soplado, recogida de residuos, limpieza a presión.' },
  { id: 'cheminée', name: 'Chimenea', image: 'src/images/Cheminée.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Aspirado de cenizas, limpieza del hogar y paredes.' },
  { id: 'commercial', name: 'Comercial', image: 'src/images/Commercial.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Oficinas, tiendas, almacenes, limpieza profesional adaptada.' },
  { id: 'immeuble', name: 'Edificio', image: 'src/images/Immeuble.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Zonas comunes, escaleras, ventanas, suelos.' },
  { id: 'poubelles', name: 'Contenedores', image: 'src/images/Poubelles.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza de cubos de basura, desinfección y desodorización.' },
  { id: 'tombe', name: 'Tumba', image: 'src/images/Tombe.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza, mantenimiento, decoración floral según preferencias.' },
  { id: 'après sinistre', name: 'Después de siniestros', image: 'src/images/Après sinistre.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Restauración después de daños por agua, fuego o inundaciones.' },
  { id: 'bateau', name: 'Barco', image: 'src/images/Bateau.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpieza del casco, cubierta, interior de cabina y tapicería.' }
  ],
  pt: [
  { id: 'household', name: 'Limpeza doméstica', image: 'src/images/Menage.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza regular ou pontual para um interior impecável.' },
  { id: 'voiture', name: 'Carro', image: 'src/images/Voiture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza interna e externa, bancos, vidros, carpetes...' },
  { id: 'vêtements', name: 'Roupas', image: 'src/images/Vêtements.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Lavagem, remoção de manchas e passar a ferro por profissionais locais.' },
  { id: 'chaussures', name: 'Sapatos', image: 'src/images/Chaussures.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza à mão ou a vapor, dependendo do material (couro, tecido).' },
  { id: 'canapés', name: 'Sofás', image: 'src/images/Canapés.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Tratamento profundo para tecidos, couro, microfibra...' },
  { id: 'fauteuils', name: 'Poltronas', image: 'src/images/Fauteuils.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza à mão ou por injeção/extração, conforme o material.' },
  { id: 'tapis', name: 'Tapetes', image: 'src/images/Tapis.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Aspiração, remoção de manchas e tratamento antiácaros.' },
  { id: 'moquette', name: 'Alcatifa', image: 'src/images/Moquette.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Aspiração, lavagem com shampoo e remoção de manchas de todos os tipos.' },
  { id: 'toilettage', name: 'Tosa e banho', image: 'src/images/Toilettage.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Higiene completa de cães, gatos e pequenos animais, em domicílio ou no local.' },
  { id: 'matelas', name: 'Colchões', image: 'src/images/Matelas.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza, desinfeção e tratamento antiácaros para um sono saudável.' },
  { id: 'vitres', name: 'Vidros', image: 'src/images/Vitres.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Interior e exterior, sem manchas, para residências ou escritórios.' },
  { id: 'vitrines', name: 'Vitrines', image: 'src/images/Vitrines.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza sem marcas, interior/exterior para lojas.' },
  { id: 'moto', name: 'Moto', image: 'src/images/Moto.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza completa (carroçaria, rodas, cromados).' },
  { id: 'pressing', name: 'Lavandaria', image: 'src/images/Pressing.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Coleta em domicílio, entrega na lavandaria e devolução rápida.' },
  { id: 'dératisation', name: 'Desratização', image: 'src/images/Dératisation.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Tratamento contra todo tipo de pragas: ratos, baratas, formigas, percevejos etc.' },
  { id: 'terrasse', name: 'Terraço', image: 'src/images/Terrasse.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza de lajes, madeira ou pedra, com remoção de resíduos.' },
  { id: 'toiture', name: 'Telhado', image: 'src/images/Toiture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza com alta pressão, remoção de musgo, tratamento preventivo.' },
  { id: 'gouttière', name: 'Calha', image: 'src/images/Gouttière.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Desobstrução, limpeza e verificação do escoamento.' },
  { id: 'jardin', name: 'Jardim', image: 'src/images/Jardin.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Corte de relva, capina, roçagem, sopro e remoção de resíduos.' },
  { id: 'bureau', name: 'Escritório', image: 'src/images/Bureau.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Postos de trabalho, áreas comuns, sanitários.' },
  { id: 'sous-sol', name: 'Porão', image: 'src/images/Sous-sol.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza úmida ou a seco conforme o revestimento.' },
  { id: 'plafond', name: 'Teto', image: 'src/images/Plafond.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Remoção de manchas, teias, poeira e bolor.' },
  { id: 'façade', name: 'Fachada', image: 'src/images/Façade.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Lavagem com jato de alta pressão, tratamento antipoluição.' },
  { id: 'mur', name: 'Parede', image: 'src/images/Mur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza leve ou profunda conforme o material e sujidade.' },
  { id: 'grenier', name: 'Sótão', image: 'src/images/Grenier.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Remoção de poeira, limpeza parcial ou total e esvaziamento.' },
  { id: 'fin de chantier', name: 'Pós-obra', image: 'src/images/Fin de chantier.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza completa após obras: poeira, resíduos.' },
  { id: 'piscine', name: 'Piscina', image: 'src/images/Piscine.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza do fundo, linha d’água, controle e drenagem.' },
  { id: 'volet & store', name: 'Persianas e toldos', image: 'src/images/Volet & store.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Remoção de pó, limpeza a vapor ou manual.' },
  { id: 'cuisinière', name: 'Fogão', image: 'src/images/Cuisinière.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza completa: bocas, forno, botões, aço inox...' },
  { id: 'hotte', name: 'Exaustor', image: 'src/images/Hotte.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza e desengorduramento por dentro e por fora.' },
  { id: 'four', name: 'Forno', image: 'src/images/Four.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Desengorduramento, decapagem, desinfeção a alta temperatura.' },
  { id: 'réfrigérateur', name: 'Frigorífico', image: 'src/images/Réfrigérateur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Descongelamento, desinfeção e limpeza interna com vedantes.' },
  { id: 'graffiti', name: 'Grafite', image: 'src/images/Graffiti.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Remoção em paredes, fachadas ou vitrines com produtos adequados.' },
  { id: 'radiateur', name: 'Radiador', image: 'src/images/Radiateur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza interna e externa, remoção de gordura e pó.' },
  { id: 'clôture', name: 'Cerca', image: 'src/images/Clôture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza, remoção de musgo, inspeção visual e manutenção.' },
  { id: 'climatiseur', name: 'Ar-condicionado', image: 'src/images/Climatiseur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza de filtros e exterior, tratamento antibacteriano.' },
  { id: 'panneau solaire', name: 'Painel solar', image: 'src/images/Panneau solaire.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza não abrasiva para otimizar o desempenho.' },
  { id: 'parking', name: 'Estacionamento', image: 'src/images/Parking.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Varrição, sopro, remoção de lixo, lavagem a jato.' },
  { id: 'cheminée', name: 'Lareira', image: 'src/images/Cheminée.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Aspiração de cinzas, limpeza da base e das paredes.' },
  { id: 'commercial', name: 'Comercial', image: 'src/images/Commercial.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Escritórios, lojas, armazéns – limpeza profissional adaptada.' },
  { id: 'immeuble', name: 'Prédio', image: 'src/images/Immeuble.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Áreas comuns, escadas, vidros e pavimentos.' },
  { id: 'poubelles', name: 'Lixeiras', image: 'src/images/Poubelles.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Lavagem de contentores, desinfeção e desodorização.' },
  { id: 'tombe', name: 'Túmulo', image: 'src/images/Tombe.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza, manutenção e ornamentação floral conforme solicitado.' },
  { id: 'après sinistre', name: 'Após desastre', image: 'src/images/Après sinistre.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Restauração após danos por água, fogo ou inundações.' },
  { id: 'bateau', name: 'Barco', image: 'src/images/Bateau.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Limpeza de casco, convés, cabine interna e estofos.' }
  ],
  it: [
  { id: 'household', name: 'Pulizia domestica', image: 'src/images/Menage.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia regolare o occasionale per una casa impeccabile.' },
  { id: 'voiture', name: 'Auto', image: 'src/images/Voiture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia interna ed esterna, sedili, vetri, moquette…' },
  { id: 'vêtements', name: 'Abiti', image: 'src/images/Vêtements.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Lavaggio, smacchiatura, stiratura a cura di cleaner locali.' },
  { id: 'chaussures', name: 'Scarpe', image: 'src/images/Chaussures.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia a mano o a vapore a seconda del materiale (pelle, tessuto).' },
  { id: 'canapés', name: 'Divani', image: 'src/images/Canapés.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Trattamento profondo per tessuti, pelle, microfibra…' },
  { id: 'fauteuils', name: 'Poltrone', image: 'src/images/Fauteuils.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia a mano o a iniezione/estrazione in base al materiale.' },
  { id: 'tapis', name: 'Tappeti', image: 'src/images/Tapis.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Aspirazione, smacchiatura, trattamento antiacaro.' },
  { id: 'moquette', name: 'Moquette', image: 'src/images/Moquette.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Aspirazione, shampoo e smacchiatura per tutti i tipi di moquette.' },
  { id: 'toilettage', name: 'Toelettatura', image: 'src/images/Toilettage.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Toelettatura completa per cani, gatti e NAC, a domicilio o in sede.' },
  { id: 'matelas', name: 'Materassi', image: 'src/images/Matelas.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia, disinfezione e antiacaro per un sonno sano.' },
  { id: 'vitres', name: 'Vetri', image: 'src/images/Vitres.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Interni ed esterni, senza aloni, per case o uffici.' },
  { id: 'vitrines', name: 'Vetrine', image: 'src/images/Vitrines.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia senza aloni, interna/esterna, per negozi.' },
  { id: 'moto', name: 'Moto', image: 'src/images/Moto.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia completa (carrozzeria, cerchi, cromature).' },
  { id: 'pressing', name: 'Lavanderia', image: 'src/images/Pressing.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Ritiro a domicilio, consegna in lavanderia e ritorno rapido.' },
  { id: 'dératisation', name: 'Derattizzazione', image: 'src/images/Dératisation.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Trattamento contro tutti i tipi di infestanti: topi, ratti, scarafaggi, cimici, formiche, ecc.' },
  { id: 'terrasse', name: 'Terrazza', image: 'src/images/Terrasse.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia di piastrelle, legno o pietra con rimozione dei rifiuti.' },
  { id: 'toiture', name: 'Tetto', image: 'src/images/Toiture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Rimozione muschio, lavaggio ad alta pressione, trattamento preventivo.' },
  { id: 'gouttière', name: 'Grondaia', image: 'src/images/Gouttière.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Svuotamento, pulizia e verifica dello scorrimento dell’acqua.' },
  { id: 'jardin', name: 'Giardino', image: 'src/images/Jardin.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Taglio erba, diserbo, decespugliamento, soffiaggio, sgombero.' },
  { id: 'bureau', name: 'Ufficio', image: 'src/images/Bureau.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Postazioni di lavoro, aree comuni, servizi igienici.' },
  { id: 'sous-sol', name: 'Seminterrato', image: 'src/images/Sous-sol.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia a secco o umida a seconda del rivestimento.' },
  { id: 'plafond', name: 'Soffitto', image: 'src/images/Plafond.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Smacchiatura, rimozione ragnatele, polvere, muffa.' },
  { id: 'façade', name: 'Facciata', image: 'src/images/Façade.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia ad alta pressione, trattamento antipolvere e smog.' },
  { id: 'mur', name: 'Muro', image: 'src/images/Mur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia leggera o profonda a seconda del materiale e dello sporco.' },
  { id: 'grenier', name: 'Solaio', image: 'src/images/Grenier.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Rimozione polvere, sgombero, pulizia totale o parziale.' },
  { id: 'fin de chantier', name: 'Fine lavori', image: 'src/images/Fin de chantier.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia completa post-cantiere: residui, polvere.' },
  { id: 'piscine', name: 'Piscina', image: 'src/images/Piscine.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia fondo, linea dell’acqua, controllo e svuotamento.' },
  { id: 'volet & store', name: 'Tapparelle e tende', image: 'src/images/Volet & store.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Spolveratura, pulizia a vapore o manuale.' },
  { id: 'cuisinière', name: 'Cucina', image: 'src/images/Cuisinière.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia completa: fornelli, forno, manopole, acciaio inox…' },
  { id: 'hotte', name: 'Cappa', image: 'src/images/Hotte.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia e sgrassatura interna ed esterna.' },
  { id: 'four', name: 'Forno', image: 'src/images/Four.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Sgrassatura, decapaggio, disinfezione ad alta temperatura.' },
  { id: 'réfrigérateur', name: 'Frigorifero', image: 'src/images/Réfrigérateur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Sbrinamento, disinfezione, interno e guarnizioni.' },
  { id: 'graffiti', name: 'Graffiti', image: 'src/images/Graffiti.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Rimozione da muri, facciate o vetrine con prodotti specifici.' },
  { id: 'radiateur', name: 'Radiatore', image: 'src/images/Radiateur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Spolveratura interna/esterna, sgrassatura.' },
  { id: 'clôture', name: 'Recinzione', image: 'src/images/Clôture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia, rimozione muschio, manutenzione visiva e strutturale.' },
  { id: 'climatiseur', name: 'Condizionatore', image: 'src/images/Climatiseur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia filtri e scocca esterna, trattamento antibatterico.' },
  { id: 'panneau solaire', name: 'Pannello solare', image: 'src/images/Panneau solaire.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia non abrasiva per ottimizzare il rendimento.' },
  { id: 'parking', name: 'Parcheggio', image: 'src/images/Parking.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Spazzamento, soffiatura, rimozione rifiuti, lavaggio a pressione.' },
  { id: 'cheminée', name: 'Camino', image: 'src/images/Cheminée.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Aspirazione cenere, pulizia focolare e pareti.' },
  { id: 'commercial', name: 'Commerciale', image: 'src/images/Commercial.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Uffici, negozi, magazzini – pulizia professionale su misura.' },
  { id: 'immeuble', name: 'Condominio', image: 'src/images/Immeuble.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Parti comuni, scale, vetri, pavimenti.' },
  { id: 'poubelles', name: 'Bidoni della spazzatura', image: 'src/images/Poubelles.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia cassonetti, disinfezione, deodorazione.' },
  { id: 'tombe', name: 'Tomba', image: 'src/images/Tombe.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia, manutenzione, fioritura secondo richiesta.' },
  { id: 'après sinistre', name: 'Dopo sinistro', image: 'src/images/Après sinistre.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Ripristino dopo danni da acqua, fuoco o alluvione.' },
  { id: 'bateau', name: 'Barca', image: 'src/images/Bateau.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pulizia scafo, ponte, interno cabina e tappezzeria.' }
  ],
  de: [
  { id: 'household', name: 'Haushalt', image: 'src/images/Menage.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Regelmäßige oder einmalige Reinigung für ein makelloses Zuhause.' },
  { id: 'voiture', name: 'Auto', image: 'src/images/Voiture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Innen- & Außenreinigung, Sitze, Fenster, Teppiche…' },
  { id: 'vêtements', name: 'Kleidung', image: 'src/images/Vêtements.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Reinigung, Fleckenentfernung und Bügeln durch lokale Helfer.' },
  { id: 'chaussures', name: 'Schuhe', image: 'src/images/Chaussures.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Hand- oder Dampfreinigung je nach Material (Leder, Stoff).' },
  { id: 'canapés', name: 'Sofas', image: 'src/images/Canapés.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Tiefenreinigung für Stoff, Leder, Mikrofaser…' },
  { id: 'fauteuils', name: 'Sessel', image: 'src/images/Fauteuils.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Handreinigung oder Sprüh-Extraktion je nach Material.' },
  { id: 'tapis', name: 'Teppiche', image: 'src/images/Tapis.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Staubsaugen, Fleckenentfernung, Milbenbehandlung.' },
  { id: 'moquette', name: 'Auslegware', image: 'src/images/Moquette.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Staubsaugen, Shampoo und Fleckenentfernung aller Arten von Teppichen.' },
  { id: 'toilettage', name: 'Tierpflege', image: 'src/images/Toilettage.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Komplette Pflege für Hunde, Katzen und Kleintiere – zu Hause oder vor Ort.' },
  { id: 'matelas', name: 'Matratzen', image: 'src/images/Matelas.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Reinigung, Desinfektion und Milbenentfernung für gesunden Schlaf.' },
  { id: 'vitres', name: 'Fenster', image: 'src/images/Vitres.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Innen und außen, streifenfrei – für Zuhause oder Büro.' },
  { id: 'vitrines', name: 'Schaufenster', image: 'src/images/Vitrines.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Streifenfreie Reinigung innen und außen für Geschäfte.' },
  { id: 'moto', name: 'Motorrad', image: 'src/images/Moto.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Komplettreinigung (Karosserie, Felgen, Chrom).' },
  { id: 'pressing', name: 'Reinigung', image: 'src/images/Pressing.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Abholung zu Hause, Bringservice zur Reinigung, schnelle Rückgabe.' },
  { id: 'dératisation', name: 'Schädlingsbekämpfung', image: 'src/images/Dératisation.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Bekämpfung von Ratten, Mäusen, Kakerlaken, Bettwanzen, Ameisen usw.' },
  { id: 'terrasse', name: 'Terrasse', image: 'src/images/Terrasse.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Reinigung von Platten, Holz oder Stein mit Abfallentsorgung.' },
  { id: 'toiture', name: 'Dach', image: 'src/images/Toiture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Moosentfernung, Hochdruckreinigung, vorbeugende Behandlung.' },
  { id: 'gouttière', name: 'Dachrinne', image: 'src/images/Gouttière.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Reinigung, Entleerung und Prüfung des Wasserabflusses.' },
  { id: 'jardin', name: 'Garten', image: 'src/images/Jardin.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Rasenmähen, Unkraut entfernen, Freischneiden, Blasreinigung, Abtransport.' },
  { id: 'bureau', name: 'Büro', image: 'src/images/Bureau.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Arbeitsplätze, Gemeinschaftsbereiche, Sanitäranlagen.' },
  { id: 'sous-sol', name: 'Keller', image: 'src/images/Sous-sol.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Feucht- oder Trockenreinigung je nach Bodenbelag.' },
  { id: 'plafond', name: 'Decke', image: 'src/images/Plafond.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Fleckenentfernung, Spinnweben, Staub, Schimmel.' },
  { id: 'façade', name: 'Fassade', image: 'src/images/Façade.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Hochdruckreinigung, Umweltschutzbehandlung.' },
  { id: 'mur', name: 'Wand', image: 'src/images/Mur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Schonende oder intensive Reinigung je nach Material und Verschmutzung.' },
  { id: 'grenier', name: 'Dachboden', image: 'src/images/Grenier.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Staubentfernung, Entrümpelung, vollständige oder teilweise Reinigung.' },
  { id: 'fin de chantier', name: 'Nach Bauarbeiten', image: 'src/images/Fin de chantier.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Komplettreinigung nach Bauarbeiten: Staub, Rückstände.' },
  { id: 'piscine', name: 'Pool', image: 'src/images/Piscine.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Reinigung des Bodens, Wasserlinie, Kontrolle und Entleerung.' },
  { id: 'volet & store', name: 'Rollläden & Markisen', image: 'src/images/Volet & store.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Staubentfernung, Dampfreinigung oder manuell.' },
  { id: 'cuisinière', name: 'Herd', image: 'src/images/Cuisinière.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Komplettreinigung: Platten, Ofen, Knöpfe, Edelstahl…' },
  { id: 'hotte', name: 'Dunstabzugshaube', image: 'src/images/Hotte.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Innen- & Außenreinigung und Entfettung.' },
  { id: 'four', name: 'Backofen', image: 'src/images/Four.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Entfettung, Reinigung, Hochtemperatur-Desinfektion.' },
  { id: 'réfrigérateur', name: 'Kühlschrank', image: 'src/images/Réfrigérateur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Abtauen, Desinfektion, Reinigung inklusive Dichtungen.' },
  { id: 'graffiti', name: 'Graffiti', image: 'src/images/Graffiti.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Entfernung von Wänden, Fassaden oder Schaufenstern mit geeigneten Mitteln.' },
  { id: 'radiateur', name: 'Heizkörper', image: 'src/images/Radiateur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Innen- und Außenreinigung, Entfettung.' },
  { id: 'clôture', name: 'Zaun', image: 'src/images/Clôture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Moosentfernung, Reinigung, Sicht- und Strukturschutz.' },
  { id: 'climatiseur', name: 'Klimaanlage', image: 'src/images/Climatiseur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Filterreinigung & äußere Hülle, antibakterielle Behandlung.' },
  { id: 'panneau solaire', name: 'Solarmodul', image: 'src/images/Panneau solaire.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Nicht scheuernde Reinigung zur Leistungsoptimierung.' },
  { id: 'parking', name: 'Parkplatz', image: 'src/images/Parking.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Fegen, Blasen, Abfallentfernung, Hochdruckreinigung.' },
  { id: 'cheminée', name: 'Kamin', image: 'src/images/Cheminée.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Aschesaugen, Reinigung von Brennraum und Wänden.' },
  { id: 'commercial', name: 'Gewerblich', image: 'src/images/Commercial.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Büros, Geschäfte, Lagerhallen – professionelle Reinigung.' },
  { id: 'immeuble', name: 'Gebäude', image: 'src/images/Immeuble.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Gemeinschaftsbereiche, Treppen, Fenster, Böden.' },
  { id: 'poubelles', name: 'Mülltonnen', image: 'src/images/Poubelles.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Mülltonnenreinigung, Desinfektion, Geruchsbeseitigung.' },
  { id: 'tombe', name: 'Grab', image: 'src/images/Tombe.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Reinigung, Pflege, Blumenschmuck nach Wunsch.' },
  { id: 'après sinistre', name: 'Nach Schaden', image: 'src/images/Après sinistre.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Wiederherstellung nach Wasser-, Feuer- oder Hochwasserschäden.' },
  { id: 'bateau', name: 'Boot', image: 'src/images/Bateau.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Reinigung von Rumpf, Deck, Kabine und Polstern.' }
  ],
  be: [
  { id: 'household', name: 'Прыбіранне дома', image: 'src/images/Menage.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Рэгулярнае або разавае прыбіранне для бездакорнай чысціні.' },
  { id: 'voiture', name: 'Аўтамабіль', image: 'src/images/Voiture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Унутраная і знешняя чыстка, сядзенні, вокны, дываны…' },
  { id: 'vêtements', name: 'Адзенне', image: 'src/images/Vêtements.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Пральня, выдаленне плямаў, прасаванне ад мясцовых спецыялістаў.' },
  { id: 'chaussures', name: 'Абутак', image: 'src/images/Chaussures.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Ручная або паравая чыстка ў залежнасці ад матэрыялу (скура, тканіна).' },
  { id: 'canapés', name: 'Дываны', image: 'src/images/Canapés.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Глыбокая апрацоўка тканіны, скуры, мікрафібры…' },
  { id: 'fauteuils', name: 'Крэслы', image: 'src/images/Fauteuils.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Ручная або экстракцыйная чыстка ў залежнасці ад матэрыялу.' },
  { id: 'tapis', name: 'Коверы', image: 'src/images/Tapis.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Пыласос, выдаленне плямаў, апрацоўка супраць пылавых клешчаў.' },
  { id: 'moquette', name: 'Кілімовае пакрыццё', image: 'src/images/Moquette.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Ачыстка, шампунь і выдаленне плямаў з любога тыпу пакрыцця.' },
  { id: 'toilettage', name: 'Дагляд за жывёламі', image: 'src/images/Toilettage.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Комплексны догляд за сабакамі, катамі і дробнымі жывёламі дома ці на месцы.' },
  { id: 'matelas', name: 'Матрацы', image: 'src/images/Matelas.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Чыстка, дэзінфекцыя і апрацоўка супраць клешчаў для здаровага сну.' },
  { id: 'vitres', name: 'Акно', image: 'src/images/Vitres.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Чыстка знутры і звонку без слядоў – для дома або офіса.' },
  { id: 'vitrines', name: 'Вітрыны', image: 'src/images/Vitrines.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Бясслядовая чыстка знутры і звонку – для крамаў.' },
  { id: 'moto', name: 'Матацыкл', image: 'src/images/Moto.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Поўная чыстка (кузаў, дыскі, хром).' },
  { id: 'pressing', name: 'Хімчыстка', image: 'src/images/Pressing.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Самавываз, дастаўка ў хімчыстку і хуткі зварот.' },
  { id: 'dératisation', name: 'Дэзынсекцыя', image: 'src/images/Dératisation.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Барацьба з шкоднікамі: пацукі, мышы, тараканы, клапы, мурашкі і г.д.' },
  { id: 'terrasse', name: 'Тэраса', image: 'src/images/Terrasse.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Ачыстка пліткі, дрэва або каменю з выдаленнем смецця.' },
  { id: 'toiture', name: 'Дах', image: 'src/images/Toiture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Выдаленне моху, чыстка пад высокім ціскам, прафілактычная апрацоўка.' },
  { id: 'gouttière', name: 'Вадосток', image: 'src/images/Gouttière.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Ачыстка, прамыванне, праверка праходнасці вады.' },
  { id: 'jardin', name: 'Сад', image: 'src/images/Jardin.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Касьба, праполка, абразанне, выдаленне лісця і вынас смецця.' },
  { id: 'bureau', name: 'Офіс', image: 'src/images/Bureau.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Працоўныя месцы, агульныя зоны, туалеты.' },
  { id: 'sous-sol', name: 'Падвал', image: 'src/images/Sous-sol.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Сухая або вільготная чыстка ў залежнасці ад пакрыцця.' },
  { id: 'plafond', name: 'Столь', image: 'src/images/Plafond.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Выдаленне плямаў, пылу, павуціння, цвілі.' },
  { id: 'façade', name: 'Фасад', image: 'src/images/Façade.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Ачыстка пад высокім ціскам, антызагразная апрацоўка.' },
  { id: 'mur', name: 'Сцяна', image: 'src/images/Mur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Дэлікатная або глыбокая чыстка ў залежнасці ад матэрыялу.' },
  { id: 'grenier', name: 'Гарышча', image: 'src/images/Grenier.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Выдаленне пылу, уборка, поўная або частковая чыстка.' },
  { id: 'fin de chantier', name: 'Пасля рамонту', image: 'src/images/Fin de chantier.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Поўная ўборка пасля будаўніцтва: пыл, рэшткі.' },
  { id: 'piscine', name: 'Басейн', image: 'src/images/Piscine.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Ачыстка дна, лініі вады, кантроль і выдаленне.' },
  { id: 'volet & store', name: 'Стаўні і жалюзі', image: 'src/images/Volet & store.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Ачыстка пылам, паравая або ручная чыстка.' },
  { id: 'cuisinière', name: 'Пліта', image: 'src/images/Cuisinière.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Поўная чыстка: канфоркі, духоўка, кнопкі, нержавейка…' },
  { id: 'hotte', name: 'Вытяжка', image: 'src/images/Hotte.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Унутраная і знешняя чыстка і абясшкоджванне тлушчу.' },
  { id: 'four', name: 'Духоўка', image: 'src/images/Four.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Абезжырванне, дэзінфекцыя пры высокай тэмпературы.' },
  { id: 'réfrigérateur', name: 'Халадзільнік', image: 'src/images/Réfrigérateur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Разморозка, дэзінфекцыя, чыстка ўнутры і гум.' },
  { id: 'graffiti', name: 'Графіці', image: 'src/images/Graffiti.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Выдаленне з фасадаў, сцен і вокнаў з адпаведнымі сродкамі.' },
  { id: 'radiateur', name: 'Ацяпленне', image: 'src/images/Radiateur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Знешняя і ўнутраная чыстка, абясшкоджванне тлушчу.' },
  { id: 'clôture', name: 'Агароджа', image: 'src/images/Clôture.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Чыстка, выдаленне моху, візуальны і канструктыўны догляд.' },
  { id: 'climatiseur', name: 'Кандыцыянер', image: 'src/images/Climatiseur.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Чыстка фільтраў і корпуса, апрацоўка антыбактэрыйная.' },
  { id: 'panneau solaire', name: 'Сонечная панэль', image: 'src/images/Panneau solaire.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Неабразіўная чыстка для аптымальнай прадукцыйнасці.' },
  { id: 'parking', name: 'Паркоўка', image: 'src/images/Parking.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Падмятанне, выдаленне смецця, чыстка пад ціскам.' },
  { id: 'cheminée', name: 'Комін', image: 'src/images/Cheminée.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Выдаленне попелу, чыстка ачагу і сценак.' },
  { id: 'commercial', name: 'Камерцыйнае', image: 'src/images/Commercial.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Офісы, крамы, склады – прафесійная чыстка.' },
  { id: 'immeuble', name: 'Будынак', image: 'src/images/Immeuble.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Агульныя зоны, лесвіцы, вокны, падлогі.' },
  { id: 'poubelles', name: 'Смецьцевыя бакі', image: 'src/images/Poubelles.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Мыццё кантэйнераў, дэзінфекцыя, дэзадарызацыя.' },
  { id: 'tombe', name: 'Магіла', image: 'src/images/Tombe.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Чыстка, дагляд, упрыгожванне кветкамі па вашых жаданнях.' },
  { id: 'après sinistre', name: 'Пасля здарэння', image: 'src/images/Après sinistre.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Аднаўленне пасля пажару, затаплення або іншай катастрофы.' },
  { id: 'bateau', name: 'Лодка', image: 'src/images/Bateau.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Чыстка корпуса, палубы, кабіны і мяккай мэблі.' }
  ],
};