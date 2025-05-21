import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const ScrollAnimation = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

ScrollAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number
};

ScrollAnimation.defaultProps = {
  delay: 0
};

export default ScrollAnimation;
