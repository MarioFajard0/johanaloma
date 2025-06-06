import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../Styles/OptimizedImage.css';

// Componente para cargar imágenes de manera optimizada
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  loading = 'lazy',
  placeholderColor = '#f0f0f0'
}) => {
  const [isLoaded, setIsLoaded] = useState(loading === 'eager');
  const [imgSrc, setImgSrc] = useState(loading === 'eager' ? src : '');
  
  useEffect(() => {
    // Si la carga es eager, ya tenemos la imagen configurada en los estados iniciales
    if (loading === 'eager') return;
    
    // Para imágenes lazy, usar el enfoque de precarga
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImgSrc(src);
      setIsLoaded(true);
    };
    
    // Manejo de errores
    img.onerror = () => {
      // Manejo silencioso de errores
      // Si se necesita depurar, usar un enfoque que no genere warnings
      setImgSrc('');
    };
    
    return () => {
      // Limpiar
      img.onload = null;
      img.onerror = null;
    };
  }, [src, loading]);

  return (
    <div 
      className={`optimized-image-container ${className}`}
      style={{ 
        position: 'relative',
        width: width || '100%',
        height: height || 'auto',
        backgroundColor: placeholderColor,
        overflow: 'hidden'
      }}
    >
      {imgSrc && (
        <img
          src={imgSrc}
          alt={alt}
          loading={loading}
          className={`optimized-image ${isLoaded ? 'loaded' : ''}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  loading: PropTypes.string,
  placeholderColor: PropTypes.string
};

export default OptimizedImage;
