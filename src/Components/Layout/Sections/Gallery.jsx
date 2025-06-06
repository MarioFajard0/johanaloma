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
import OptimizedImage from '../../Utility/OptimizedImage';

const Gallery = () => {
  const galleryImages = [
    { id: 'gallery-1', src: galleryImage1, alt: 'Estilismo profesional' },
    { id: 'gallery-2', src: galleryImage2, alt: 'Diseño de uñas elegante' },
    { id: 'gallery-3', src: galleryImage3, alt: 'Manicura tinto' },
    { id: 'gallery-4', src: galleryImage4, alt: 'Uñas decoradas en rosa' },
    { id: 'gallery-5', src: galleryImage5, alt: 'Diseño de uñas doradas' },
    { id: 'gallery-6', src: galleryImage6, alt: 'Boutique de belleza' },
    { id: 'gallery-7', src: galleryImage7, alt: 'Manicura profesional' },
    { id: 'gallery-8', src: galleryImage8, alt: 'Maquillaje profesional' }
  ];

  return (
    <section id="gallery" className="gallery">
      <ScrollAnimation>
        <h2>Nuestros Trabajos</h2>
      </ScrollAnimation>
      
      <div className="gallery-images">
        {galleryImages.map((image, index) => (
          <ScrollAnimation 
            key={image.id} 
            delay={index * 0.1}
          >
            <OptimizedImage 
              src={image.src} 
              alt={image.alt} 
              className="gallery-image"
              loading="lazy"
              placeholderColor="#f8f4f2"
            />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Gallery;