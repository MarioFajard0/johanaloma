import '../../../Styles/Contact.css';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ show: false, success: false, message: '' });
  const [emailError, setEmailError] = useState('');


  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validate email in real-time
    if (name === 'email') {
      if (!value) {
        setEmailError('');
      } else if (!validateEmail(value)) {
        setEmailError('Por favor ingresa un correo electrónico válido');
      } else {
        setEmailError('');
      }
    }
  };

  const showStatus = (show, success, message) => {
    setStatus({ show, success, message });
    setTimeout(() => setStatus({ show: false, success: false, message: '' }), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email before submission
    if (!validateEmail(formData.email)) {
      setEmailError('Por favor ingresa un correo electrónico válido');
      return;
    }
    
    setLoading(true);

    try {
      // Usar las variables del archivo .env
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        showStatus(true, true, '¡Mensaje enviado con éxito! Te contactaremos pronto.');
        setFormData({ nombre: '', email: '', mensaje: '' });
      }
    } catch {
      // Manejo silencioso del error, ya mostramos el mensaje al usuario
      showStatus(true, false, 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contactanos</h2>
      <p>Estamos aqui para resolver tus dudas y atender tus solicitudes</p>
      <form ref={form} className="contact-form" onSubmit={handleSubmit}>
        {status.show && (
          <div className={`status-message ${status.success ? 'success' : 'error'}`}>
            {status.message}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
            value={formData.email}
            onChange={handleChange}
            className={emailError ? 'invalid-input' : ''}
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="¿En qué podemos ayudarte?"
            required
            value={formData.mensaje}
            onChange={handleChange}
          />
        </div>
        <button 
          type="submit" 
          className="submit-button" 
          disabled={loading || emailError !== ''}
        >
          {loading ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
    </section>
  );
};



export default Contact;
