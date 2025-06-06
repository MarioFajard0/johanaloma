import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import { MotionPage } from "./Components/Animation/PageTransition";
import ScrollToCenter from "./Components/Animation/ScrollToCenter";
import WhatsAppButton from "./Components/Layout/WhatsAppButton";
import "./Styles/LoadingFallback.css";

import Hero from "./Components/Layout/Sections/Hero";

// Lazy load para la carga diferida de componentes 
const Services = lazy(() => import("./Components/Layout/Sections/Services"));
const About = lazy(() => import("./Components/Layout/Sections/About"));
const Gallery = lazy(() => import("./Components/Layout/Sections/Gallery"));
const Testimonials = lazy(
  () => import("./Components/Layout/Sections/Testimonials")
);
const Contact = lazy(() => import("./Components/Layout/Sections/Contact"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="loading-fallback">
    <div className="spinner" />
  </div>
);

const HomePage = () => (
  <MotionPage>
    <main>
      <Hero />

      <Suspense fallback={<LoadingFallback />}>
        <Services />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Gallery />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Contact />
      </Suspense>
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

// Componente para encapsular la estructura común de las rutas
const PageWrapper = ({ Component }) => (
  <MotionPage>
    <ScrollToCenter>
      <Suspense fallback={<LoadingFallback />}>
        <Component />
      </Suspense>
    </ScrollToCenter>
  </MotionPage>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  // Definir las rutas en un array para mapearlas
  const routes = [
    { path: "/servicios", Component: Services },
    { path: "/nosotros", Component: About },
    { path: "/galeria", Component: Gallery },
    { path: "/testimonios", Component: Testimonials },
    { path: "/contacto", Component: Contact },
  ];

  return (
    <AnimatePresence mode="out-in">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<PageWrapper Component={Component} />}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default App;
