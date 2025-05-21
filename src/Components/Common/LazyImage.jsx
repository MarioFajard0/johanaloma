import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LazyImage = ({ src, alt, className, placeholderColor = '#f0f0f0' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Crear un nuevo objeto Image para precargar
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    
    return () => {
      // Limpiar event listeners cuando el componente se desmonte
      img.onload = null;
    };
  }, [src]);

  return (
    <div 
      className={`lazy-image-container ${className || ''}`}
      style={{
        backgroundColor: placeholderColor,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {!isLoaded && (
        <div 
          className="lazy-image-placeholder"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#888',
          }}
        >
          <div className="loading-spinner" />
        </div>
      )}
      <img 
        src={imageSrc} 
        alt={alt} 
        className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholderColor: PropTypes.string
};

export default LazyImage;
