import "../../../Styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="map-section">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.8631030174984!2d-109.00871772374645!3d25.79261940940631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86bcd11fb8b4b2c5%3A0x517e2a5d3621c97d!2sMiguel%20Hidalgo%20y%20Costilla%20442%2C%20Centro%2C%2081200%20Los%20Mochis%2C%20Sin.!5e0!3m2!1ses!2smx!4v1709839458756!5m2!1ses!2smx"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="location-info">
            <h3>Encuéntranos</h3>
            <p>📍 Miguel Hidalgo y Costilla 442, Centro, 81200 Los Mochis, Sinaloa</p>
            <p>📞 Teléfono: (+52) 6682332722</p>
            <a href="https://maps.google.com/maps?q=Miguel+Hidalgo+y+Costilla+442,+Centro,+81200+Los+Mochis,+Sin." target="_blank" rel="noopener noreferrer" className="directions-button">
              Cómo llegar
            </a>
          </div>
        </div>
        <div className="about-content">
          <h2>Sobre JohanaSalon</h2>
          <p>
            Con más de 10 años de experiencia en el sector de la belleza,
            JohanaSalon se ha convertido en un referente de estilo y
            profesionalidad. Nuestro equipo está formado por profesionales altamente
            cualificados y en constante formación para ofrecerte las últimas
            tendencias y técnicas.
          </p>
          <p>
            En JohanaSalon no solo nos preocupamos por tu
            imagen, sino también por tu bienestar. Utilizamos productos de alta
            calidad y respetuosos con el medio ambiente para garantizar los mejores
            resultados sin comprometer tu salud ni la del planeta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
