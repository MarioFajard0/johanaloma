import '../../../Styles/Gallery.css';
import ScrollAnimation from '../../Animation/ScrollAnimation';
import galleryImage1 from '../../../assets/background.webp';
import OptimizedImage from '../../Utility/OptimizedImage';

const Gallery = () => {
  // Temporalmente usando la misma imagen para demostración
  const galleryImages = [
    { id: 'gallery-1', src: galleryImage1, alt: 'Corte de cabello moderno y elegante' },
    { id: 'gallery-2', src: galleryImage1, alt: 'Coloración y mechas naturales' },
    { id: 'gallery-3', src: galleryImage1, alt: 'Peinado para ocasión especial' },
    { id: 'gallery-4', src: galleryImage1, alt: 'Tratamiento capilar revitalizante' },
    { id: 'gallery-5', src: galleryImage1, alt: 'Diseño de uñas exclusivo' },
    { id: 'gallery-6', src: galleryImage1, alt: 'Estilo de cabello personalizado' },
    { id: 'gallery-7', src: galleryImage1, alt: 'Balayage profesional' },
    { id: 'gallery-8', src: galleryImage1, alt: 'Recogido elegante' }
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