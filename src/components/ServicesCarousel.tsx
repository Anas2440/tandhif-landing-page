import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { X } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Service {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface ServicesCarouselProps {
  services: Service[];
  isDark: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

const ServicesCarousel: React.FC<ServicesCarouselProps> = ({ 
  services, 
  isDark, 
  autoPlay = true, 
  autoPlayInterval = 4000 
}) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Disable body scroll when overlay is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const closeOverlay = () => {
    setSelectedService(null);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeOverlay();
    }
  };

  useEffect(() => {
    if (selectedService) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedService]);

  return (
    <>
    <div dir='ltr'>
    <div className="relative w-full py-8">
        <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
  <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={1} // Always show 1 centered slide
    coverflowEffect={{
      rotate: 0, // no rotation for cleaner center display
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    }}
    autoplay={
      autoPlay
        ? {
            delay: autoPlayInterval,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }
        : false
    }
    pagination={{
      clickable: true,
      dynamicBullets: true,
    }}
    navigation={true}
    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
    className="services-swiper"
  >
    {services.map((service) => (
      <SwiperSlide key={service.id} className="flex justify-center">
        <div
  className="group relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 rounded-2xl"
  onClick={() => handleServiceClick(service)}
>
          {/* Square Image Container */}
          <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FEE21B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Service Name Overlay - Bottom Left */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white group-hover:text-[#FEE21B] transition-colors duration-300 drop-shadow-lg">
                {service.name}
              </h3>
            </div>

            {/* Subtle Border Glow on Hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#FEE21B]/60 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#FEE21B]/20" />

            {/* Click Indicator */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-3 h-3 bg-[#FEE21B] rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  </div>
   </div></div>


      {/* Service Detail Overlay */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.85)' }}
          onClick={closeOverlay}
        >
          {/* Backdrop Blur Effect */}
          <div className="absolute inset-0 backdrop-blur-md" />
          
          {/* Modal Content */}
          <div 
            className={`relative max-w-3xl w-full rounded-3xl p-8 transform transition-all duration-500 ${
              isDark 
                ? 'bg-gray-900/95 border border-gray-700/50' 
                : 'bg-white/95 border border-gray-200/50'
            } shadow-2xl backdrop-blur-sm`}
            style={{
              animation: 'modalSlideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeOverlay}
              className={`absolute top-6 right-6 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90 ${
                isDark 
                  ? 'bg-gray-800/80 text-gray-400 hover:bg-gray-700 hover:text-white' 
                  : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200 hover:text-black'
              } backdrop-blur-sm`}
            >
              <X className="h-6 w-6" />
            </button>

            {/* Service Image */}
            <div className="w-64 h-64 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
  <img
    src={selectedService.image}
    alt={selectedService.name}
    className="w-full h-full object-cover"
  />
</div>


            {/* Service Details */}
            {/* <div className="text-center">
              <h2 className={`text-4xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-black'
              }`}>
                {selectedService.name}
              </h2>
              <ul className={`text-left text-lg space-y-2 leading-relaxed mb-8 ${
  isDark ? 'text-gray-300' : 'text-gray-700'
}`}>
  {selectedService.description.split('\n').map((line, index) => (
    <li key={index} className="flex items-start gap-2">
      <span className="mt-1 text-[#FEE21B]">•</span>
      <span>{line}</span>
    </li>
  ))}
</ul>

              <p className={`text-xl leading-relaxed mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {selectedService.description}
              </p>
            </div> */}
            <div className="flex flex-col items-center justify-center text-center min-h-[300px] px-4">
  <h2 className={`text-4xl font-bold mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
    {selectedService.name}
  </h2>

  <ul className={`text-lg space-y-4 leading-relaxed ${
    isDark ? 'text-gray-300' : 'text-gray-700'
  }`}>
    {selectedService.description.split('\n').map((line, index) => (
      <li key={index} className="flex items-center gap-3">
        <span className="text-[#FEE21B] text-xl">•</span>
        <span>{line}</span>
      </li>
    ))}
  </ul>
</div>


            {/* Action Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-[#FEE21B] text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-yellow-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Réserver ce service
              </button>
              <button 
                onClick={closeOverlay}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 border-2 ${
                  isDark 
                    ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white' 
                    : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:text-black'
                }`}
              >
                Fermer
              </button>
            </div> */}
          </div>
        </div>
      )}

      <style jsx global>{`
        .services-swiper {
          padding: 50px 0 80px 0 !important;
        }
        
        .services-swiper .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 320px !important;
          height: 320px !important;
        }
        
        .services-swiper .swiper-slide-active {
          transform: scale(1.1) !important;
        }
        
        .services-swiper .swiper-pagination {
          bottom: 20px !important;
        }
        
        .services-swiper .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: ${isDark ? '#6B7280' : '#D1D5DB'} !important;
          opacity: 1 !important;
          transition: all 0.3s ease !important;
        }
        
        .services-swiper .swiper-pagination-bullet-active {
          background: #FEE21B !important;
          transform: scale(1.3) !important;
          box-shadow: 0 0 20px rgba(254, 226, 27, 0.5) !important;
        }
        
        .services-swiper .swiper-button-next,
        .services-swiper .swiper-button-prev {
          color: #FEE21B !important;
          background: ${isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'} !important;
          width: 50px !important;
          height: 50px !important;
          border-radius: 50% !important;
          backdrop-filter: blur(10px) !important;
          transition: all 0.3s ease !important;
        }
        
        .services-swiper .swiper-button-next:hover,
        .services-swiper .swiper-button-prev:hover {
          transform: scale(1.1) !important;
          box-shadow: 0 10px 30px rgba(254, 226, 27, 0.3) !important;
        }
        
        .services-swiper .swiper-button-next::after,
        .services-swiper .swiper-button-prev::after {
          font-size: 20px !important;
          font-weight: bold !important;
        }
        
        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          background-image: none !important;
        }
      `}</style>
    </>
  );
};

export default ServicesCarousel;