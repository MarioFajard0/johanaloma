import { motion, LazyMotion, domAnimation } from 'framer-motion'
import PropTypes from 'prop-types'

// Configuración de transiciones de página - solo para cambios entre páginas
export const pageTransition = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

// Componente MotionPage simplificado sin animación inicial
export const MotionPage = ({ children }) => {
  // Usar LazyMotion para cargar solo lo necesario
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
};

MotionPage.propTypes = {
  children: PropTypes.node.isRequired
};
