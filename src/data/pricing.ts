export interface ServicePrice {

    id: string;
  
    name: string;
  
    price: string;

    from: string;
  
    unit: string;
  
    description: string;
  
    category: string;
  
  }
  
   
  
  export const pricingData: Record<string, ServicePrice[]> = {
  
 fr: [

  // Nettoyage Intérieur
  {
    id: 'bureau',
    name: 'Bureau',
    price: '8',
    unit: '€/m²',
    description: 'Nettoyage professionnel de bureaux et espaces de travail',
    category: 'Nettoyage Intérieur',
    from: 'à partir de'
  },
  {
    id: 'appartement',
    name: 'Appartement',
    price: '15',
    unit: '€/m²',
    description: 'Ménage complet d\'appartements et studios',
    category: 'Nettoyage Intérieur',
    from: 'à partir de'
  },
  {
    id: 'maison',
    name: 'Maison',
    price: '12',
    unit: '€/m²',
    description: 'Ménage complet de maisons individuelles',
    category: 'Nettoyage Intérieur',
    from: 'à partir de'
  },
  {
    id: 'vitres',
    name: 'Vitres',
    price: '6',
    unit: '€/m²',
    description: 'Nettoyage de vitres et baies vitrées',
    category: 'Nettoyage Intérieur',
    from: 'à partir de'
  },

  // Nettoyage Commercial
  {
    id: 'commercial',
    name: 'Commercial',
    price: '10',
    unit: '€/m²',
    description: 'Entretien de locaux commerciaux et magasins',
    category: 'Nettoyage Commercial',
    from: 'à partir de'
  },
  {
    id: 'immeuble',
    name: 'Immeuble',
    price: '7',
    unit: '€/m²',
    description: 'Nettoyage de parties communes et façades d\'immeubles',
    category: 'Nettoyage Commercial',
    from: 'à partir de'
  },
  {
    id: 'parking',
    name: 'Parking',
    price: '5',
    unit: '€/m²',
    description: 'Nettoyage de parkings et garages souterrains',
    category: 'Nettoyage Commercial',
    from: 'à partir de'
  },
  {
    id: 'fin-chantier',
    name: 'Fin de chantier',
    price: '18',
    unit: '€/m²',
    description: 'Remise en état après travaux et construction',
    category: 'Nettoyage Commercial',
    from: 'à partir de'
  },

  // Textiles & Mobilier
  {
    id: 'tapis',
    name: 'Tapis',
    price: '12',
    unit: '€/m²',
    description: 'Nettoyage professionnel de tapis et moquettes',
    category: 'Textiles & Mobilier',
    from: 'à partir de'
  },
  {
    id: 'fauteuil',
    name: 'Fauteuil',
    price: '45',
    unit: '€/pièce',
    description: 'Nettoyage de fauteuils et canapés en tissu',
    category: 'Textiles & Mobilier',
    from: 'à partir de'
  },
  {
    id: 'matelas',
    name: 'Matelas',
    price: '35',
    unit: '€/pièce',
    description: 'Désinfection et nettoyage en profondeur de matelas',
    category: 'Textiles & Mobilier',
    from: 'à partir de'
  },
  {
    id: 'vetements',
    name: 'Vêtements',
    price: '8',
    unit: '€/pièce',
    description: 'Pressing et nettoyage à sec de vêtements',
    category: 'Textiles & Mobilier',
    from: 'à partir de'
  },

  // Extérieur & Véhicules
  {
    id: 'terrasse',
    name: 'Terrasse',
    price: '9',
    unit: '€/m²',
    description: 'Nettoyage de terrasses et espaces extérieurs',
    category: 'Extérieur & Véhicules',
    from: 'à partir de'
  },
  {
    id: 'jardin',
    name: 'Jardin',
    price: '25',
    unit: '€/h',
    description: 'Entretien et nettoyage d\'espaces verts',
    category: 'Extérieur & Véhicules',
    from: 'à partir de'
  },
  {
    id: 'voiture',
    name: 'Voiture',
    price: '25',
    unit: '€/véhicule',
    description: 'Lavage complet intérieur et extérieur de véhicules',
    category: 'Extérieur & Véhicules',
    from: 'à partir de'
  },
  {
    id: 'moto',
    name: 'Moto',
    price: '15',
    unit: '€/véhicule',
    description: 'Lavage et entretien de motos et scooters',
    category: 'Extérieur & Véhicules',
    from: 'à partir de'
  },
  {
    id: 'cloture',
    name: 'Clôture',
    price: '4',
    unit: '€/m²',
    description: 'Nettoyage et entretien de clôtures et portails',
    category: 'Extérieur & Véhicules',
    from: 'à partir de'
  },

  // Services Spécialisés
  {
    id: 'panneaux-solaires',
    name: 'Panneaux solaires',
    price: '3',
    unit: '€/m²',
    description: 'Nettoyage spécialisé de panneaux photovoltaïques',
    category: 'Services Spécialisés',
    from: 'à partir de'
  },
  {
    id: 'gouttieres',
    name: 'Gouttières',
    price: '8',
    unit: '€/m',
    description: 'Nettoyage et débouchage de gouttières',
    category: 'Services Spécialisés',
    from: 'à partir de'
  },
  {
    id: 'chaussures',
    name: 'Chaussures',
    price: '12',
    unit: '€/paire',
    description: 'Nettoyage et rénovation de chaussures',
    category: 'Services Spécialisés',
    from: 'à partir de'
  },
  {
    id: 'toilettage',
    name: 'Toilettage',
    price: '30',
    unit: '€/animal',
    description: 'Services de toilettage pour animaux de compagnie',
    category: 'Services Spécialisés',
    from: 'à partir de'
  }
],

  
en: [
  {
    id: 'office',
    name: 'Office',
    price: '8',
    unit: '€/m²',
    description: 'Professional office and workspace cleaning',
    category: 'Interior Cleaning',
    from: 'from'
  },
  {
    id: 'apartment',
    name: 'Apartment',
    price: '15',
    unit: '€/m²',
    description: 'Complete apartment and studio cleaning',
    category: 'Interior Cleaning',
    from: 'from'
  },
  {
    id: 'house',
    name: 'House',
    price: '12',
    unit: '€/m²',
    description: 'Complete individual house cleaning',
    category: 'Interior Cleaning',
    from: 'from'
  },
  {
    id: 'windows',
    name: 'Windows',
    price: '6',
    unit: '€/m²',
    description: 'Window and glass panel cleaning',
    category: 'Interior Cleaning',
    from: 'from'
  },
  {
    id: 'commercial',
    name: 'Commercial',
    price: '10',
    unit: '€/m²',
    description: 'Commercial premises and retail store maintenance',
    category: 'Commercial Cleaning',
    from: 'from'
  },
  {
    id: 'building',
    name: 'Building',
    price: '7',
    unit: '€/m²',
    description: 'Common area and building facade cleaning',
    category: 'Commercial Cleaning',
    from: 'from'
  },
  {
    id: 'parking',
    name: 'Parking',
    price: '5',
    unit: '€/m²',
    description: 'Parking lot and underground garage cleaning',
    category: 'Commercial Cleaning',
    from: 'from'
  },
  {
    id: 'post-construction',
    name: 'Post-construction',
    price: '18',
    unit: '€/m²',
    description: 'Post-construction and renovation cleanup',
    category: 'Commercial Cleaning',
    from: 'from'
  },
  {
    id: 'carpet',
    name: 'Carpet',
    price: '12',
    unit: '€/m²',
    description: 'Professional carpet and rug cleaning',
    category: 'Textiles & Furniture',
    from: 'from'
  },
  {
    id: 'armchair',
    name: 'Armchair',
    price: '45',
    unit: '€/piece',
    description: 'Fabric armchair and sofa cleaning',
    category: 'Textiles & Furniture',
    from: 'from'
  },
  {
    id: 'mattress',
    name: 'Mattress',
    price: '35',
    unit: '€/piece',
    description: 'Deep mattress disinfection and cleaning',
    category: 'Textiles & Furniture',
    from: 'from'
  },
  {
    id: 'clothing',
    name: 'Clothing',
    price: '8',
    unit: '€/piece',
    description: 'Dry cleaning and garment pressing',
    category: 'Textiles & Furniture',
    from: 'from'
  },
  {
    id: 'terrace',
    name: 'Terrace',
    price: '9',
    unit: '€/m²',
    description: 'Terrace and outdoor space cleaning',
    category: 'Outdoor & Vehicles',
    from: 'from'
  },
  {
    id: 'garden',
    name: 'Garden',
    price: '25',
    unit: '€/h',
    description: 'Garden and green space maintenance',
    category: 'Outdoor & Vehicles',
    from: 'from'
  },
  {
    id: 'car',
    name: 'Car',
    price: '25',
    unit: '€/vehicle',
    description: 'Complete interior and exterior vehicle washing',
    category: 'Outdoor & Vehicles',
    from: 'from'
  },
  {
    id: 'motorcycle',
    name: 'Motorcycle',
    price: '15',
    unit: '€/vehicle',
    description: 'Motorcycle and scooter washing and maintenance',
    category: 'Outdoor & Vehicles',
    from: 'from'
  },
  {
    id: 'fence',
    name: 'Fence',
    price: '4',
    unit: '€/m²',
    description: 'Fence and gate cleaning and maintenance',
    category: 'Outdoor & Vehicles',
    from: 'from'
  },
  {
    id: 'solar-panels',
    name: 'Solar Panels',
    price: '3',
    unit: '€/m²',
    description: 'Specialized photovoltaic panel cleaning',
    category: 'Specialized Services',
    from: 'from'
  },
  {
    id: 'gutters',
    name: 'Gutters',
    price: '8',
    unit: '€/m',
    description: 'Gutter cleaning and unclogging',
    category: 'Specialized Services',
    from: 'from'
  },
  {
    id: 'shoes',
    name: 'Shoes',
    price: '12',
    unit: '€/pair',
    description: 'Shoe cleaning and restoration',
    category: 'Specialized Services',
    from: 'from'
  },
  {
    id: 'grooming',
    name: 'Pet Grooming',
    price: '30',
    unit: '€/animal',
    description: 'Pet grooming services',
    category: 'Specialized Services',
    from: 'from'
  }
],

  
ar: [

  // تنظيف داخلي
  {
    id: 'maktab',
    name: 'مكتب',
    price: '8',
    unit: '€/م²',
    from: 'من',
    description: 'تنظيف مهني للمكاتب وأماكن العمل',
    category: 'تنظيف داخلي'
  },
  {
    id: 'shaqqa',
    name: 'شقة',
    price: '15',
    unit: '€/م²',
    from: 'من',
    description: 'تنظيف شامل للشقق والاستوديوهات',
    category: 'تنظيف داخلي'
  },
  {
    id: 'bayt',
    name: 'بيت',
    price: '12',
    unit: '€/م²',
    from: 'من',
    description: 'تنظيف شامل للمنازل الفردية',
    category: 'تنظيف داخلي'
  },
  {
    id: 'zujaj',
    name: 'زجاج',
    price: '6',
    unit: '€/م²',
    from: 'من',
    description: 'تنظيف النوافذ والألواح الزجاجية',
    category: 'تنظيف داخلي'
  },

  // تنظيف تجاري
  {
    id: 'tijari',
    name: 'تجاري',
    price: '10',
    unit: '€/م²',
    from: 'من',
    description: 'صيانة المحلات التجارية والمتاجر',
    category: 'تنظيف تجاري'
  },
  {
    id: 'mabna',
    name: 'مبنى',
    price: '7',
    unit: '€/م²',
    from: 'من',
    description: 'تنظيف المناطق المشتركة وواجهات المباني',
    category: 'تنظيف تجاري'
  },
  {
    id: 'mawqif',
    name: 'موقف',
    price: '5',
    unit: '€/م²',
    from: 'من',
    description: 'تنظيف مواقف السيارات والكراجات',
    category: 'تنظيف تجاري'
  },
  {
    id: 'baad-inshaa',
    name: 'نهاية البناء',
    price: '18',
    unit: '€/م²',
    from: 'من',
    description: 'تنظيف ما بعد البناء والتجديد',
    category: 'تنظيف تجاري'
  },

  // منسوجات وأثاث
  {
    id: 'sijjada',
    name: 'سجادة',
    price: '12',
    unit: '€/م²',
    from: 'من',
    description: 'تنظيف مهني للسجاد والموكيت',
    category: 'منسوجات وأثاث'
  },
  {
    id: 'kursi',
    name: 'كرسي',
    price: '45',
    unit: '€/قطعة',
    from: 'من',
    description: 'تنظيف الكراسي والأرائك القماشية',
    category: 'منسوجات وأثاث'
  },
  {
    id: 'matrah',
    name: 'مرتبة',
    price: '35',
    unit: '€/قطعة',
    from: 'من',
    description: 'تطهير وتنظيف عميق للمراتب',
    category: 'منسوجات وأثاث'
  },
  {
    id: 'malabis',
    name: 'ملابس',
    price: '8',
    unit: '€/قطعة',
    from: 'من',
    description: 'تنظيف جاف وكي الملابس',
    category: 'منسوجات وأثاث'
  },

  // خارجي ومركبات
  {
    id: 'taras',
    name: 'تراس',
    price: '9',
    unit: '€/م²',
    from: 'من',
    description: 'تنظيف التراسات والمساحات الخارجية',
    category: 'خارجي ومركبات'
  },
  {
    id: 'hadeeqa',
    name: 'حديقة',
    price: '25',
    unit: '€/ساعة',
    from: 'من',
    description: 'صيانة الحدائق والمساحات الخضراء',
    category: 'خارجي ومركبات'
  },
  {
    id: 'sayyara',
    name: 'سيارة',
    price: '25',
    unit: '€/مركبة',
    from: 'من',
    description: 'غسيل شامل داخلي وخارجي للمركبات',
    category: 'خارجي ومركبات'
  },
  {
    id: 'darraja',
    name: 'دراجة نارية',
    price: '15',
    unit: '€/مركبة',
    from: 'من',
    description: 'غسيل وصيانة الدراجات النارية والسكوتر',
    category: 'خارجي ومركبات'
  },
  {
    id: 'sour',
    name: 'سور',
    price: '4',
    unit: '€/م²',
    from: 'من',
    description: 'تنظيف وصيانة الأسوار والبوابات',
    category: 'خارجي ومركبات'
  },

  // خدمات متخصصة
  {
    id: 'alwah-shamsiya',
    name: 'ألواح شمسية',
    price: '3',
    unit: '€/م²',
    from: 'من',
    description: 'تنظيف متخصص للألواح الكهروضوئية',
    category: 'خدمات متخصصة'
  },
  {
    id: 'mazarib',
    name: 'مزاريب',
    price: '8',
    unit: '€/م',
    from: 'من',
    description: 'تنظيف وإزالة انسداد المزاريب',
    category: 'خدمات متخصصة'
  },
  {
    id: 'hithaa',
    name: 'حذاء',
    price: '12',
    unit: '€/زوج',
    from: 'من',
    description: 'تنظيف وترميم الأحذية',
    category: 'خدمات متخصصة'
  },
  {
    id: 'tahdhib',
    name: 'تهذيب',
    price: '30',
    unit: '€/حيوان',
    from: 'من',
    description: 'خدمات تهذيب الحيوانات الأليفة',
    category: 'خدمات متخصصة'
  }

]
,
  
es: [

  // Limpieza Interior
  {
    id: 'oficina',
    name: 'Oficina',
    price: '8',
    unit: '€/m²',
    from: 'desde',
    description: 'Limpieza profesional de oficinas y espacios de trabajo',
    category: 'Limpieza Interior'
  },
  {
    id: 'apartamento',
    name: 'Apartamento',
    price: '15',
    unit: '€/m²',
    from: 'desde',
    description: 'Limpieza completa de apartamentos y estudios',
    category: 'Limpieza Interior'
  },
  {
    id: 'casa',
    name: 'Casa',
    price: '12',
    unit: '€/m²',
    from: 'desde',
    description: 'Limpieza completa de casas individuales',
    category: 'Limpieza Interior'
  },
  {
    id: 'cristales',
    name: 'Cristales',
    price: '6',
    unit: '€/m²',
    from: 'desde',
    description: 'Limpieza de ventanas y paneles de cristal',
    category: 'Limpieza Interior'
  },

  // Limpieza Comercial
  {
    id: 'comercial',
    name: 'Comercial',
    price: '10',
    unit: '€/m²',
    from: 'desde',
    description: 'Mantenimiento de locales comerciales y tiendas',
    category: 'Limpieza Comercial'
  },
  {
    id: 'edificio',
    name: 'Edificio',
    price: '7',
    unit: '€/m²',
    from: 'desde',
    description: 'Limpieza de áreas comunes y fachadas de edificios',
    category: 'Limpieza Comercial'
  },
  {
    id: 'aparcamiento',
    name: 'Aparcamiento',
    price: '5',
    unit: '€/m²',
    from: 'desde',
    description: 'Limpieza de aparcamientos y garajes subterráneos',
    category: 'Limpieza Comercial'
  },
  {
    id: 'fin-obra',
    name: 'Fin de obra',
    price: '18',
    unit: '€/m²',
    from: 'desde',
    description: 'Limpieza post-construcción y renovación',
    category: 'Limpieza Comercial'
  },

  // Textiles y Mobiliario
  {
    id: 'alfombra',
    name: 'Alfombra',
    price: '12',
    unit: '€/m²',
    from: 'desde',
    description: 'Limpieza profesional de alfombras y moquetas',
    category: 'Textiles y Mobiliario'
  },
  {
    id: 'sillon',
    name: 'Sillón',
    price: '45',
    unit: '€/pieza',
    from: 'desde',
    description: 'Limpieza de sillones y sofás de tela',
    category: 'Textiles y Mobiliario'
  },
  {
    id: 'colchon',
    name: 'Colchón',
    price: '35',
    unit: '€/pieza',
    from: 'desde',
    description: 'Desinfección y limpieza profunda de colchones',
    category: 'Textiles y Mobiliario'
  },
  {
    id: 'ropa',
    name: 'Ropa',
    price: '8',
    unit: '€/pieza',
    from: 'desde',
    description: 'Limpieza en seco y planchado de ropa',
    category: 'Textiles y Mobiliario'
  },

  // Exterior y Vehículos
  {
    id: 'terraza',
    name: 'Terraza',
    price: '9',
    unit: '€/m²',
    from: 'desde',
    description: 'Limpieza de terrazas y espacios exteriores',
    category: 'Exterior y Vehículos'
  },
  {
    id: 'jardin',
    name: 'Jardín',
    price: '25',
    unit: '€/h',
    from: 'desde',
    description: 'Mantenimiento de jardines y espacios verdes',
    category: 'Exterior y Vehículos'
  },
  {
    id: 'coche',
    name: 'Coche',
    price: '25',
    unit: '€/vehículo',
    from: 'desde',
    description: 'Lavado completo interior y exterior de vehículos',
    category: 'Exterior y Vehículos'
  },
  {
    id: 'moto',
    name: 'Moto',
    price: '15',
    unit: '€/vehículo',
    from: 'desde',
    description: 'Lavado y mantenimiento de motos y scooters',
    category: 'Exterior y Vehículos'
  },
  {
    id: 'valla',
    name: 'Valla',
    price: '4',
    unit: '€/m²',
    from: 'desde',
    description: 'Limpieza y mantenimiento de vallas y portones',
    category: 'Exterior y Vehículos'
  },

  // Servicios Especializados
  {
    id: 'paneles-solares',
    name: 'Paneles solares',
    price: '3',
    unit: '€/m²',
    from: 'desde',
    description: 'Limpieza especializada de paneles fotovoltaicos',
    category: 'Servicios Especializados'
  },
  {
    id: 'canalones',
    name: 'Canalones',
    price: '8',
    unit: '€/m',
    from: 'desde',
    description: 'Limpieza y desatasco de canalones',
    category: 'Servicios Especializados'
  },
  {
    id: 'zapatos',
    name: 'Zapatos',
    price: '12',
    unit: '€/par',
    from: 'desde',
    description: 'Limpieza y restauración de zapatos',
    category: 'Servicios Especializados'
  },
  {
    id: 'peluqueria',
    name: 'Peluquería',
    price: '30',
    unit: '€/animal',
    from: 'desde',
    description: 'Servicios de peluquería para mascotas',
    category: 'Servicios Especializados'
  }

]
,  
pt: [

  // Limpeza Interior
  {
    id: 'escritorio',
    name: 'Escritório',
    price: '8',
    unit: '€/m²',
    from: 'a partir de',
    description: 'Limpeza profissional de escritórios e espaços de trabalho',
    category: 'Limpeza Interior'
  },
  {
    id: 'apartamento',
    name: 'Apartamento',
    price: '15',
    unit: '€/m²',
    from: 'a partir de',
    description: 'Limpeza completa de apartamentos e estúdios',
    category: 'Limpeza Interior'
  },
  {
    id: 'casa',
    name: 'Casa',
    price: '12',
    unit: '€/m²',
    from: 'a partir de',
    description: 'Limpeza completa de casas individuais',
    category: 'Limpeza Interior'
  },
  {
    id: 'vidros',
    name: 'Vidros',
    price: '6',
    unit: '€/m²',
    from: 'a partir de',
    description: 'Limpeza de janelas e painéis de vidro',
    category: 'Limpeza Interior'
  },

  // Limpeza Comercial
  {
    id: 'comercial',
    name: 'Comercial',
    price: '10',
    unit: '€/m²',
    from: 'a partir de',
    description: 'Manutenção de estabelecimentos comerciais e lojas',
    category: 'Limpeza Comercial'
  },
  {
    id: 'predio',
    name: 'Prédio',
    price: '7',
    unit: '€/m²',
    from: 'a partir de',
    description: 'Limpeza de áreas comuns e fachadas de prédios',
    category: 'Limpeza Comercial'
  },
  {
    id: 'estacionamento',
    name: 'Estacionamento',
    price: '5',
    unit: '€/m²',
    from: 'a partir de',
    description: 'Limpeza de estacionamentos e garagens subterrâneas',
    category: 'Limpeza Comercial'
  },
  {
    id: 'pos-obra',
    name: 'Pós-obra',
    price: '18',
    unit: '€/m²',
    from: 'a partir de',
    description: 'Limpeza pós-construção e renovação',
    category: 'Limpeza Comercial'
  },

  // Têxteis e Mobiliário
  {
    id: 'tapete',
    name: 'Tapete',
    price: '12',
    unit: '€/m²',
    from: 'a partir de',
    description: 'Limpeza profissional de tapetes e carpetes',
    category: 'Têxteis e Mobiliário'
  },
  {
    id: 'poltrona',
    name: 'Poltrona',
    price: '45',
    unit: '€/peça',
    from: 'a partir de',
    description: 'Limpeza de poltronas e sofás de tecido',
    category: 'Têxteis e Mobiliário'
  },
  {
    id: 'colchao',
    name: 'Colchão',
    price: '35',
    unit: '€/peça',
    from: 'a partir de',
    description: 'Desinfecção e limpeza profunda de colchões',
    category: 'Têxteis e Mobiliário'
  },
  {
    id: 'roupas',
    name: 'Roupas',
    price: '8',
    unit: '€/peça',
    from: 'a partir de',
    description: 'Lavanderia e passagem de roupas',
    category: 'Têxteis e Mobiliário'
  },

  // Exterior e Veículos
  {
    id: 'terraço',
    name: 'Terraço',
    price: '9',
    unit: '€/m²',
    from: 'a partir de',
    description: 'Limpeza de terraços e espaços exteriores',
    category: 'Exterior e Veículos'
  },
  {
    id: 'jardim',
    name: 'Jardim',
    price: '25',
    unit: '€/h',
    from: 'a partir de',
    description: 'Manutenção de jardins e espaços verdes',
    category: 'Exterior e Veículos'
  },
  {
    id: 'carro',
    name: 'Carro',
    price: '25',
    unit: '€/veículo',
    from: 'a partir de',
    description: 'Lavagem completa interior e exterior de veículos',
    category: 'Exterior e Veículos'
  },
  {
    id: 'moto',
    name: 'Moto',
    price: '15',
    unit: '€/veículo',
    from: 'a partir de',
    description: 'Lavagem e manutenção de motos e scooters',
    category: 'Exterior e Veículos'
  },
  {
    id: 'cerca',
    name: 'Cerca',
    price: '4',
    unit: '€/m²',
    from: 'a partir de',
    description: 'Limpeza e manutenção de cercas e portões',
    category: 'Exterior e Veículos'
  },

  // Serviços Especializados
  {
    id: 'paineis-solares',
    name: 'Painéis solares',
    price: '3',
    unit: '€/m²',
    from: 'a partir de',
    description: 'Limpeza especializada de painéis fotovoltaicos',
    category: 'Serviços Especializados'
  },
  {
    id: 'calhas',
    name: 'Calhas',
    price: '8',
    unit: '€/m',
    from: 'a partir de',
    description: 'Limpeza e desentupimento de calhas',
    category: 'Serviços Especializados'
  },
  {
    id: 'sapatos',
    name: 'Sapatos',
    price: '12',
    unit: '€/par',
    from: 'a partir de',
    description: 'Limpeza e restauração de sapatos',
    category: 'Serviços Especializados'
  },
  {
    id: 'tosa',
    name: 'Tosa',
    price: '30',
    unit: '€/animal',
    from: 'a partir de',
    description: 'Serviços de tosa para animais de estimação',
    category: 'Serviços Especializados'
  }

]
,
  
it: [

  // Pulizia Interni
  {
    id: 'ufficio',
    name: 'Ufficio',
    price: '8',
    unit: '€/m²',
    from: 'da',
    description: 'Pulizia professionale di uffici e spazi di lavoro',
    category: 'Pulizia Interni'
  },
  {
    id: 'appartamento',
    name: 'Appartamento',
    price: '15',
    unit: '€/m²',
    from: 'da',
    description: 'Pulizia completa di appartamenti e monolocali',
    category: 'Pulizia Interni'
  },
  {
    id: 'casa',
    name: 'Casa',
    price: '12',
    unit: '€/m²',
    from: 'da',
    description: 'Pulizia completa di case individuali',
    category: 'Pulizia Interni'
  },
  {
    id: 'vetri',
    name: 'Vetri',
    price: '6',
    unit: '€/m²',
    from: 'da',
    description: 'Pulizia di finestre e pannelli di vetro',
    category: 'Pulizia Interni'
  },

  // Pulizia Commerciale
  {
    id: 'commerciale',
    name: 'Commerciale',
    price: '10',
    unit: '€/m²',
    from: 'da',
    description: 'Manutenzione di locali commerciali e negozi',
    category: 'Pulizia Commerciale'
  },
  {
    id: 'edificio',
    name: 'Edificio',
    price: '7',
    unit: '€/m²',
    from: 'da',
    description: 'Pulizia di aree comuni e facciate di edifici',
    category: 'Pulizia Commerciale'
  },
  {
    id: 'parcheggio',
    name: 'Parcheggio',
    price: '5',
    unit: '€/m²',
    from: 'da',
    description: 'Pulizia di parcheggi e garage sotterranei',
    category: 'Pulizia Commerciale'
  },
  {
    id: 'fine-cantiere',
    name: 'Fine cantiere',
    price: '18',
    unit: '€/m²',
    from: 'da',
    description: 'Pulizia post-costruzione e ristrutturazione',
    category: 'Pulizia Commerciale'
  },

  // Tessili e Mobili
  {
    id: 'tappeto',
    name: 'Tappeto',
    price: '12',
    unit: '€/m²',
    from: 'da',
    description: 'Pulizia professionale di tappeti e moquette',
    category: 'Tessili e Mobili'
  },
  {
    id: 'poltrona',
    name: 'Poltrona',
    price: '45',
    unit: '€/pezzo',
    from: 'da',
    description: 'Pulizia di poltrone e divani in tessuto',
    category: 'Tessili e Mobili'
  },
  {
    id: 'materasso',
    name: 'Materasso',
    price: '35',
    unit: '€/pezzo',
    from: 'da',
    description: 'Disinfezione e pulizia profonda di materassi',
    category: 'Tessili e Mobili'
  },
  {
    id: 'vestiti',
    name: 'Vestiti',
    price: '8',
    unit: '€/pezzo',
    from: 'da',
    description: 'Lavanderia e stiratura di vestiti',
    category: 'Tessili e Mobili'
  },

  // Esterno e Veicoli
  {
    id: 'terrazza',
    name: 'Terrazza',
    price: '9',
    unit: '€/m²',
    from: 'da',
    description: 'Pulizia di terrazze e spazi esterni',
    category: 'Esterno e Veicoli'
  },
  {
    id: 'giardino',
    name: 'Giardino',
    price: '25',
    unit: '€/h',
    from: 'da',
    description: 'Manutenzione di giardini e spazi verdi',
    category: 'Esterno e Veicoli'
  },
  {
    id: 'auto',
    name: 'Auto',
    price: '25',
    unit: '€/veicolo',
    from: 'da',
    description: 'Lavaggio completo interno ed esterno di veicoli',
    category: 'Esterno e Veicoli'
  },
  {
    id: 'moto',
    name: 'Moto',
    price: '15',
    unit: '€/veicolo',
    from: 'da',
    description: 'Lavaggio e manutenzione di moto e scooter',
    category: 'Esterno e Veicoli'
  },
  {
    id: 'recinzione',
    name: 'Recinzione',
    price: '4',
    unit: '€/m²',
    from: 'da',
    description: 'Pulizia e manutenzione di recinzioni e cancelli',
    category: 'Esterno e Veicoli'
  },

  // Servizi Specializzati
  {
    id: 'pannelli-solari',
    name: 'Pannelli solari',
    price: '3',
    unit: '€/m²',
    from: 'da',
    description: 'Pulizia specializzata di pannelli fotovoltaici',
    category: 'Servizi Specializzati'
  },
  {
    id: 'grondaie',
    name: 'Grondaie',
    price: '8',
    unit: '€/m',
    from: 'da',
    description: 'Pulizia e sturaggio di grondaie',
    category: 'Servizi Specializzati'
  },
  {
    id: 'scarpe',
    name: 'Scarpe',
    price: '12',
    unit: '€/paio',
    from: 'da',
    description: 'Pulizia e restauro di scarpe',
    category: 'Servizi Specializzati'
  },
  {
    id: 'toelettatura',
    name: 'Toelettatura',
    price: '30',
    unit: '€/animale',
    from: 'da',
    description: 'Servizi di toelettatura per animali domestici',
    category: 'Servizi Specializzati'
  }

]
,
  
de: [

  // Innenreinigung
  {
    id: 'buero',
    name: 'Büro',
    price: '8',
    unit: '€/m²',
    from: 'ab',
    description: 'Professionelle Büro- und Arbeitsplatzreinigung',
    category: 'Innenreinigung'
  },
  {
    id: 'wohnung',
    name: 'Wohnung',
    price: '15',
    unit: '€/m²',
    from: 'ab',
    description: 'Komplette Wohnungs- und Studioreinigung',
    category: 'Innenreinigung'
  },
  {
    id: 'haus',
    name: 'Haus',
    price: '12',
    unit: '€/m²',
    from: 'ab',
    description: 'Komplette Einzelhausreinigung',
    category: 'Innenreinigung'
  },
  {
    id: 'fenster',
    name: 'Fenster',
    price: '6',
    unit: '€/m²',
    from: 'ab',
    description: 'Reinigung von Fenstern und Glasscheiben',
    category: 'Innenreinigung'
  },

  // Gewerbliche Reinigung
  {
    id: 'gewerbe',
    name: 'Gewerbe',
    price: '10',
    unit: '€/m²',
    from: 'ab',
    description: 'Wartung von Geschäftsräumen und Läden',
    category: 'Gewerbliche Reinigung'
  },
  {
    id: 'gebaeude',
    name: 'Gebäude',
    price: '7',
    unit: '€/m²',
    from: 'ab',
    description: 'Reinigung von Gemeinschaftsbereichen und Gebäudefassaden',
    category: 'Gewerbliche Reinigung'
  },
  {
    id: 'parkplatz',
    name: 'Parkplatz',
    price: '5',
    unit: '€/m²',
    from: 'ab',
    description: 'Reinigung von Parkplätzen und Tiefgaragen',
    category: 'Gewerbliche Reinigung'
  },
  {
    id: 'bauende',
    name: 'Bauende',
    price: '18',
    unit: '€/m²',
    from: 'ab',
    description: 'Reinigung nach Bau und Renovierung',
    category: 'Gewerbliche Reinigung'
  },

  // Textilien und Möbel
  {
    id: 'teppich',
    name: 'Teppich',
    price: '12',
    unit: '€/m²',
    from: 'ab',
    description: 'Professionelle Teppich- und Läuferreinigung',
    category: 'Textilien und Möbel'
  },
  {
    id: 'sessel',
    name: 'Sessel',
    price: '45',
    unit: '€/Stück',
    from: 'ab',
    description: 'Reinigung von Stoffsesseln und Sofas',
    category: 'Textilien und Möbel'
  },
  {
    id: 'matratze',
    name: 'Matratze',
    price: '35',
    unit: '€/Stück',
    from: 'ab',
    description: 'Desinfektion und Tiefenreinigung von Matratzen',
    category: 'Textilien und Möbel'
  },
  {
    id: 'kleidung',
    name: 'Kleidung',
    price: '8',
    unit: '€/Stück',
    from: 'ab',
    description: 'Trockenreinigung und Kleidungsbügeln',
    category: 'Textilien und Möbel'
  },

  // Außenbereich und Fahrzeuge
  {
    id: 'terrasse',
    name: 'Terrasse',
    price: '9',
    unit: '€/m²',
    from: 'ab',
    description: 'Terrassen- und Außenbereichsreinigung',
    category: 'Außenbereich und Fahrzeuge'
  },
  {
    id: 'garten',
    name: 'Garten',
    price: '25',
    unit: '€/h',
    from: 'ab',
    description: 'Garten- und Grünflächenpflege',
    category: 'Außenbereich und Fahrzeuge'
  },
  {
    id: 'auto',
    name: 'Auto',
    price: '25',
    unit: '€/Fahrzeug',
    from: 'ab',
    description: 'Komplette Innen- und Außenfahrzeugwäsche',
    category: 'Außenbereich und Fahrzeuge'
  },
  {
    id: 'motorrad',
    name: 'Motorrad',
    price: '15',
    unit: '€/Fahrzeug',
    from: 'ab',
    description: 'Motorrad- und Rollerwäsche und -wartung',
    category: 'Außenbereich und Fahrzeuge'
  },
  {
    id: 'zaun',
    name: 'Zaun',
    price: '4',
    unit: '€/m²',
    from: 'ab',
    description: 'Reinigung und Wartung von Zäunen und Toren',
    category: 'Außenbereich und Fahrzeuge'
  },

  // Spezialisierte Dienstleistungen
  {
    id: 'solarpanels',
    name: 'Solarpanels',
    price: '3',
    unit: '€/m²',
    from: 'ab',
    description: 'Spezialisierte Photovoltaik-Panelreinigung',
    category: 'Spezialisierte Dienstleistungen'
  },
  {
    id: 'dachrinnen',
    name: 'Dachrinnen',
    price: '8',
    unit: '€/m',
    from: 'ab',
    description: 'Dachrinnenreinigung und -entstopfung',
    category: 'Spezialisierte Dienstleistungen'
  },
  {
    id: 'schuhe',
    name: 'Schuhe',
    price: '12',
    unit: '€/Paar',
    from: 'ab',
    description: 'Schuhreinigung und -restaurierung',
    category: 'Spezialisierte Dienstleistungen'
  },
  {
    id: 'pflege',
    name: 'Pflege',
    price: '30',
    unit: '€/Tier',
    from: 'ab',
    description: 'Pflegedienste für Haustiere',
    category: 'Spezialisierte Dienstleistungen'
  }

]

  
  };
  
  