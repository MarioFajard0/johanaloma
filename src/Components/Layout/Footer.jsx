import '../../Styles/Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <ul className="social-links-list">
            <li><a href="https://www.facebook.com/p/Johana-Loma-Sal%C3%B3n-De-Belleza-61555933306081/?locale=es_LA" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a></li>
            <li><a href="https://www.instagram.com/johanalomasalon" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
            <li><a href="https://www.tiktok.com/@johanalomasalondebelleza" target="_blank" rel="noopener noreferrer"><FaTiktok /> TikTok</a></li>
            <li><a href="https://wa.me/526682332722?text=Hola,%20me%20gustaría%20obtener%20más%20información" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Servicios</h3>
          <ul>
            <li>Cortes y Peinados</li>
            <li>Coloración y Mechas</li>
            <li>Tratamientos Capilares</li>
            <li>Maquillaje Profesional</li>
            <li>Depilación</li>
            <li><a href="/servicios">Ver lista completa</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <ul className="contact-info">
            <li><FaPhone /> <a href="tel:+526682332722">(+52) 6682332722</a></li>
            <li><FaPhone /> <a href="tel:+526673603342">(+52) 6673603342</a></li>
            <li><FaEnvelope /> <a href="mailto:johanalomasalon@gmail.com">johanalomasalon@gmail.com</a></li>
            <li><FaMapMarkerAlt /> Miguel Hidalgo y Costilla 442, Centro, 81200 Los Mochis, Sinaloa</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Johana Salon. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;