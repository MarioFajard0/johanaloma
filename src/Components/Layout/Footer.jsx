import '../../Styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/galeria">Galería</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Servicios</h3>
          <ul>
            <li>Corte de Cabello</li>
            <li>Tinte y Color</li>
            <li>Tratamientos Capilares</li>
            <li>Peinados</li>
            <li>Maquillaje</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contacto</h3>
          <ul className="contact-info">
            <li><FaPhone /> <a href="tel:+526682332722">(+52) 6682332722</a></li>
            <li><FaEnvelope /> <a href="mailto:info@johanasalon.com">info@johanasalon.com</a></li>
            <li><FaMapMarkerAlt /> Miguel Hidalgo y Costilla 442, Centro, 81200 Los Mochis, Sinaloa</li>
          </ul>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Johana Salon. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;