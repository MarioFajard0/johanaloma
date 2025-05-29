import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './Components/Layout/Header'
import Footer from './Components/Layout/Footer'
import { MotionPage } from './Components/Animation/PageTransition'
import ScrollToCenter from './Components/Animation/ScrollToCenter'
import WhatsAppButton from './Components/Layout/WhatsAppButton'
import Hero from './Components/Layout/Sections/Hero'
import Services from './Components/Layout/Sections/Services'
import About from './Components/Layout/Sections/About'
import Gallery from './Components/Layout/Sections/Gallery'
import Testimonials from './Components/Layout/Sections/Testimonials'
import Contact from './Components/Layout/Sections/Contact'

// Las constantes se utilizan directamente en WhatsAppButton

// Lazy load components, funcion de react para carga diferida, solo carga los componentes cuando se necesita

// Componente de carga


const HomePage = () => (
  <MotionPage>
    <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
    </main>
  </MotionPage>
);

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
 
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="out-in">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={
          <MotionPage>
            <ScrollToCenter>
                <Services />
            </ScrollToCenter>
          </MotionPage>
        } />
        <Route path="/nosotros" element={
          <MotionPage>
            <ScrollToCenter>
                <About />
            </ScrollToCenter>
          </MotionPage>
        } />
        <Route path="/galeria" element={
          <MotionPage>
            <ScrollToCenter>
                <Gallery />
            </ScrollToCenter>
          </MotionPage>
        } />
        <Route path="/testimonios" element={
          <MotionPage>
            <ScrollToCenter>
                <Testimonials />
            </ScrollToCenter>
          </MotionPage>
        } />
        <Route path="/contacto" element={
          <MotionPage>
            <ScrollToCenter>
                <Contact />
            </ScrollToCenter>
          </MotionPage>
        } />
      </Routes>
    </AnimatePresence>
  );
};



export default App
