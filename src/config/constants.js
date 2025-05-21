/**
 * Archivo de configuraciu00f3n central para la aplicaciu00f3n
 * Contiene constantes y configuraciones utilizadas en mu00faltiples componentes
 */

// Informaciu00f3n de contacto
export const CONTACT_INFO = {
  // Nu00famero de WhatsApp sin el signo '+'
  whatsappNumber: '526682332722',
  // Mensajes predeterminados para WhatsApp
  whatsappMessages: {
    default: 'Hola, me gustaru00eda obtener mu00e1s informaciu00f3n',
    appointment: 'Hola Johana Loma!, me gustaru00eda reservar una cita'
  },
  // Email de contacto
  email: 'contacto@johanaloma.com',
};

// URLs para redes sociales
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/johanaloma',
  facebook: 'https://facebook.com/johanaloma',
  // Au00f1adir otras redes sociales segu00fan sea necesario
};

// Configuraciu00f3n de la aplicaciu00f3n
export const APP_CONFIG = {
  siteName: 'Johana Loma',
  siteDescription: 'Salu00f3n de belleza y estu00e9tica profesional',
};

// Construye una URL de WhatsApp con el nu00famero y mensaje
export const buildWhatsAppUrl = (number = CONTACT_INFO.whatsappNumber, message = CONTACT_INFO.whatsappMessages.default) => {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};
