import '../../../Styles/Gallery.css';
import ScrollAnimation from '../../Animation/ScrollAnimation';
import galleryImage1 from '../../../assets/unas-rosas2.webp';
import galleryImage2 from '../../../assets/unas-doradas.webp';
import galleryImage3 from '../../../assets/unas-tinto.webp';
import galleryImage4 from '../../../assets/unas-nais.webp';
import galleryImage5 from '../../../assets/cabello-1.webp';
import galleryImage6 from '../../../assets/cabello-2.webp';
import galleryImage7 from '../../../assets/cabello-3.webp';
import galleryImage8 from '../../../assets/pestanas-1.webp';
import galleryImage9 from '../../../assets/uñas100.webp';
import galleryImage10 from '../../../assets/uñas200.webp';
import galleryImage11 from '../../../assets/uñas300.webp';
import galleryImage12 from '../../../assets/uñas400.webp';
import OptimizedImage from '../../Utility/OptimizedImage';
import Slider from 'react-slick';
import { useRef, useState } from 'react';

// Importar los estilos CSS de React Slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    { id: 'gallery-1', src: galleryImage1, alt: 'Estilismo profesional' },
    { id: 'gallery-2', src: galleryImage2, alt: 'Diseño de uñas elegante' },
    { id: 'gallery-3', src: galleryImage3, alt: 'Manicura tinto' },
    { id: 'gallery-4', src: galleryImage4, alt: 'Uñas decoradas en rosa' },
    { id: 'gallery-9', src: galleryImage9, alt: 'Uñas decoradas en rosa' },
    { id: 'gallery-10', src: galleryImage10, alt: 'Uñas decoradas en rosa' },
    { id: 'gallery-11', src: galleryImage11, alt: 'Uñas decoradas en rosa' },
    { id: 'gallery-12', src: galleryImage12, alt: 'Uñas decoradas en rosa' },
    { id: 'gallery-5', src: galleryImage5, alt: 'Diseño de uñas doradas' },
    { id: 'gallery-6', src: galleryImage6, alt: 'Boutique de belleza' },
    { id: 'gallery-7', src: galleryImage7, alt: 'Manicura profesional' },
    { id: 'gallery-8', src: galleryImage8, alt: 'Maquillaje profesional' }
  ];

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        }
      }
    ]
  };

  // Funciones para los botones de navegación personalizados
  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id="gallery" className="gallery">
      <ScrollAnimation>
        <h2>Nuestros Trabajos</h2>
      </ScrollAnimation>
      
      <div className="gallery-carousel-container">
        <button 
          className="gallery-nav-button prev-button" 
          onClick={goToPrev}
          aria-label="Imagen anterior"
        >
          &#10094;
        </button>
        
        <div className="gallery-carousel">
          <Slider ref={sliderRef} {...settings}>
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-slide">
                <OptimizedImage 
                  src={image.src} 
                  alt={image.alt} 
                  className="gallery-image"
                  loading="lazy"
                  placeholderColor="#f8f4f2"
                />
              </div>
            ))}
          </Slider>
        </div>
        
        <button 
          className="gallery-nav-button next-button" 
          onClick={goToNext}
          aria-label="Imagen siguiente"
        >
          &#10095;
        </button>
      </div>
      
      <div className="gallery-counter">
        Grupo {Math.floor(currentSlide / 3) + 1} de {Math.ceil(galleryImages.length / 3)}
      </div>
    </section>
  );
};

export default Gallery;