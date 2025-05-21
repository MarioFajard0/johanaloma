import '../../../Styles/Hero.css';
import heroImage from '../../../assets/stringio.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <img src={heroImage} alt="JohanaSalon Beauty" />
      </div>
      <div className="hero-content">
        <h1>Belleza y Elegancia en JohanaSalon</h1>
        <p>Descubre una experiencia única de belleza y cuidado personal. Nuestro equipo de profesionales está listo para realzar tu belleza natural.</p>
        <a 
          href="https://wa.me/+526682332722?text=Hola%20Johana%20Loma!,%20me%20gustar%C3%ADa%20reservar%20una%20cita" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cta-button"
        >
          Reservar Cita
        </a>
      </div>
    </section>
  );
};

export default Hero;