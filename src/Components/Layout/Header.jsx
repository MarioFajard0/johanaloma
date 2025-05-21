import '../../Styles/Header.css';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <header className="header">
      <div className='container'>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <Link 
            to="/" 
            className="logo" 
            onClick={(e) => {
              // Si estamos en la página principal, prevenimos la navegación por defecto
              // y hacemos scroll hacia arriba suavemente
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Johana Loma
          </Link>
        </motion.div>
        
        <nav className='nav'>
          <AnimatePresence>
            {[
              { to: "/servicios", text: "Servicios" },
              { to: "/nosotros", text: "Nosotros" },
              { to: "/galeria", text: "Galería" },
              { to: "/testimonios", text: "Testimonios" },
              { to: "/contacto", text: "Contacto" }
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={item.to}>{item.text}</Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </nav>

        <motion.a 
          href="https://wa.me/+526682332722?text=Hola%20Johana%20Loma!,%20me%20gustar%C3%ADa%20reservar%20una%20cita" 
          target="_blank" 
          rel="noopener noreferrer"
          className="appointment-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reservar Cita
        </motion.a>
      </div>
    </header>
  );
};

export default Header;