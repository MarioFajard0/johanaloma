import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Determinar si estamos en modo desarrollo
const isDevelopment = import.meta.env.DEV;

// Renderizar con o sin StrictMode según el entorno
const root = createRoot(document.getElementById('root'));

// En producción, evitamos StrictMode para mejorar el rendimiento inicial
if (isDevelopment) {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  root.render(<App />);
}
