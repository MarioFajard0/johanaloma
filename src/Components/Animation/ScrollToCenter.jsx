import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

export const ScrollToCenter = ({ children }) => {
  const elementRef = React.useRef(null);
  const location = useLocation();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (elementRef.current) {
        window.scrollTo({
          top: elementRef.current.offsetTop - (window.innerHeight / 2) + (elementRef.current.offsetHeight / 2),
          behavior: 'smooth'
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <div ref={elementRef}>{children}</div>;
};

ScrollToCenter.propTypes = {
  children: PropTypes.node.isRequired
};

export default ScrollToCenter;
