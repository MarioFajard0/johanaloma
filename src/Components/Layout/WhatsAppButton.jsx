import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/WhatsAppButton.css';

import whatsappIcon from '../../assets/whatsapp-icon.svg';

const WhatsAppButton = ({ phoneNumber = '6682332722', message = 'Hola Johana Loma!, me gustaria reservar una cita ' }) => {
  // Formateamos el enlace de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-button" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string,
  message: PropTypes.string
};

export default WhatsAppButton;
