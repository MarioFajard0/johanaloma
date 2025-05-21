import  { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import { MotionPage } from './Components/Animation/PageTransition'
import ScrollToCenter from './Components/Animation/ScrollToCenter'
import WhatsAppButton from './Components/Layout/WhatsAppButton'
// Las constantes se utilizan directamente en WhatsAppButton

// Lazy load components, componente para mejorar el rendimiento 
const Hero = lazy(() => import('./Components/Layout/Sections/Hero'))
const Services = lazy(() => import('./Components/Layout/Sections/Services'))
const About = lazy(() => import('./Components/Layout/Sections/About'))
const Gallery = lazy(() => import('./Components/Layout/Sections/Gallery'))
const Testimonials = lazy(() => import('./Components/Layout/Sections/Testimonials'))
const Contact = lazy(() => import('./Components/Layout/Sections/Contact'))

// Componente de carga
const LoadingFallback = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh',
    fontSize: '1.5rem',
    color: 'var(--color-primary)'
  }}>
    Cargando...
  </div>
);

const HomePage = () => (
  <MotionPage>
    <main>
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </Suspense>
    </main>
  </MotionPage>
);
 
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="out-in">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={
          <MotionPage>
            <ScrollToCenter>
              <Suspense fallback={<LoadingFallback />}>
                <Services />
              </Suspense>
            </ScrollToCenter>
          </MotionPage>
        } />
        <Route path="/nosotros" element={
          <MotionPage>
            <ScrollToCenter>
              <Suspense fallback={<LoadingFallback />}>
                <About />
              </Suspense>
            </ScrollToCenter>
          </MotionPage>
        } />
        <Route path="/galeria" element={
          <MotionPage>
            <ScrollToCenter>
              <Suspense fallback={<LoadingFallback />}>
                <Gallery />
              </Suspense>
            </ScrollToCenter>
          </MotionPage>
        } />
        <Route path="/testimonios" element={
          <MotionPage>
            <ScrollToCenter>
              <Suspense fallback={<LoadingFallback />}>
                <Testimonials />
              </Suspense>
            </ScrollToCenter>
          </MotionPage>
        } />
        <Route path="/contacto" element={
          <MotionPage>
            <ScrollToCenter>
              <Suspense fallback={<LoadingFallback />}>
                <Contact />
              </Suspense>
            </ScrollToCenter>
          </MotionPage>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Header />
        <AnimatedRoutes />
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App
